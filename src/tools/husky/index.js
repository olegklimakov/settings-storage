module.exports = {
    devPackages: [
        "husky",
    ],
    packageJsonHooks: [{
        "husky": {
            "hooks": {
                "pre-commit": "lint-staged --relative --no-stash"
            }
        },
    }]
}
