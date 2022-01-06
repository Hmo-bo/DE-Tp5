import React from 'react';
import de1 from './img/1.png';
import de2 from './img/2.png';
import de3 from './img/3.png';
import de4 from './img/4.png';
import de5 from './img/5.png';
import de6 from './img/6.png';


class De extends React.Component {
     
    state = {
        images: [de1, de2, de3, de4, de5, de6],
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Score: {this.props.score} / {this.props.clicks} Clks</h2>
                    <h2>{this.props.status}</h2>
                    <img src={this.state.images[this.props.de1]}/>
                    <img src={this.state.images[this.props.de2]} />
                </div>
            </div>
            );
        }

}
export default De;