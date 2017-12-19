import React from 'react';
import ReactDom from 'react-dom';

class HeadeNav extends React.Component {
    render () {
        return (
            <div style = {{height:'8vh' , backgroundColor:"#000",display:'flex',alignItems:'center'}}>
               <div style={{margin:'0 20px',color:'white'}}>home</div>
                <div style={{margin:'0 20px',color:'white'}}>admin</div>
                <div style={{margin:'0 20px',color:'white'}}>work</div>
            </div>
        )
    }
}

export default HeadeNav;