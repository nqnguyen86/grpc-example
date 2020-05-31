var path = require('path');
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');

var PROTO_PATH = path.resolve(__dirname, '..\\greet-callee-nodejs\\greetpb\\greet.proto');
console.log(PROTO_PATH)

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
// console.log(grpc.loadPackageDefinition(packageDefinition).greet.GreetService)

var greetPackage = grpc.loadPackageDefinition(packageDefinition).greet;

async function main() {
    var stub = new greetPackage.GreetService('localhost:50051',
        grpc.credentials.createInsecure());

    // Get parameters from process
    const greetRequest = {
        first_name: process.argv[2] || 'Unknow first',
        last_name: process.argv[3] || 'Unknow last'
    };
    //Promise
    // let result = await stub.Greet({
    //     greeting: greetRequest
    // }, function (err, response) {
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         console.log('Response from NodeJS Greet: ', response.result);
    //     }
    // });

    //Tranditional way
    stub.Greet({
        greeting: {
            first_name: "Viet",
            last_name: "Quang",
        }
    }, function (err, response) {
        if (err) {
            console.error(err);
        } else {
            console.log('Response from NodeJS Greet: ', response.result);
        }
    });
    console.log('Finish')
}

main();