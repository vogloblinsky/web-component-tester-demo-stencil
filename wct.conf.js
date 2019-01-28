module.exports = {
    "npm": true,
    "moduleResolution": "node",
    "plugins": {
        "local": {
            "browsers": ["chrome"]
        }
    },
    registerHooks: function(context) {
        const saucelabsPlatformsMicrosoft = [
            'Windows 10/microsoftedge@17',
            'Windows 10/internet explorer@11'
        ];
        const saucelabsPlatforms = [
            ...saucelabsPlatformsMicrosoft
        ];
        context.options.plugins.sauce.browsers = saucelabsPlatforms;
    }
}