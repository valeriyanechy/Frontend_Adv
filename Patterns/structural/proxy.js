// The Proxy pattern provides a surrogate or placeholder object for another object and controls access to this other object.

function GeoCoder() {
    this.getLatLng = function (address) {
        if (address === "London") {
            return 1;
        } else if (address === "Berlin") {
            return 2;
        } else if (address === "Kyiv") {
            return 3;
        }
        return 0
    }
}

function GeoProxy() {
    let geoCoder = new GeoCoder();
    let geoCache = {};

    return {
        getLatLng: function (address) {
            if (!geoCache[address]) {
                geoCache[address] = geoCoder.getLatLng(address);
            }

            return geoCache[address]
        }
    }
}

let geo = new GeoProxy();
geo.getLatLng('Kyiv');
geo.getLatLng('Kyiv');
geo.getLatLng('Kyiv');
geo.getLatLng('Kyiv');
geo.getLatLng('Kyiv');