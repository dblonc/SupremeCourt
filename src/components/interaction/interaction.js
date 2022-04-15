import React from 'react';
import './interaction.scss'

class Interaction extends React.Component {
    render() {
        return (
            <div className= "interaction-container">
                
                <span className="int-headline">Interaction</span>
                
                <div className="sliders">
                    <div className="slider-a">
                        Variable A: <div className="a-background"> <span className="a-number">43</span> </div>

                        <div className= "a-div">
                            <input type="range" className="var-a" name="var-a" min="0" max="100"/>
                        </div>
                 
                        
                    </div>

                    <div className="slider-b">
                        Variable B: <div className="b-background"> <span className="b-number">72</span> </div>

                    <div className="b-div">
                        <input type="range" className="var-b" name="var-b" min="0" max="100" />
                    </div>

                    </div>

                    {/* <div className="sum-total">
                        Variable A + Variable B: <span className="sum">115</span>
                    </div> */}

                </div>


            </div>
        )
    }
}

export default Interaction;