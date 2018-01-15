import React from 'react'
import { Layout,  Breadcrumb ,Row,Col,Input,Button} from 'antd';
import HeadeNav from '../components/header-nav.jsx';
import Fetch from '../services/FetchData';
//import FooterCommon from './../components/footer-common.jsx'
import 'antd/lib/layout/style/css'


const {Header,Content,Footer} = Layout;
const {TextArea} = Input;


class App extends React.Component {

    constructor(props){
        super(props);
        const date = new Date();
        const time = (date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日').toString();
        this.state = {
            title:'',
            content:'',
            date:time,
        }
    }


    onChangeTitle=(e)=>{
        this.setState({
            title:e.target.value
        })
    };

    onChangeValue = (e)=>{
        this.setState({
            content:e.target.value
        })
    };
    onClickSubmit = () => {
        const formData = this.state;
        Fetch.newWeeklyMsg(formData,(data)=>{
            if(data.msg === 'true'){
                console.log('submit success');
            }
        })
    };
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
                    <Button type = 'primary' size='large' style={{marginTop:'10px',float:'right'}} onClick={this.onClickSubmit}>submit</Button>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    OFO Design ©2017 Created by SIGNILIANCE
                </Footer>
            </Layout>
        )
    }
}
export default App;