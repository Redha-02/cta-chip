import { html } from 'lit';
import '../src/cta-chip.js';

export default {
  title: 'CtaChip',
  component: 'cta-chip',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <cta-chip
      style="--cta-chip-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </cta-chip>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
