import { useState, useEffect } from 'react';

// Data
import { defaultItems } from '../../data/data.js';

// nmp package for scrollable and design list
import ScroolList from '../List/scroolList.component';

// ant design
import { Row, Col } from 'antd';
import { AppstoreOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Card } from 'antd';

// Import Master from Lib
import { Master } from '@skin-health/shared-ui';

const { Meta } = Card;

const style = {
  padding: '24px',
  background: '#ffffff',
  textAlign: 'center',
};

const styleTwo = {
  padding: '24px 10px',
  margin: '24px auto',
  background: '#ffffff',
};

const MasterCategory = () => {
  // State for active element name
  const [activeElement, setActiveElement] = useState('');

  // Change elements className if isActive... is true
  const [isActiveAll, setIsActiveAll] = useState(false);
  const [isActiveOthers, setIsActiveOthers] = useState(false);
  const [isActiveVaucher, setIsActiveVaucher] = useState(false);

  const [categoryName, setCategoryName] = useState([]);

  // Get all categories
  const renderAllCategories = () => {
    const array = [];

    defaultItems.map((item) => {
      return item.category.map((category) =>
        array.push({
          itemName: item.name,
          name: category.name,
          rdmValue: category.rdmValue,
          subCategory: category.subCategory,
        })
      );
    });
    setCategoryName(array);
  };

  //  Get filtered categories by category name
  const filterItems = (categoryName) => {
    const array = [];

    defaultItems.filter((item) => {
      if (item.name === categoryName) {
        item.category.map((item) =>
          array.push({
            allData: item,
            name: item.name,
          })
        );
      }
    });
    setCategoryName(array);
  };

  useEffect(() => {
    renderAllCategories();
    setActiveElement('All');
  }, []);

  return (
    <div>
      <Row style={style}>
        {/* All Categories */}
        <Master
          key={'all'}
          coverIcon={<AppstoreOutlined />}
          cardTitle={'All'}
          renderAllHandler={renderAllCategories}
          filterItemsHandler={filterItems}
        />

        {/* Render Injectables, Face, Spa, Dematology, Acne treatment, and Hydrafacial categories */}
        {defaultItems.map((item) => {
          return (
            <Master
              key={item.key}
              coverIcon={<item.icon />}
              cardTitle={item.name}
              renderAllHandler={renderAllCategories}
              filterItemsHandler={filterItems}
            />
          );
        })}

        {/* Voucher Category */}
        <Master
          key={'voucher'}
          coverIcon={<CreditCardOutlined />}
          cardTitle={'Voucher'}
          renderAllHandler={renderAllCategories}
          filterItemsHandler={filterItems}
        />
      </Row>

      {/* ScroolList component renders all categories depending of master category */}
      <Row gutter={16}>
        <Col span={24}>
          <div style={styleTwo}>
            <ScroolList data={categoryName} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MasterCategory;
