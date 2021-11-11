// HOW TO USE EXAMPLE
// import { Master } from '@skin-health/shared-ui';

// Data
// import { defaultItems } from '../../data/data.js';

// FUNCTIONS 
// Get all categories
// const renderAllCategories = () => {
//   console.log('render all categories ');
//   const array = [];

//   defaultItems.map((item) => {
//     return item.category.map((category) =>
//       array.push({
//         itemName: item.name,
//         name: category.name,
//         rdmValue: category.rdmValue,
//         subCategory: category.subCategory,
//       })
//     );
//   });
//   setCategoryName(array);
// };

//  Get filtered categories by category name
// const filterItems = (categoryName) => {
//   console.log(categoryName);
//   const array = [];

//   defaultItems.filter((item) => {
//     if (item.name === categoryName) {
//       item.category.map((item) =>
//         array.push({
//           allData: item,
//           name: item.name,
//         })
//       );
//     }
//   });
//   setCategoryName(array);
// };


/* 
            <Master
            key={item.key}
            coverIcon={<item.icon />}
            cardTitle={item.name}
            renderAllHandler={renderAllCategories}
            filterItemsHandler={filterItems}
          />
*/

import './master.module.css';
// ant design
import { Col, Card } from 'antd';

const { Meta } = Card;

export function Master({ coverIcon, cardTitle, renderAllHandler, filterItemsHandler }) {
  return (
    <Col span={3}
      onClick={() => {
        if (cardTitle.toLowerCase() === 'all') {
          renderAllHandler(cardTitle)
        } else {
          filterItemsHandler(cardTitle)
        }
      }}
    >
      <Card
        hoverable
        style={{ width: 100, fontSize: 40, padding: '15px 0' }}
        cover={coverIcon}
      >
        <Meta title={cardTitle} style={{
          padding: "10px 0"
        }} />
      </Card>
    </Col>

  );
}
export default Master;
