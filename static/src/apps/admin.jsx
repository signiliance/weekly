import React ,{Component}from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import HeadeNav from '../components/header-nav.jsx'
import {connect} from 'dva';
//import FooterCommon from './../components/footer-common.jsx'
import 'antd/lib/layout/style/css'


const {Header,Content,Footer} = Layout;


class Admin extends Component {
    render() {
        return (
            <Layout className="layout">
                <HeadeNav/>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: '800' }}>
                        <p>index</p>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    OFO Design ©2016 Created by Signiliance
                </Footer>
            </Layout>
        )
    }
}
/*function mapStateToProps(state) {
    return {
        message:state.api.message,
    }
}*/

export default Admin;