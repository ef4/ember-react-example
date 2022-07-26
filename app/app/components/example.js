import { HelloWorld } from 'some-react-lib/hello-world.jsx';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {
  theReactComponent = HelloWorld;

  @tracked message = 'hello';

  @action toggle() { 
    if (this.message === 'hello') {
      this.message = 'goodbye';
    } else {
      this.message = 'hello';
    }
  }
}