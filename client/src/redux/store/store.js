import {configureStore} from "@reduxjs/toolkit";
import settingsSlice from "../slice/settingsSlice.js"
export default configureStore({
    reducer:{
        settings:settingsSlice,

    }
})