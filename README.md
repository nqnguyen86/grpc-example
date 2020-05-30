# gRPC example on Go server and clients as Go, NodeJs,...

## Install on Windows

- Install Go

- Install gRPC 

    `go get google.golang.org/grpc`

- Proto Buffer: download appropriate version from https://github.com/protocolbuffers/protobuf/releases

    - add C:\proto3\bin to your PATH

- Install Go plugin protoc-gen-go for protocol compiler:

    `$ set GO111MODULE=on  # Enable module mode`

    `$ go get github.com/golang/protobuf/protoc-gen-go@v1.3`

Note: I recommend use below v1.4 because some problems of higher versions
ref: https://www.reddit.com/r/golang/comments/fe3a4k/documentation_on_getting_grpc_working_with_the/

Ref to install: https://grpc.io/docs/languages/go/quickstart/

## Setup Server

cd greet-server

- Compiler proto buffer to gRPC 

`protoc --proto_path=greet greet\greetpb\greet.proto --go_out=plugins=grpc:greet`

- Start server

`go run server.go`

## Setup client on Go project
`cd greet-callee-go`

## Setup client on NodeJS project
`cd greet-calledd-nodejs`

`npm install`

### Option 1: get parameters in command

`node client.js Hello Everyone`

### option 2: Edit parameters in code

`node client.js`

