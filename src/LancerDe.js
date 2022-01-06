import React from 'react';
import De from './De.js';


class LancerDe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            de1 : 5,
            de2 : 5,
            status : ""
        };
        this.lancer = this.lancer.bind(this);
    }
    
    lancer() {
        this.setState({
            de1 : Math.floor(Math.random() * 6),
            de2 : Math.floor(Math.random() * 6),
            status : this.state.de1 == this.state.de2  ? "YOU WIN" : "TRY AGAIN",
                     
        }); 
        
    }

    

    render() {
        return (
            <div>
                <De de1={this.state.de1} de2={this.state.de2} status={this.state.status}/>
                                       
                <button onClick={this.lancer}><h3>Lancer De</h3></button>
                
            </div>
            );
        }

}
export default LancerDe;