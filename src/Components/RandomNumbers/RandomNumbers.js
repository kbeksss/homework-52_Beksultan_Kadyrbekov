import React from 'react';
import Numbers from "../Numbers/Numbers";
import './RandomNumbers.css'

class RandomNumbers extends React.Component{
    render() {
        return(
            <div className="random">
                <div>
                    <button className="btn">New numbers</button>
                </div>
                <Numbers number="5"/>
                <Numbers number="13"/>
                <Numbers number="23"/>
                <Numbers number="25"/>
            </div>
        )
    }
}

export default RandomNumbers;