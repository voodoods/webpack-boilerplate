# webpack-boilerplate
A basic webpack project setup, packed with all kinds of useful goodies.

## Table of contents
<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->
**Table of Contents**

- [Setup](#architecture)
- [Contents](#contents)
- [License](#license-usage)
- [Contributing](#contributing)

<!-- markdown-toc end -->

## Setup
This setup uses [yarn](https://yarnpkg.com/lang/en/) as its package manager. Please make sure to have it installed and run `yarn` to be able to download all necessary packages. If you prefer [npm](https://www.npmjs.com/) you can just delete the `yarn.lock` file and run `npm install`.

## Contents
This setup comes with the follwing features:
- Webpack 4 Setup including
  - SCSS support
  - separate configurations for `production` and `development`
  - hot module replacement via [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- Legacy Browser Polyfills for ES6 via [core-js](https://github.com/zloirock/core-js)
- JavaScript Linting via [eslint](https://eslint.org/)
- JavaScript Unit Testing via [jest](https://facebook.github.io/jest/)
- ES6 Support via [babeljs](https://babeljs.io/)
- An EditorConfig setup

## License
Feel free to fork this repo and modify it according to your needs. Leave me a note if you like this setup.

## Contributing
Check out our [contributing guide](CONTRIBUTING.md) for more details.
