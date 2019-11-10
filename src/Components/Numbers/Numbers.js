import React from 'react';
import './Numbers.css';
function Numbers(props){
    return(
        <div className="numbers">
            {props.number}
        </div>
    );
}

export default Numbers;