import * as yaml from 'yaml'
import { existsSync } from 'fs';
import { rm, mkdir, rename, readFile, writeFile,  } from 'fs/promises';
import { createServer, Server } from 'http';
import { promisify } from 'util';
import { exec } from 'child_process';
import { join } from 'path';
const execPromise = promisify(exec);


async function prependFile(filePath: string, contentToPrepend): Promise<void> {
  const content = await readFile(filePath, 'utf8').catch((e) => {
    console.error(e);
    throw new Error('Failed to read file');
  });

  const newContent = contentToPrepend + content;

  await writeFile(filePath, newContent, 'utf8').catch((e) => {
    console.error(e);
    throw new Error('Failed to write file');
  });
}

async function run() {
  const pathToGeneratedClient = join(__dirname, '..', 'generated-api');
  const pathToClient = join(__dirname, '..', 'src', process.env.PATH_TO_CLIENT_IN_SRC);

  if(existsSync(pathToClient)) {
    await rm(pathToClient, { recursive: true, force: true });
  }

  if(existsSync(pathToGeneratedClient)) {
    await rm(pathToGeneratedClient, { recursive: true, force: true });
  }

  const response = await fetch(process.env.OPENAPI_YAML_URL).catch((e) => {
    console.error(e);
    throw new Error('Failed to fetch OpenAPI YAML');
  });

  const openAPIYaml = await response.text()

  const yamlDoc = await yaml.parseDocument(openAPIYaml);

  let server:Server | null = null; 
  try {
    server = createServer(function (_req, res) {
  res.statusCode = 200;
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(yamlDoc.toJSON(), null, 2));
}).listen(process.env.LOCAL_SERVER_PORT);
  } catch (e) {
    console.error(e);
    throw new Error('Failed to start local server');
  }

 try {
    await execPromise('platformatic client http://localhost:9615 --frontend --language ts --name generated-api');
    await mkdir(pathToClient, { recursive: true });
    await rename(pathToGeneratedClient, pathToClient);
    await rm(join(pathToClient, 'generated-api.openapi.json'))
    await prependFile(join(pathToClient, 'generated-api.ts'), `/* eslint-disable */\n`);
    await prependFile(join(pathToClient, 'generated-api-types.d.ts'), `/* eslint-disable */\n`);
  } catch (e) {
    console.error(e); // should contain code (exit code) and signal (that caused the termination).
    throw new Error('Failed to generate client');
  }

  server.close();
}

run();
