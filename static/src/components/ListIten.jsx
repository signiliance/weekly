import React ,{Component}from 'react';
import { List, Button, Divider} from 'antd';
import 'antd/dist/antd.css';
import {browserHistory} from 'react-router';
import data from '../pages/list'


class ListItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            title:data[0].title||'',
            msg:data[0].msg||'',
            data:data,
        }
    }

    handleClick=()=>{
        const path = '/admin';
        browserHistory.push(path);
    }

    handleCheck = (e) =>{
        this.setState({
            title:e.target.innerText,
        });
        this.state.data.filter((item)=>{
            if(this.state.title == item.title){
                return this.setState({
                    msg:item.msg,
                })
            }
        })
        console.log(this.state.msg)
    }

    render() {
        return (
            <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>

                <div style={{width:'30%'}}>
                <Button icon='left' style = {{marginLeft:'40px'}} onClick={this.handleClick}>Back</Button>

            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item onClick={this.handleCheck}>
                        <List.Item.Meta
                            title={<a href='#' onClick={this.handleCheck}>{item.title}</a>}
                        />
                    </List.Item>
                )}
                style={{margin:'10px 40px'}}
            />
                </div>
                <div style={{borderLeft:'1px solid #000',width:'70%',padding:'10px'}}>
                    <p>{this.state.title}</p>
                    <Divider />
                    <p>{this.state.msg}</p>
                </div>
            </div>
        )
    }
}

export default ListItem;