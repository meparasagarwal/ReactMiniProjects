import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
 constructor(props) {
   super(props)

   this.state = {
      name:'paras'
   }
   console.log('lifecycle a const');
 }
 static getDerivedStateFromProps(props,state){
     console.log('lifecycle a get derived');
     return null;
 }
 componentDidMount(){
     console.log('lifecycle a component did mount');
 }

 shouldComponentUpdate(){
     console.log('lifecycle a shouldcomptupdate');
     return true;
 }
 getSnapshotBeforeUpdate(){
     console.log('lifecycle a getsnapshot');
     return null;
 }
 componentDidUpdate(){
     console.log('lifecycle a component did update');
 }

 changeState = () =>{
     this.setState({
        name:'grayserge'  
     })
 }
  render() {
      console.log('lifecycle a render');
    return (
        <div>
      <div>Lifecycle A</div>
      <button onClick={this.changeState}>Change state</button>
      <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA