const axios = require("axios");

const geocode = (address, callback) => {
	const mapBox = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoicHJvZmVzc29yNzYxOSIsImEiOiJja2hsbDVtajgwNnJkMnh0NDFld3FhNW9nIn0.jG7ImYolyoxra32WqDL48g&limit=2";

	axios({ url: mapBox, responseType: "json" })
		.then((response) => {
			if (response.data.features.length === 0) {
				callback("Unable to find location, Try another search!", undefined);
			} else {
				callback(undefined, {
					latitude: response.data.features[0].center[0],
					longitude: response.data.features[0].center[1],
					location: response.data.features[0].place_name,
				});
			}
		})
		.catch(() => {
			callback("Unable to connect to location services!", undefined);
		});
};

module.exports = geocode;
