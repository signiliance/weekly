import React from 'react'
import { Layout,  Breadcrumb ,Row,Col,Input,Button} from 'antd'
import HeadeNav from '../components/header-nav.jsx'
//import FooterCommon from './../components/footer-common.jsx'
import 'antd/lib/layout/style/css'


const {Header,Content,Footer} = Layout;
const {TextArea} = Input;


class App extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <HeadeNav />
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>开开心心写周报</Breadcrumb.Item>
                    </Breadcrumb>
                        <TextArea autoSize = {{minRows:1,maxRows:6}} style={{height:'75vh'}}/>
                    <Button type = 'primary' size='large' style={{marginTop:'10px',float:'right'}}>submit</Button>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    OFO Design ©2017 Created by SIGNILIANCE
                </Footer>
            </Layout>
        )
    }
}
export default App;