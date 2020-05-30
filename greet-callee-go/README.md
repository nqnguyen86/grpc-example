# protoc --proto_path=greet --go_out=greet greet\greetpb\greet.proto

# protoc --proto_path=greet greet\greetpb\greet.proto --go_out=plugins=grpc:greet

git config --global http.sslVerify false