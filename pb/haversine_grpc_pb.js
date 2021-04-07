// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var haversine_pb = require('./haversine_pb.js');

function serialize_grpcproto_HaversineRequest(arg) {
  if (!(arg instanceof haversine_pb.HaversineRequest)) {
    throw new Error('Expected argument of type grpcproto.HaversineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpcproto_HaversineRequest(buffer_arg) {
  return haversine_pb.HaversineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpcproto_HaversineResponse(arg) {
  if (!(arg instanceof haversine_pb.HaversineResponse)) {
    throw new Error('Expected argument of type grpcproto.HaversineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpcproto_HaversineResponse(buffer_arg) {
  return haversine_pb.HaversineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HaversineService = exports.HaversineService = {
  calculate: {
    path: '/grpcproto.Haversine/Calculate',
    requestStream: false,
    responseStream: false,
    requestType: haversine_pb.HaversineRequest,
    responseType: haversine_pb.HaversineResponse,
    requestSerialize: serialize_grpcproto_HaversineRequest,
    requestDeserialize: deserialize_grpcproto_HaversineRequest,
    responseSerialize: serialize_grpcproto_HaversineResponse,
    responseDeserialize: deserialize_grpcproto_HaversineResponse,
  },
};

exports.HaversineClient = grpc.makeGenericClientConstructor(HaversineService);
