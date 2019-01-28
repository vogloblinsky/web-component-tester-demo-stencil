module.exports = {
    testTimeout: 60 * 1000,
    "npm": true,
    "moduleResolution": "node",
    "plugins": {
        "local": {
            "browsers": ["chrome"]
        }
    },
    registerHooks: function(context) {
        const saucelabsPlatformsMicrosoft = [
            'Windows 10/microsoftedge@17'
        ];
        const saucelabsPlatforms = [
            ...saucelabsPlatformsMicrosoft
        ];
        context.options.plugins.sauce.browsers = saucelabsPlatforms;
    }
}