import React from "react"
import { scaleLinear, max, axisLeft, axisBottom, select } from "d3"
import './scatterplot.scss'


export default class ScatterPlot extends React.Component {
    constructor(props) {
        super(props)
       
    }

    render() {
        const margin = { top: 10, right: 8, bottom: 50, left: 70 }
        const width = 1170 - margin.left - margin.right
        const height = 525 - margin.top - margin.bottom
        const data = this.props.data

        const x = scaleLinear()
            .domain([
                1781,
                max(data, function (d) {
                    return d[0]
                })
            ])
            .range([0, width])

        const y = scaleLinear()
            .domain([
                -101,
                max(data, function (d) {
                    return d[1]
                })
            ])
            .range([height, 0])

        return (
            <div>
                <h3 className="graph-header"> Judges by Number of Cases </h3>
                <svg
                    width={width + margin.right + margin.left}
                    height={height + margin.top + margin.bottom}
                    className="chart"
                >
                    <g
                        transform={"translate(" + margin.left + "," + margin.top + ")"}
                        width={width}
                        height={height}
                        className="main"
                    >
                        <RenderCircles  data={data} scale={{ x, y }} />
                        <Axis
                            axis="x"
                            transform={"translate(0," + height + ")"}
                            scale={axisBottom().scale(x)}
                        />
                        <Axis
                            axis="y"
                            transform="translate(0,0)"
                            scale={axisLeft().scale(y)}
                        />
                    </g>
                </svg>
            </div>
        )
    }
}

class RenderCircles extends React.Component {
    
   
    render() {
     
        let renderCircles = this.props.data.map((coords, i) => (
        <>
            <circle
                className= "circle"
                id = {i}
                cx={this.props.scale.x(coords[0])}
                cy={this.props.scale.y(coords[1])}
                r="8"
                style={{ fill: "rgba(25, 158, 199, .9)" }}
                key={i}
                data-tooltip = {coords[2]}
            />
        </>
        ))
        return <g>{renderCircles}</g>
    }
}


class Axis extends React.Component {
    componentDidMount() {
        const node = this.refs[this.props.axis]
        select(node).call(this.props.scale)
    }

    render() {
        return (
            <g
                className="main axis date"
                transform={this.props.transform}
                ref={this.props.axis}
            />
        )
    }
}


