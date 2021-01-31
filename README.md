# NodeJS Protobuf example

A simple example to build JSON application and same in protobuf to compare binary size. Following @hnasr protobuf crash course

## Prerequisites

- [NodeJS](https://nodejs.org)
- [protoc](https://github.com/protocolbuffers/protobuf/releases) (protobuf compiler)

## Setup

```bash
# Install dependencies
npm install

# Transpile .proto to .js
protoc --js_out=import_style=commonjs,binary:. employees.proto

# Build
npm run build

# Run JSON
node index.js

# Run Protobuf
node index_proto.js
```
