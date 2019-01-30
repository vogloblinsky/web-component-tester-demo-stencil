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
                    "version": "71"
                }, {
                    "browserName": "MicrosoftEdge",
                    "platform": "Windows 10",
                    "version": "18"
                }, {
                    "browserName": "Safari",
                    "platform": "macOS 10.13",
                    "version": "11"
                }, {
                    "browserName": "Safari",
                    "platform": "macOS 10.12",
                    "version": "10.1"
                }/*,
                {
                    "browserName": "internet explorer",
                    "platform": "Windows 10",
                    "version": "11"
                }*/,
                {
                    "browserName": "firefox",
                    "platform": "macOS 10.13",
                    "version": ""
                },
                {
                    "browserName": "firefox",
                    "platform": "macOS 10.13",
                    "version": "64.0"
                },
                {
                    "browserName": "firefox",
                    "platform": "macOS 10.13",
                    "version": "62.0"
                }
            ]
        }
    },
    "suites": [
        "test/index.html"
    ]
}