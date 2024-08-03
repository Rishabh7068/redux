
export const depositMoney = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type : 'deposite',
            payload : amount
        })
    }
}


export const withrawMoney = (amount) =>{

    return (dispatch)=>{
        dispatch({
            type : 'withdraw',
            payload : amount
        })
    }
}