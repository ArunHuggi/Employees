import { GET_PROFILE, PROFILE_ERROR,GET_PROFILES } from './types'
import axios from 'axios';
const APP_ID = "61339b99f30c510e41afb039"
// const APP_ID = ""


//GET ALL PROFILES

export const getAllProfiles = () => async dispatch => {
    try {
       const res = await axios.get(`https://dummyapi.io/data/v1/user?limit=50`, { headers: { 'app-id': APP_ID } })
       console.log(res.data)
       dispatch({
           type: GET_PROFILES,
           payload: res.data
       })
       return res.data;
    } catch (err) {
        
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg : err.response}
        })
    }

    
}



//Get Profile by user id
export const getProfileById = (id) => async dispatch => {
    try {
       const res = await axios.get(`https://dummyapi.io/data/v1/user/${id}`,{ headers: { 'app-id': APP_ID } })

       dispatch({
           type: GET_PROFILE,
           payload: res.data
       })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg : err.response}
        })
    }
}