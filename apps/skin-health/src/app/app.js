import MasterCategory from '../components/MasterCategory/master.component';


import 'antd/dist/antd.css';
//Ant design
import { Row, Col } from 'antd';
import { Layout } from 'antd';


const { Content } = Layout;


export function App() {

  return (
    <Layout style={{ padding: "0 25rem" }}>
      <Row>
        <Col span={24}>
          <Content>
            <MasterCategory />
          </Content>
        </Col>
      </Row>
    </Layout>
  );
}
export default App;
