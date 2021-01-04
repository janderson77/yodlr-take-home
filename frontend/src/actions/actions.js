import {GET_USERS, DELETE_USER, ADD_USER, ERROR} from './actionTypes'

export const get_users = (users) => ({
    type: GET_USERS,
    users
})

export const add_user = (data) => ({
    type: ADD_USER,
    data
})

export const delete_user = (id) => ({
    type: DELETE_USER,
    id
})

export const error = (err) => ({
    type: ERROR, 
    err
})