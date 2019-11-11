import React from 'react';
import Numbers from "../Numbers/Numbers";
import './RandomNumbers.css'

class RandomNumbers extends React.Component{
    state = {
        randomNs: []
    };
    randomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
    newNs = () => {
        const randomNs = [];
        for (let i = 0; i <= 4;){
            let number = 0;
            if(i === 0){
                number = this.randomNumber(5, 32);
            } else if(i === 1){
                number = this.randomNumber(5, 33);
            } else if(i === 2){
                number = this.randomNumber(5, 34);
            } else if(i === 3){
                number = this.randomNumber(5, 35)
            } else {
                number = this.randomNumber(5, 36);
            }

            if(randomNs.includes(number)){
                continue;
            }
            if(number < randomNs[i-1]){
                console.log('array' + randomNs[i - 1]);
                console.log('number' + number);
                continue;
            }
            console.log(i);
            console.log(number);
            randomNs.push(number);
            i++;
        }
        console.log(randomNs);
    };
    render() {
        return(
            <div className="random">
                <div>
                    <button className="btn" onClick={this.newNs}>New numbers</button>
                </div>
                <Numbers number="4"/>
                <Numbers number="13"/>
                <Numbers number="23"/>
                <Numbers number="25"/>
                <Numbers number="32"/>
            </div>
        )
    }
}

export default RandomNumbers;