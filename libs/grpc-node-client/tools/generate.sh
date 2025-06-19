# Скрипт должен выполняться относительно корня репозитория
output_path=libs/grpc-node-client/compiled

npx grpc_tools_node_protoc \
  --plugin=protoc-gen-ts_proto=node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=$output_path \
  --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false,exportCommonSymbols=false,outputIndex=false,esModuleInterop=true,globalThisPolyfill=true,comments=false \
  --proto_path=libs/grpc/proto/ \
  libs/grpc/proto/*.proto

# Меняем интерфейсы на типы, пока не будет решения в рамках
# https://github.com/stephenh/ts-proto/issues/1109.
# Без этого библиотека не будет собираться
perl -i -pe's/interface MessageFns<T>/type MessageFns<T> =/g' $output_path/*.ts
