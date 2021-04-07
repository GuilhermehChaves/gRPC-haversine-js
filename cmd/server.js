const services = require("../pb/haversine_grpc_pb");
const grpc = require("@grpc/grpc-js");

const haversine = require("../services/haversine");

const server = new grpc.Server();
server.addService(services.HaversineService, haversine);

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    console.log("Starting at: 50051");
    server.start();
});
