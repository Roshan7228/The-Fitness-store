
const initialState = {
    isLoading: false,
    isError: false,
    data: [],
    details: [],
    cardioss:[],
    GymStem:[]
  };
  

// home products data 

export const HomeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_LOADING":
        return { ...state, isLoading: true, isError: false };
      case "SET_SUCCESS":
        return { ...state, isLoading: false, isError: false, data: payload };
      case "SET_ERROR":
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
    }
  };
  

// home product 2nd data

export const HomeReducerProduct = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_LOADING":
        return { ...state, isLoading: true, isError: false };
      case "SET_DETAILS":
        return { ...state, isLoading: false, isError: false, details: payload };
      case "SET_ERROR":
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
    }
  };

// Cardio Product
export const CardioReducerProduct=(state=initialState,{type,payload})=>{
     switch (type){
      case "SET_LOADING":
        return { ...state, isLoading: true, isError: false };
      case "SET_CARDIO":
        return { ...state, isLoading: false, isError: false, cardioss: payload };
      case "SET_ERROR":
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
     }
} 

export const GymStemReducerProduct=(state=initialState,{type,payload})=>{
  switch (type){
   case "SET_LOADING":
     return { ...state, isLoading: true, isError: false };
   case "SET_GYM":
     return { ...state, isLoading: false, isError: false, GymStem: payload };
   case "SET_ERROR":
     return { ...state, isLoading: false, isError: true };
   default:
     return state;
  }
} 
  