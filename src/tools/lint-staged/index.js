module.exports = {
    devPackages: [
        "lint-staged",
    ],
    packageJsonHooks: [{
        "lint-staged": {
            "{src}/**/*": [
                "prettier --write",
                "eslint --fix",
                "git add"
            ],
        }
    }]
}
