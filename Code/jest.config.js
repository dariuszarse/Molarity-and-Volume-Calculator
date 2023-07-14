module.exports = {
    globals: {
        "ts-jest": {
           tsConfigFile: "tsconfig.json"
         },
         TextEncoder: require("util").TextEncoder,
         TextDecoder: require("util").TextDecoder
     },
    testEnvironment: 'jest-environment-jsdom'
  };

