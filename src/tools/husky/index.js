module.exports = {
    devPackages: [
        "husky@4",
    ],
    packageJsonHooks: [{
        "husky": {
            "hooks": {
                "pre-commit": "lint-staged --relative --no-stash"
            }
        },
    }]
}
