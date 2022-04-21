const INCR="INCR";
const DECR="DNCR";
const IncrementAction=()=>{
    return {
        type:INCR
    }
}
const DecrementAction=()=>{
    return {
        type:DECR
    }
}
export {INCR,DECR,IncrementAction,DecrementAction}