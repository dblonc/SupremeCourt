import React from 'react';
import './data.scss'
import * as d3 from 'd3';

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            judges: {},
            cases: {}
        }
        this.fetchJudges = this.fetchJudges.bind(this)
        this.formatJudges = this.formatJudges.bind(this)
        this.fetchCases = this.fetchCases.bind(this)
        this.formatCases = this.formatCases.bind(this)
    }


    fetchJudges(){
        return fetch("https://frontend-exercise-api.herokuapp.com/justices/")
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

    }



    fetchCases(){
        let year = 1795;
        while(year < 2022){
               let cases = fetch(`https://frontend-exercise-api.herokuapp.com/cases/?before=${year + 5}1231&after=${year}0101`)
                    .then((response) => response.json())
                    .then((data) => this.formatCases(Object.values(data)))
                year += 20
            
        }
        
    }

    formatCases(data) {

        let newJudges = {...this.state.judges};
        data.forEach(singleCase =>{
            singleCase.dissents.forEach(dissent => {
                newJudges[dissent].caseCount += 1
            })
            singleCase.majority.forEach(major => {
                newJudges[major].caseCount += 1
            })
            singleCase.other.forEach(oth => {
                newJudges[oth].caseCount += 1
            })
        })

        this.setState({
            judges: newJudges
        })        
    }

    // componentDidMount(){
    //     this.fetchJudges().then(()=>this.fetchCases())
    // }

    render(){
        console.log(this.state.judges)
        return(
            <div className="data-container">
                <div className = "data-title">Data</div>
                <div className="data-area">
                    <button onClick={this.fetchJudges}>Judges</button>
                    <button onClick={this.fetchCases}>Cases</button>
                    <svg width='500' height ='400'></svg>
                </div>
            </div>
        )
    }
}

export default Data;