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
                continue;
            }
            randomNs.push(number);
            i++;
        }
        this.setState({randomNs});
    };
    render() {
        return(
            <div className="random">
                <div>
                    <button className="btn" onClick={this.newNs}>New numbers</button>
                </div>
                <Numbers number={this.state.randomNs[0]}/>
                <Numbers number={this.state.randomNs[1]}/>
                <Numbers number={this.state.randomNs[2]}/>
                <Numbers number={this.state.randomNs[3]}/>
                <Numbers number={this.state.randomNs[4]}/>
            </div>
        )
    }
}

export default RandomNumbers;