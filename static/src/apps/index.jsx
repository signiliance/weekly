import React from 'react'
import { Layout,  Breadcrumb ,Row,Col,Input,Button} from 'antd';
import HeadeNav from '../components/header-nav.jsx';
//import FooterCommon from './../components/footer-common.jsx'
import 'antd/lib/layout/style/css'


const {Header,Content,Footer} = Layout;
const {TextArea} = Input;


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            msg:'',
            emial:''
        }
    }


    onChangeTitle=(e)=>{
        this.setState({
            msg:e.target.value
        })
    }

    onChangeValue = (e)=>{
        this.setState({
            emial:e.target.value
        })
    }
    render() {
        return (
            <Layout className="layout">
                <HeadeNav />
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>开开心心写周报</Breadcrumb.Item>
                    </Breadcrumb>
                        <TextArea autosize style={{marginBottom:'10px',fontSize:'25px'}} placeholder="input the title" onChange={this.onChangeTitle}/>
                        <TextArea rows={30} onChange = {this.onChangeValue}/>
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