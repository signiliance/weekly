import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router';
import NavLink from './NavLink';

class HeadeNav extends React.Component {
    render () {
        return (
            <div style = {{height:'8vh' , backgroundColor:"#000",display:'flex',alignItems:'center'}}>
               <NavLink to='/list' style={{coloe:'#fff',fontSize:'20px',marginLeft:'50px'}}>周报记录</NavLink>
            </div>
        )
    }
}

export default HeadeNav;