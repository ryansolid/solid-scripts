import { r } from 'solid-js/dom';
import './AppElement';

it('renders without crashing', () => {
  const div = document.createElement('div');
  div.appendChild(<app-element />);
  div.textContent = '';
});
