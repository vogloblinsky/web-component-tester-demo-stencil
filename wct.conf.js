module.exports = {
    testTimeout: 60 * 1000,
    verbose: true,
    compile: 'always',
    persistent: false,
    "npm": true,
    "moduleResolution": "node",
    "plugins": {
        "local": {
            "browsers": ["chrome"]
        },
        "sauce": {
            "browsers": [{
                    "browserName": "chrome",
                    "platform": "Windows 10",
                    "version": ""
                }, {
                    "browserName": "MicrosoftEdge",
                    "platform": "Windows 10",
                    "version": ""
                }, {
                    "browserName": "Safari",
                    "platform": "macOS 10.13",
                    "version": "11"
                },
                {
                    "browserName": "internet explorer",
                    "platform": "Windows 10",
                    "version": "11"
                },
                {
                    "browserName": "firefox",
                    "platform": "macOS 10.13",
                    "version": ""
                }
            ]
        }
    },
    "suites": [
        "test/index.html"
    ]
}