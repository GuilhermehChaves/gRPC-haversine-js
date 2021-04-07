const grpc = require("@grpc/grpc-js");

const messages = require("../pb/haversine_pb");
const services = require("../pb/haversine_grpc_pb");

const client = new services.HaversineClient("localhost:50051", grpc.credentials.createInsecure());

const saoPaulo = new messages.Coords();
saoPaulo.setLat(-23.5489);
saoPaulo.setLong(-46.6388);

const minasGerais = new messages.Coords();
minasGerais.setLat(-19.8157);
minasGerais.setLong(-43.9542);

const request = new messages.HaversineRequest();
request.setFirstcoords(saoPaulo);
request.setSecondcoords(minasGerais);

client.calculate(request, function(err, response){
    console.log(response.getDistance() / 1000, "km");
});
