import React, { Component } from 'react'

class LifecycleB extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name:'paras'
   }
   console.log('lifecycle b const');
 }
 static getDerivedStateFromProps(props,state){
     console.log('lifecycle b get derived');
     return null;
 }
 componentDidMount(){
     console.log('lifecycle b component did mount');
 }
 shouldComponentUpdate(){
    console.log('lifecycle b shouldcomptupdate');
    return true;
}
getSnapshotBeforeUpdate(){
    console.log('lifecycle b getsnapshot');
    return null;
}
componentDidUpdate(){
    console.log('lifecycle b component did update');
}
  render() {
      console.log('lifecycle b render');
    return (
      <div>Lifecycle B</div>
    )
  }
}

export default LifecycleB