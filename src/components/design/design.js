import React from 'react';
import './design.scss'
import './anna-sullivan-BBHIPz-gPXs-unsplash.jpg'

class Design extends React.Component { 

    render() {
        return(
            <div className = "design-container">
                <div className = "design-text">
                    Design
                </div>
            
                <div className = "image-container">
                    <div className="square-1"></div>
                    <div className="square-2"></div>
                    <div className="square-3"></div>
                    <div className="square-4"></div>
                </div>

                <div className = "text-section">
                    <div className = "headline">
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <div className = "body-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Diam ut venenatis tellus in metus vulputate. Urna nec 
                        tincidunt praesent semper feugiat nibh sed pulvinar.

                        
                    </div>
                        <button className = "button">
                            <span className="button-text">
                                This is a Button
                            </span>
                        </button>
                </div>
            </div>
        )
    }
}

export default Design;