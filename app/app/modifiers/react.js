import Modifier from 'ember-modifier';
import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

export default class ReactModifier extends Modifier {
  modify(element, [reactComponent], props) {
    if (!this.root) {
      this.root = createRoot(element);
    }
    this.root.render(createElement(reactComponent, { ...props }));
  }
}