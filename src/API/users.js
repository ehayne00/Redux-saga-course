import axios from 'axios'

export const getUsers = () => {
    return axios.get('/users', {
        params: {
            limit: 1000         //we have no control over rem-rest api so limiting response
        }
    })
}

export const createUser = ({firstName, lastName}) => {
    return axios.post('/users', {
        firstName,
        lastName
    })
}

export const deleteUser = (userId) => {
    return axios.delete(`/users/${userId}`)
}