module.exports = {
    testTimeout: 60 * 1000,
    "npm": true,
    "moduleResolution": "node",
    "plugins": {
        "local": {
            "browsers": ["chrome"]
        }
    },
    "suites": [
        "test/index.html"
    ]
}