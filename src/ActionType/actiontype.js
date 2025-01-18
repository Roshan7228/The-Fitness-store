
export const setLoadin=()=>({
    type:"SET_LOADING",
    payload:true
});

export const setProducts=(data)=>({
    type:"SET_SUCCESS",
    payload:data
});


export const setDetails = (details) => ({
    type: "SET_DETAILS",
    payload: details
  });

export const setGYMSYSTEM=(GymStem)=>({
    type :"SET_GYM",
    payload:GymStem
})
  
export const setCardioDetails=(cardioss)=>({
    type:"SET_CARDIO",
    payload:cardioss
})  
export const setError=(error)=>({
    type:"SET_ERROR",
    payload:error
})