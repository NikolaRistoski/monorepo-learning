import 'antd/dist/antd.css';

import ConsultationCard from './consultation-card';
import { QuestionCircleOutlined, ClockCircleOutlined, LaptopOutlined, StarFilled } from "@ant-design/icons";

export default {
  component: ConsultationCard,
  title: 'ConsultationCard',
};

const Template = (args) => <ConsultationCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  elementId:"test",
  name: "Box 1 area",
  price: "65-85",
  time: "40 min",
  rating: 5,
  review: "15",
  icon1:<QuestionCircleOutlined />,
  icon2:<LaptopOutlined />,
  icon3:<ClockCircleOutlined />,
  selectedSubCategory:"State",
  handleCategorySelected:"Function()"
};
