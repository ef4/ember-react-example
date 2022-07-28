import Modifier from 'ember-modifier';
import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import { registerDestructor } from '@ember/destroyable';

export default class ReactModifier extends Modifier {
  modify(element, [reactComponent], props) {
    if (!this.root) {
      this.root = createRoot(element);
      registerDestructor(this, () => this.root.unmount());
    }
    this.root.render(createElement(reactComponent, { ...props }));
  }
}