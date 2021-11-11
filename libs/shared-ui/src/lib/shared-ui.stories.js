import SharedUi from './shared-ui';

export default {
  component: SharedUi,
  title: 'SharedUi',
};

const Template = (args) => <SharedUi {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
