import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const intialState = {
    loading:true,
    error:'',
    posts:{}
}

const reduce = (state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading:false,
                error:'',
                posts:action.payload
            }
        case 'FETCH_ERROR':
            return{
                loading:false,
                error:'Something went wrong',
                posts:{}
            }
        default:
            return state
    }
}

function DataFetchingTwo() {
  const [state,dispatch]=useReducer(reduce,intialState);
  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response =>{
          dispatch({type:'FETCH_SUCCESS',payload:response.data})
      })
      .catch(error=>{
          dispatch({type:'FETCH_ERROR'})
      })
  },[])
  return (
    <div>
        {state.loading?'loading':state.posts.title}
        {state.error ? state.error :null}
    </div>
  )
}

export default DataFetchingTwo