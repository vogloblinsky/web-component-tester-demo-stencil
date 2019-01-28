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
            }]
        }
    },
    "suites": [
        "test/index.html"
    ]
}