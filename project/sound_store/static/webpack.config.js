"use strict";

var webpack = require("webpack");

module.exports = {
    "entry": "./src",
    "module": {
        "loaders": [
            {
                "loader": "strict-loader"
            }
        ]
    },
    "output": {
        "filename": "./js/test.js",
        "library": "test"
    },
    "watch": true,
    "watchOptions": {
        "aggregateTimeout": 100
    },
	"plugins": [
		//new webpack.optimize.UglifyJsPlugin({
			//"compress": {
				//"warnings": false
			//}
		//})
	]
};

