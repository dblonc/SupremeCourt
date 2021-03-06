import React from 'react';
import './interaction.scss'

class Interaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueA: 0,
            valueB: 0,
            sum: 0
        }
        this.handleAChange = this.handleAChange.bind(this)
        this.handleBChange = this.handleBChange.bind(this)
    }

    handleAChange(e){
        this.setState({
            valueA: e.target.value
        })
    }

    handleBChange(e){
        this.setState({
            valueB: e.target.value
        })
    }
   
    render() {
        return (
            <div className= "interaction-container">
                
                <span className="int-headline">Interaction</span>
                
                <div className="sliders">
                    <div className="slider-a">
                        Variable A: <div  className="a-background"> <span className="a-number">{this.state.valueA}</span> </div>

                        <div className= "a-div">
                            <input onChange={this.handleAChange} type="range" defaultValue={this.state.valueA} className="var-a" name="var-a" min="0" max="100"/>
                        </div>
                 
                        
                    </div>

                    <div className="slider-b">
                        Variable B: <div className="b-background"> <span className="b-number">{this.state.valueB}</span> </div>

                    <div className="b-div">
                            <input onChange={this.handleBChange} type="range" defaultValue={this.state.valueB} className="var-b" name="var-b" min="0" max="100" />
                    </div>

                    </div>

                    <div className="sum-total">
                        Variable A + Variable B: <div className="sum-background"><span className="sum">{parseInt(this.state.valueA) + parseInt(this.state.valueB)}</span></div>
                    </div>

                </div>


            </div>
        )
    }
}

export default Interaction;