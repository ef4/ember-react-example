# Example: Invoking React Components from Ember

This repo contains a runnable demo that shows how to invoke a react component from an Ember app.

## Run it

1. `pnpm install`
2. `cd app && pnpm run start`

## Understand it

 - `some-react-lib` is intended to stand in for your library package that contains a react component.
 - `app` is the Ember app
   - it contains a `{{react}}` element modifier that can [render a react component](./app/app/components/example.hbs) into any dom element.
   - the modifier is implemented in [app/modifiers/react.js](./app/app/modifiers/react.js).
   - in order to import the JSX component into the Ember app, we [configure ember-auto-import with JSX support](./app/ember-cli-build.js). The same webpack config could be passed to `@embroider/compat` instead, if you're using Embroider rather than the classic build pipeline.


## Gotchas

 - this example assumes your JSX is in a separate NPM package, so we're importing it via `ember-auto-import`. If instead you want to make JSX work *inside* your app's own package, you would need to move `@babel/preset-react` into the app's own babel config.
 - remember to install `ember-modifier`. It's not part of the default Ember app blueprint.
 - make sure your app declares its dependency on your library, otherwise ember-auto-import won't be able to import it. 
 - It's a good idea for the library to declare a peerDependency on `react` so that it will definitely share the app's copy.
