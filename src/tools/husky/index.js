module.exports = {
    devPackages: [
        "husky",
    ],
    packageJsonHooks: [{
        "husky": {
            "hooks": {
                "pre-push": "if [[ $(git rev-parse --abbrev-ref HEAD) == master ]]; then yarn verify; fi",
                "pre-commit": "yarn stage:retrieve && lint-staged --relative --no-stash"
            }
        },
    }]
}
