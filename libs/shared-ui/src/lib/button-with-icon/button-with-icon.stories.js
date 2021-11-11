import ButtonWithIcon from './button-with-icon';
import { MedicineBoxOutlined, LaptopOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


 export default {
  component: ButtonWithIcon,
  title: 'ButtonWithIcon',
};

const Template = (args) => <ButtonWithIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'In Clinic',
  type:"secondary",
  icon:<MedicineBoxOutlined />,
  size:"large",
  width:"15%",
  color:"#737387",
  justifyContent:"center",
  alignContent:"center",
  alignItems:"center",
  handleClick:"handleClinic()"
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Virtual Consultation',
  type:"secondary",
  icon:<LaptopOutlined />,
  size:"large",
  width:"15%",
  color:"#737387",
  justifyContent:"center",
  alignContent:"center",
  alignItems:"center",
  handleClick:"handleClinic()"
};
