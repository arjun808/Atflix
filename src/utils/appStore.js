import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../utils/userSlice"
import moviesReducer from "../utils/moviesSlice"
import gptReducer from "./gptSlice"

const appStore= configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,

    }
})
export default appStore