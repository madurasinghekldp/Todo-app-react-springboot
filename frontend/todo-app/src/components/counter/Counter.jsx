import React, {Component} from 'react';
import './Counter.css'

class Counter extends Component{
  constructor(){
    super();
    this.state = {
        counter:0
    }
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
    this.reset=this.reset.bind(this);
}

  render(){
    return (
      <div className="counter">
        <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <span className="count">{this.state.counter}</span>
        <div><button className="reset" onClick={this.reset}>Reset</button></div>
      </div>
    );
    }

    increment(by){
      //increment=()=>{
          //console.log(`increment-${by}`);
          //this.state.counter++;
          this.setState(
            (prevState)=>{
              return {counter: prevState.counter + by}
          }
          );
      }

      decrement(by){
        //increment=()=>{
            //console.log(`increment-${by}`);
            //this.state.counter++;
            this.setState(
              (prevState)=>{
                return {counter: prevState.counter - by}
            }
            );
        }

        reset(){
          this.setState(
            {
              counter: 0
          }
          );
        }
}

class CounterButton extends Component{

    constructor(){
        super();
        // this.state = {
        //     counter:0
        // }
        // this.increment=this.increment.bind(this);
        // this.decrement=this.decrement.bind(this);
    }

    render(){
    //render=()=>{
    return (
      <div className="counter">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
        {/*<span className="count">{this.state.counter}</span>*/}
      </div>
    ); 
    } 


    // increment(){
    // //increment=()=>{
    //     //console.log('increment');
    //     //this.state.counter++;
    //     this.setState({
    //         counter: this.state.counter + this.props.by
    //     });
    //     this.props.incrementMethod(this.props.by);
    // }

    // decrement(){
    //   //increment=()=>{
    //       //console.log('increment');
    //       //this.state.counter++;
    //       this.setState({
    //           counter: this.state.counter - this.props.by
    //       });
    //       this.props.decrementMethod(this.props.by);
    //   }
  }
CounterButton.defaultProps={
  by:1
}
  
  export default Counter;