import './consultation-card.module.css';

import { Badge, Row, Col } from "antd";
import { Card } from 'antd';
import { StarFilled } from "@ant-design/icons";


// HOW TO USE IN PARRENT COMPONENT
// const [selectedSubCategory, setSelectedSubCategory] = useState([]);

// const handleCategorySelected = (name, elementId) => {
//   selectedSubCategory === elementId.replace(/ /g, "") ? setSelectedSubCategory('') : setSelectedSubCategory(elementId)
// }

// import { QuestionCircleOutlined, ClockCircleOutlined, LaptopOutlined, StarFilled } from "@ant-design/icons";
// import { ConsultationCard } from '@skin-health/shared-ui';

/*
 <ConsultationCard
 elementId="1w"
 name="Box 1 area"
 price="65-85"
 time="40 min"
 rating={5}
 review="89"
 handleCategorySelected={handleCategorySelected}
 icon1={<QuestionCircleOutlined />}
 icon2={<LaptopOutlined />}
 icon3={<ClockCircleOutlined />}
 selectedSubCategory={selectedSubCategory}
/>          
*/


export function ConsultationCard({ elementId, name, price, time, rating, review, icon1, icon2, icon3, selectedSubCategory, handleCategorySelected }) {

  return (
    <>
      <Card id={elementId} style={{ width: "100%", marginTop: "1.2rem", padding: '10px' }} hoverable className="on-hover"
        onClick={() => handleCategorySelected(name, elementId)}
      >
        <Row>
          <Col span={20}>
            <p className="card-name">{name} <span style={{ fontSize: "14px" }}>{icon1} {icon2}</span></p>
          </Col>
          <Col span={4}>
            <p className="price"><span style={{ marginRight: "5px" }}>&#163;</span>{price}</p>
          </Col>
          <Col span={24}>
            <p className="time">{time} min {icon3}  <Badge status="default" /> 2 services</p>
          </Col>

          <Col span={18}>
            <p style={{ display: 'flex' }}>

              {Array(rating)
                .fill()
                .map((_, i) => (
                  <StarFilled key={i} style={{ fontSize: "20px", color: '#fadb14', marginRight: "10px" }} />
                ))}


              <span className="review-span">{review} review</span>
            </p>
          </Col>
          {
            selectedSubCategory === elementId.replace(/ /g, "") ? <Col span={6}>
              <p>TEST KOPCE</p>
            </Col> : ''
          }
        </Row>
      </Card>
      <Row style={{ width: '100%', marginTop: '10px' }}>
        {
          selectedSubCategory === elementId.replace(/ /g, "") ? <Col span={24}>
            <p>MORE INFO</p>
          </Col> : ''
        }
      </Row>
    </>
  );
}
export default ConsultationCard;
