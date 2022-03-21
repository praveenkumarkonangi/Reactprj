import {INCR,DECR} from '../Action/Action';

let Initialvalue = {
    counter:0
}

const CounterReducr = (state=Initialvalue,action)=>{
    switch(action.type){
        case INCR:
            return {counter:state.counter+1}
        case DECR:
            return {counter:state.counter-1}
        default :
            return state
    }
}
export default CounterReducr;