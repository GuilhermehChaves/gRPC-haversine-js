const messages = require("../pb/haversine_pb");

const calculate = (call, callback) => {
    const req = call.request;
    
    var firstLocation = {
        lat: toRadian(req.getFirstcoords().getLat()),
        long: toRadian(req.getFirstcoords().getLong())
    }

    var secondLocation = {
        lat: toRadian(req.getSecondcoords().getLat()),
        long: toRadian(req.getSecondcoords().getLong())
    }

    const earthRay = 6371e3;
    const deltaLat = secondLocation.lat - firstLocation.lat;
    const deltaLong = secondLocation.long - firstLocation.long;

    const a = Math.pow(Math.sin(deltaLat / 2), 2) +
        Math.cos(firstLocation.lat) *
        Math.cos(secondLocation.lat) *
        Math.pow(Math.sin(deltaLong / 2), 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = earthRay * c

    var response = new messages.HaversineResponse();
    response.setDistance(Math.round(d));

    callback(null, response); //Aproximado
};

const toRadian = coord => {
    return coord * Math.PI / 180;
}

module.exports = {
    calculate,
}