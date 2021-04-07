# Node.js and gRPC

## Install grpc-tools:

> `npm install -g grpc-tools`

## Install google-protobuf:

> `npm install --save google-protobuf`

## Install grpc-js:

> `npm install --save @grpc/grpc-js`

## Generate files:

> `grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./pb/ --grpc_out=grpc_js:./pb/ --proto_path=proto proto/*.proto`

## Running project:

### Server

> `node cmd/server`

### client

> `node cmd/client`
