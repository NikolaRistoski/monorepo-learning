import Master from './master';

import { CreditCardOutlined } from '@ant-design/icons';

export default {
  component: Master,
  title: 'Master',
};

const Template = (args) => <Master {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  key:"111",
  coverIcon:<CreditCardOutlined />,
  cardTitle:"All",
  renderAllHandler:"Function()",
  filterItemsHandler:"Function()"
};
