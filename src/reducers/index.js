const initialState = {
    count: 0
}
export const reducer = (state = initialState,action)=>{
    switch(action.type){
        case "Add":
            return{
                count : state.count+1
            }
        case "Sub":
            return{
                count : state.count-1
            }
        default:
            return state
    }
}