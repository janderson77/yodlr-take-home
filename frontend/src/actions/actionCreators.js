import axios from 'axios'
import {get_users, delete_user, add_user, error} from './actions'

const API_URL = "http://localhost:3001"

const toObject = (arr, key) => arr.reduce((a,b) => ({...a, [b[key]]: b}), {})

export const getUsers = () => {
    return async function thunk(dispatch){
        try{
            let res = await axios.get(`${API_URL}/users`)
            let data = toObject(res.data,'id')
            dispatch(get_users(data))
        }catch(e){
            dispatch(error(e))
        }
    }
}

export const addUser = (data) => {
    return async function thunk(dispatch){
        try{
            let res = await axios.post(`${API_URL}/users`, data)
            if(res.data.status !== 200){
                throw new Error()
            }else{
                dispatch(add_user(data))
            }
        }catch(e){dispatch(error(e))}
    }
}

export const deleteUser = (id) => {
    return async function thunk(dispatch){
        try{
            let res = await axios.delete(`${API_URL}/users/${id}`)
            if (res.data.status !== 204){
                throw new Error()
            }else{
                dispatch(delete_user(id))
            }
        }catch(e){
            dispatch(error(e))
        }
    }
}