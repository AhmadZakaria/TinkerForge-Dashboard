'use strict';

var TFSensorOptions = {

    temperatureSensorOptions: {
        type: "Temperature Sensor",
        //sensor constructor
        ctor: "BrickletTemperature",
        //sensor measurement normalization factor
        normFact: 100.0,
        //sensor callback event type
        callbackEvent: "CALLBACK_TEMPERATURE",
        //sensor callback period function type
        frequency: 500,
        // periodic callback function name
        periodFunc: 'setTemperatureCallbackPeriod',
        // direct get measurement function name
        simpleFunc: 'getTemperature',
        // sensor UID
        UID: 'tkw',
        //
        target: 'Tinkerforge',
        //
        active: true,
        unit: "°C"    },

    ambientLightSensorOptions: {
        type: "Ambient Sensor",
        //sensor constructor
        ctor: "BrickletAmbientLightV2",
        //sensor measurement normalization factor
        normFact: 100.0,
        //sensor callback event type
        callbackEvent: "CALLBACK_ILLUMINANCE",
        //sensor callback period function type
        frequency: 500,
        // callback function name
        periodFunc: 'setIlluminanceCallbackPeriod',
        // direct get measurement function name
        simpleFunc: 'getIlluminance',
        // sensor UID
        UID: 'yih',
        active: true,
        unit: "lux",
        target: "Tinkerforge"
    },

    humiditySensorOptions: {
        type: "Humidity Sensor",
        //sensor constructor
        ctor: "BrickletHumidity",
        //sensor measurement normalization factor
        normFact: 10.0,
        //sensor callback event type
        callbackEvent: "CALLBACK_HUMIDITY",
        //sensor callback period function type
        frequency: 500,
        // callback function name
        periodFunc: 'setHumidityCallbackPeriod',
        // direct get measurement function name
        simpleFunc: 'getHumidity',
        // sensor UID
        UID: 'xDM',
        active: true,
        unit: "%",
        target: "Tinkerforge"
    },
    soundSensorOptions: {
        type: "Sound Intensity Sensor",
        //sensor constructor
        ctor: "BrickletSoundIntensity",
        //sensor measurement normalization factor
        normFact: 1.0,
        //sensor callback event type
        callbackEvent: "CALLBACK_INTENSITY",
        //sensor callback period function type
        frequency: 500,
        // callback function name
        periodFunc: 'setIntensityCallbackPeriod',
        // direct get measurement function name
        simpleFunc: 'getIntensity',
        // sensor UID
        UID: 'vqY',
        active: true,
        unit: "W/m^2",
        target: "Tinkerforge"

    },
    phoneSensorOptions: {
        type: "Accelerometer",
        frequency: "500",
        UID: "androidXYZ",
        target: "android",
        active: true,
        unit: "m/s^2"
    }

};
module.exports = TFSensorOptions;
