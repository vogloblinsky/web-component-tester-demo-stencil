module.exports = {
    testTimeout: 60 * 1000,
    "npm": true,
    "moduleResolution": "node",
    "plugins": {
        "local": {
            "browsers": ["chrome"]
        },
        "sauce": {
            "browsers": [{
                "browserName": "microsoftedge",
                "platform": "Windows 10",
                "version": ""
            }]
        }
    },
    "suites": [
        "test/index.html"
    ]
}