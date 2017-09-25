import React, {Component} from 'react'
const SmallCircle = (props) => (
    <div>
        <p>{props.a}</p>
    </div>
)
class SmallCircleInCircle extends Component {
    constructor(){
        super()
        this.state = { a: 'a'}
    }
    render(){
        return(
            <SmallCircle {...this.state} />
        )
    }
}
export default SmallCircleInCircle