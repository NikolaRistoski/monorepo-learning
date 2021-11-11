import SelectedBtn from './selected-btn';

export default {
  component: SelectedBtn,
  title: 'SelectedBtn',
};

const Template = (args) => <SelectedBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
