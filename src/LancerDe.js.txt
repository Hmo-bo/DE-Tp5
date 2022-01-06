import React from 'react';
import De from './De.js';


class LancerDe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            de1 : 1,
            de2 : 2,
            status : "Play",
            score : 0,
            clicks : 0,
        };
        this.lancer = this.lancer.bind(this);
        this.reset = this.reset.bind(this);
    }
    
    lancer() {
        this.setState({
            de1 : Math.floor(Math.random() * 6),
            de2 : Math.floor(Math.random() * 6),
            status : this.state.de1 == this.state.de2  ? "YOU WIN" : "TRY AGAIN",
            clicks : this.state.clicks + 1,
            score : this.state.de1 == this.state.de2  ? this.state.score+1 : this.state.score-1
        }); 
        
    }

    reset() {
        this.setState({
            de1 : 1,
            de2 : 2,
            status : "Play",
            clicks : 0,
            score : 0
        }); 
        
    }

    

    render() {
        return (
            <div>
                <De de1={this.state.de1} de2={this.state.de2} status={this.state.status} clicks={this.state.clicks}  score={this.state.score} />
                                       
                <button onClick={this.state.clicks < 10 ? this.lancer : null}><h3>Lancer De </h3></button>
                <button onClick={this.reset}><h3>Reset</h3></button>

            </div>
            );
        }

}
export default LancerDe;