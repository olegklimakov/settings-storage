const commonRules = require('../common-rules')

module.exports = {
    extends: ['airbnb-typescript/base', 'eslint-config-prettier'],
    rules: {
        ...commonRules.enumShadow
    }
};
