# Storage for TRIV settings

## 👉 [Triv documentation](https://github.com/olegklimakov/triv)

## How to setup your project

1. Create index.js file in your repository. Put inside instructions for triv.

   ```javascript
   module.exports = {
       front: {
           directories: [
               {
                   name: 'es-lint',
                   path: 'src/linters/es-lint',
               },
               ...commonLibs
           ]
       },
       back: {
           directories: [
               {
                   name: 'es-lint',
                   path: 'src/linters/es-lint-backend',
               },
               ...commonLibs
           ]
       },
   }
   
   ```

2. Params `front` and `back` is the parameter for `tech` property  in your `.triv.json` file.

3.  `Directories` - contains rules, with name and path to this rule

4. `src folder` contains rules. Rule example:

```javascript
module.exports = {
    devPackages: [
        "eslint",
        "eslint-config-airbnb-typescript",
        "eslint-plugin-import@^2.22.0",
        "@typescript-eslint/eslint-plugin@^4.4.1",
        "eslint-config-prettier",
    ],
    files: [
        '.eslintrc.js'
    ]
}
```

5. Available properties for rule:

`devPackages` (string[]) - contains packages which triv will install to dev dependancy in your repository

`files` (string[]) - name and path to file.This file will be coppied to root folder

`packageJsonHooks` (object[]) - will add this property in package json file

