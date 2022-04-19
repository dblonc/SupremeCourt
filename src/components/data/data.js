import React from 'react';
import './data.scss'
import ScatterPlot from '../scatterplot/scatterplot';

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
        this.calculateData = this.calculateData.bind(this)
        this.resetCases = this.resetCases.bind(this)
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
                caseCount: 0,
                justiceName: justice.name
            }
        })

        this.setState({
            judges: tempJudges
        })

    }



    fetchCases(){
        let year = 1795;
        while(year < 2022){
               let cases = fetch(`https://frontend-exercise-api.herokuapp.com/cases/?before=${year + 100}1231&after=${year}0101`)
                    .then((response) => response.json())
                    .then((data) => this.formatCases(Object.values(data)))
                year +=101
            
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

    resetCases(){
        let newJudges = {...this.state.judges};

        Object.values(newJudges).forEach(judge =>{
            judge.caseCount = 0
        })

        this.setState({
            judges: newJudges
        })
    }

    calculateData(){
        let data = []
        Object.values(this.state.judges).forEach(judge =>{
            
            data.push([parseInt(judge.startDate.slice(0,4)), judge.caseCount, judge.justiceName])
        })
        return data
    }


    

    render(){
        console.log(this.state.judges)
        return(
            <div className="data-container">
                <div className = "data-title">Data</div>
                <div className="data-area">
                    <button className="graph-btn" onClick={() => { this.resetCases(); this.fetchJudges(); this.fetchCases() }}> 
                    <span className="graph-btn-text">Click here to Generate Graph!</span></button>
                    <ScatterPlot  data={this.calculateData()}/>
                    <div className="no-of-cases">  Number of Cases</div>
                    <div className= "years">Years</div>
                </div>
            </div>
        )
    }
}

export default Data;