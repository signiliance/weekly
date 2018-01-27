import React ,{Component}from 'react';
import { List, Button, Divider,Spin} from 'antd';
import 'antd/dist/antd.css';
import {browserHistory} from 'react-router';
import data from '../pages/list';
import Fetch from '../services/FetchData';
import ReactMarkdown from 'react-markdown';
//import 'whatwg-fetch';
let shuzu = data;let i = 0;
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

    componentDidMount(){
        Fetch.getListMsg((data)=>{
            //console.log(data);
            //console.log(typeof data);
            this.setState({
                data:data,
                loading:false,
        });
            i = 0;
            Object.keys(this.state.data).forEach(key=>{
                shuzu[i].title = key;shuzu[i].msg = this.state.data[key].split('$$$$$$')[0];
                shuzu[i].date=this.state.data[key].split('$$$$$$')[1];
                i++;
            });
            this.setState({
                msg:'222',
            })
            //console.log(this.state);
        })
    }

    handleClick=()=>{
        const path = '/admin';
        browserHistory.push(path);
    };

    render() {
        const formitems = shuzu.map(keys =>{
            return (
                <div>
                    <p>{keys.title}</p><p>{keys.date?keys.date:''}</p><br />
                <ReactMarkdown source={keys.msg} />
                <Divider />
                </div>
            )
        });
        return ( this.state.loading ? <div style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><Spin /></div> :
            <div style={{width:'80vw'}}>
                <div style = {{marginTop:10}}>
                <Button icon='left' style = {{marginLeft:'40px'}} onClick={this.handleClick}>Back</Button>
                </div>
                <div style = {{marginTop:10,marginLeft:30}}>
                    {formitems}
                </div>

            </div>
        )
    }
}

export default ListItem;