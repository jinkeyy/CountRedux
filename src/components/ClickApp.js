import React,{Component} from "react"
import {connect} from "react-redux"
class ClickApp extends Component{
    Add = () =>{
        console.log("Add")
        this.props.dispatch({type:"Add"})
    }
    Sub = () =>{
        console.log("Sub")
        this.props.dispatch({type:"Sub"})
    }
    render(){
        return(
            <div>
                <div className="CountShow">Count= {this.props.count}</div>
                <div className="CountAction">
                    <button type="button" className="CountAdd" onClick={this.Add}>+</button>
                    <button type="button" className="CountSub" onClick={this.Sub}>-</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        count:state.count
    }
}
export default connect(mapStateToProps)(ClickApp)