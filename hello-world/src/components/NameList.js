import React from 'react'
import Person from './Person';
function NameList() {
    const names=['Bruce','Clark','Diana']
    const persons=[{
        id:1,
        name:'bruce',
        age:29,
        lang:'React'
    },{
        id:2,
        name:'Clark',
        age:30,
        lang:'Vue'
    },{
        id:3,
        name:'paras',
        age:22,
        lang:'Angular'
    }];
    // const personList=persons.map(person => <Person key={person.id} person={person}/>);
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
  return (
    <div>{nameList}
    </div>
  )
}

export default NameList