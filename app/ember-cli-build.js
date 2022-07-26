'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      webpack: {
        module: {
          rules: [
            {
              test: /some-react-lib\/.*\.jsx/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [['@babel/preset-react', { runtime: 'automatic' }]],
                },
              },
            },
          ],
        },
      },
    }
  });

  return app.toTree();
};
