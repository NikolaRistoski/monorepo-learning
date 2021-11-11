import ButtonWithIcon from './button-with-icon';
import { MedicineBoxOutlined, LaptopOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


export default {
  component: ButtonWithIcon,
  title: 'ButtonWithIcon',
  argTypes: {
    justifyContent: {
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      control: { type: 'radio' }
    },
    alignContent: {
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
      control: { type: 'radio' }
    },
    alignItems: {
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      control: { type: 'radio' }
    },
    type: {
      options: ['primary', 'default', 'dashed', 'text', 'link',],
      control: { type: 'select' }
    },
    size: {
      options: ['large', 'small', 'default'],
      control: { type: 'select' }
    },
    color: {
      control:'color'
    }

  }
};

const Template = (args) => <ButtonWithIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'In Clinic',
  type: "secondary",
  icon: <MedicineBoxOutlined />,
  size: "large",
  width: "15%",
  color: "#737387",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  handleClick: "handleClinic()"
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Virtual Consultation',
  type: "secondary",
  icon: <LaptopOutlined />,
  size: "large",
  width: "15%",
  color: "#737387",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  handleClick: "handleClinic()"
};
