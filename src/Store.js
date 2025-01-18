import { legacy_createStore, applyMiddleware, combineReducers } from "redux"
import { thunk } from "redux-thunk"
import {GymStemReducerProduct, HomeReducer as HomeReducer} from "./Reducer/reducer";
import { HomeReducerProduct as HomereducerProduct } from "./Reducer/reducer";
import { CardioReducerProduct as CardioReducerProduct } from "./Reducer/reducer";

const RootElement=combineReducers({
    Home:HomeReducer,
    Productdata:HomereducerProduct,
    Productdata2:CardioReducerProduct,
    Productdata3:GymStemReducerProduct
})
    

export const store=legacy_createStore(RootElement,applyMiddleware(thunk))