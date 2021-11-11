import MoreInfo from './more-info';

export default {
  component: MoreInfo,
  title: 'MoreInfo',
};

const Template = (args) => <MoreInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
