./node_modules/.bin/grpc_tools_node_protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=libs/grpc-web-client/compiled \
  --ts_proto_opt=env=browser,outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false,exportCommonSymbols=false,outputIndex=true,esModuleInterop=true \
  --proto_path=libs/grpc/proto/ \
  libs/grpc/proto/*.proto
