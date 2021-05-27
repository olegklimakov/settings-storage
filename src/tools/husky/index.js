module.exports = {
    devPackages: [
        "husky@4.3.8",
    ],
    packageJsonHooks: [{
        "husky": {
            "hooks": {
                "pre-commit": "lint-staged --relative --no-stash"
            }
        },
    }]
}
