import React,{Component} from 'react';
import { Form, Icon, Input, Button,Row,Col} from 'antd';
//import 'antd/lib/layout/style/css';
import 'antd/dist/antd.css';
//import { connect } from 'dva';
//import styles from '../css/index.less'
import {browserHistory} from 'react-router';


const FormItem = Form.Item;

class NormalLoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
                userName:'',
                password:''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        //console.log(this.state);
        if(this.state.userName=='ofo'&&this.state.password=='123') {
            const path = '/admin';
            browserHistory.push(path);
        }
    }
    onchangeUserName =(e) =>{
        this.setState({
            userName:e.target.value,
        })
    }
    onchangePassWord =(e) =>{
        this.setState({
            password:e.target.value,
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
                <Col style={{ width: '300px' }}>
                <div style = {{textAlign:'center',lineHeight:'40px',height:'40px',fontSize:18,marginBottom:15}}>Weekly</div>
                <Form onSubmit={this.handleSubmit} style = {{maxWidth: '300px'}}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange = {this.onchangeUserName} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange = {this.onchangePassWord}  type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" onSubmit={this.handleSubmit} htmlType="submit" style = {{width: '100%'}}>
                        Sign in
                    </Button>
                </FormItem>
            </Form>
                </Col>
            </Row>
        );
    }
}

const LoginPage = Form.create()(NormalLoginForm);

/*function mapStateToProps(state) {
    return {
        message: state.api.message,
    }
}*/

export default LoginPage;