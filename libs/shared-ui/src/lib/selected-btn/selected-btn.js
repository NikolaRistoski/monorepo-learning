import './selected-btn.module.css';

// HOW TO USE EXAMPLE
// import { SelectedBtn } from '@skin-health/shared-ui';
// import { CheckCircleOutlined } from '@ant-design/icons';
// <SelectedBtn type="primary" icon={<CheckCircleOutlined />} title="Selected" color="#1890ff" size="large" border="1px solid #1890ff"/>


import { Button } from 'antd';

export function SelectedBtn({type, icon, title, color, size, border}) {
  return (

    <Button type={type} icon={icon} size={size} style={{
      background: color,
      border: border
    }}>
      {title}
    </Button>
  );
}
export default SelectedBtn;
