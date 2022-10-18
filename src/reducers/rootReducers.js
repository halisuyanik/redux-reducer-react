const initializeState={
    cards:[
        {
            id:'1',
            title:'Alex',
            body:'lorem',
        },
        {
            id:'2',
            title:'Willam',
            body:'lorem',
        },
        {
            id:'3',
            title:'Jhon',
            body:'lorem',
        },
    ]
}



const rootReducer=(state=initializeState, action)=>{
    console.log(action);
    return state;
}

export default rootReducer;