const INCR = 'INCR';
const DECR = "DECR";

const IncrementAction = ()=>{
    return {
       type: INCR
    }
}

const DecrementAction = ()=>{
    return {
        type: DECR
     }
}

export {INCR,DECR,IncrementAction,DecrementAction};