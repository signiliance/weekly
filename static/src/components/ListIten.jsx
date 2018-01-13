import React ,{Component}from 'react';
import { List, Button, Divider,Spin} from 'antd';
import 'antd/dist/antd.css';
import {browserHistory} from 'react-router';
import data from '../pages/list';
import Fetch from '../services/FetchData';
//import 'whatwg-fetch';
let shuzu = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];let i = 0;
//const comFetch = FetchData.comFetch;
class ListItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            title:'',
            msg:'',
            //data:{},
            loading:true,
        }
    }

    componentWillMount(){
        Fetch.getListMsg((data)=>{
            console.log(data);
            //console.log(typeof data);
            this.setState({
                data:data,
                loading:false,
        });
            i = 0;
            Object.keys(this.state.data).forEach(key=>{
                shuzu[i].title = key;shuzu[i].msg = this.state.data[key];
                i++;
            });
            //console.log(this.state);
        })
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
        //console.log(this.state.msg)
    }

    render() {
        {console.log(this.state.data)}
        return ( this.state.loading ? <Spin /> :
            <div style={{width:'80vw'}}>
                <div style = {{marginTop:10}}>
                <Button icon='left' style = {{marginLeft:'40px'}} onClick={this.handleClick}>Back</Button>
                </div>
                <div style = {{marginTop:5,marginLeft:20}}>
                <List
                    itemLayout="horizontal"
                    dataSource={shuzu}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<p>{item.title}</p>}
                                description={item.msg}
                            />
                        </List.Item>
                    )}
                />
                </div>

            </div>
        )
    }
}

export default ListItem;