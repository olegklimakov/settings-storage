module.exports = {
    devPackages: [
        "lint-staged",
    ],
    packageJsonHooks: [{
        "lint-staged": {
            "*.{ts,js}": [
                "prettier --write",
                "eslint --fix",
                "git add"
            ],
            "*.{html,scss,css}": [
                "prettier --write",
                "git add"
            ]
        }
    }]
}
