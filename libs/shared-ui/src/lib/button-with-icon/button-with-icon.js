import './button-with-icon.module.css';
import { Button } from 'antd';

// HOW TO USE IN in parrent component

// import { ButtonWithIcon } from '@skin-health/shared-ui'
// import { MedicineBoxOutlined } from '@ant-design/icons';

/*               
              <ButtonWithIcon
                title={'In Clinic'}
                type="secondary"
                icon={<MedicineBoxOutlined />}
                size="large"
                width="100%"
                color="#737387"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                handleClick={handleClinic}
              />
*/

export function ButtonWithIcon({ title, type, icon, size, width, color, justifyContent, alignContent, alignItems, handleClick }) {
  return (
    <Button
      type={type}
      icon={icon}
      size={size}
      style={{
        width: width,
        display: 'flex',
        justifyContent: justifyContent,
        alignContent: alignContent,
        alignItems: alignItems,
        color: color
      }}
      onClick={() => handleClick()}
    >
      {title}
    </Button>
  );
}
export default ButtonWithIcon;

