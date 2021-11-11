import { Row, Col } from 'antd';
import { Button } from 'antd';
import { MedicineBoxOutlined, LaptopOutlined } from '@ant-design/icons';

import { useState } from 'react';
import CounsultationCard from '../ConsultationCard/ConsultationCard.component';
import { useEffect } from 'react/cjs/react.development';

// Button from Lib
import { ButtonWithIcon } from '@skin-health/shared-ui';

// Consultation card from Lib
import { QuestionCircleOutlined, ClockCircleOutlined, StarFilled } from "@ant-design/icons";
import { ConsultationCard } from '@skin-health/shared-ui';

const style = {
  textAlign: 'center',
};

const Consultation = ({ allData }) => {
  // State that keep the data for in clinic and online services
  const [inClinic, setInClinic] = useState([]);
  const [online, setOnline] = useState([]);

  // State for rendering services depending of user selected filter (button)
  const [isOnline, setIsOnline] = useState(false);
  const [isClinic, setIsClinic] = useState(false);

  // State for consultation card from Lib
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);

  // Consultation card from Lib
  const handleCategorySelected = (name, elementId) => {
    // console.log(elementId)
    setSelectedSubCategory(elementId)
  //  name.replace(/ /g, "") === elementId.replace(/ /g, "") ? setSelectedSubCategory('') : setSelectedSubCategory(elementId)
  // console.log(name.replace(/ /g, "") === elementId.replace(/ /g, ""))
  }

  // Is service virtual avaliable
  const [isCategoryVirtualAvaliable, setIsCategoryVirtualAvaliable] =
    useState(null);

  // Filter for Virtual Consultation filter (button)
  const handleOnline = () => {
    const onlineArr = [];

    allData.map((item) => {
      if (item.online === true || item.online === undefined) {
        onlineArr.push(item);
      }
    });

    setOnline(onlineArr);
    setIsOnline(true);
    setIsClinic(false);
  };

  // Filter for In Clinic filter (button)
  const handleClinic = () => {
    const clinicArr = [];

    allData.map((item) => {
      if (item.online === false || item.online === undefined) {
        clinicArr.push(item);
      }
    });

    setInClinic(clinicArr);

    setIsClinic(true);
    setIsOnline(false);
  };

  // Check if service is avaliable online
  const checkService = () => {
    allData.map((item) => {
      if (item.online === undefined) {
        setIsCategoryVirtualAvaliable(false);
      } else {
        setIsCategoryVirtualAvaliable(true);
      }
    });
  };

  useEffect(() => {
    handleClinic();
    setIsClinic(true);
    checkService();
  }, [allData]);

  return (
    <>
      {/* Filter buttons In Clinic and Virtual Consultation */}
      <Row style={style}>
        {isCategoryVirtualAvaliable ? (
          <>
            <Col span={12}>
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
            </Col>

            <Col span={12}>
              <ButtonWithIcon
                title={'Virtual Consultation'}
                type="secondary"
                icon={<LaptopOutlined />}
                size="large"
                width="100%"
                color="#737387"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                handleClick={handleOnline}
              />
            </Col>
          </>
        ) : (
          <Col span={24}>
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
          </Col>
        )}
      </Row>

      <Row>
        {/* If user select Virtual Consultation button */}
        {isOnline &&
          online.map((item) => {
            const { name, price, time, rating, review } = item;
            return (
              <ConsultationCard
              key={name}
              elementId={name}
              name={name}
              price={price}
              time={time}
              rating={rating}
              review={review}
              handleCategorySelected={handleCategorySelected}
              icon1={<QuestionCircleOutlined />}
              icon2={<LaptopOutlined />}
              icon3={<ClockCircleOutlined />}
              selectedSubCategory={selectedSubCategory}
             /> 
            );
          })}
        {/* If user select In Clinic button */}
        {isClinic &&
          inClinic.map((item) => {
            const { name, price, time, rating, review } = item;
            return (
              <ConsultationCard
              key={name}
              elementId={name}
              name={name}
              price={price}
              time={time}
              rating={rating}
              review={review}
              handleCategorySelected={handleCategorySelected}
              icon1={<QuestionCircleOutlined />}
              icon2={<LaptopOutlined />}
              icon3={<ClockCircleOutlined />}
              selectedSubCategory={selectedSubCategory}
             /> 
              
            );
          })}
      </Row>
    </>
  );
};

export default Consultation;
