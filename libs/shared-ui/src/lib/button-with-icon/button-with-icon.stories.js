import ButtonWithIcon from './button-with-icon';
import { MedicineBoxOutlined } from '@ant-design/icons';
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
  width:"100%",
  color:"#737387",
  justifyContent:"center",
  alignContent:"center",
  alignItems:"center",
  handleClick:"handleClinic()"
};
