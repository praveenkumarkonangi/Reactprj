import {INCR,DECR}from '../Action/A'
let Initialvalue={
    name:"praveen"
}

 
    const CounterReducr=(state=Initialvalue,action)=>{
        switch(action.type){
            case INCR:
                return {name:state.name="hello"}
                case DECR:
                    return{name:state.name="byee..."}
                default :
                return state
        }
       
    }
    export{CounterReducr}