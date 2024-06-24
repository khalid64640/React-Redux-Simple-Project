import React from 'react';

function Header(props){
    console.log(props.data);
    return(
          <div className="header">
              <h1 className="header-title">{props.data.length}</h1>
          </div>
    )      
}


export default Header