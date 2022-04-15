import React from 'react';
import './data.scss'
import * as d3 from 'd3';

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            judges: {}
        }
        this.fetchJudges = this.fetchJudges.bind(this)
        this.formatJudges = this.formatJudges.bind(this)
    }


    fetchJudges(){
        const judges = fetch("https://frontend-exercise-api.herokuapp.com/justices/")
                        .then((response)=>response.json())
                        .then((data)=> this.formatJudges(data))
      
    }

    formatJudges(data){
        let tempJudges = {};
        data.forEach(justice =>{
            tempJudges[justice.id] = {
                startDate: justice.start_date,
                caseCount: 0
            }
        })

        this.setState({
            judges: tempJudges
        })

        console.log(tempJudges)
    }



    render(){
        return(
            <div className="data-container">
                <div className = "data-title">Data</div>
                <div className="data-area">
                    <button onClick={this.fetchJudges}>Judges</button>
                </div>
            </div>
        )
    }
}

export default Data;