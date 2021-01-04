import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addUser } from './actions/actionCreators';

const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const newUser = (user) => dispatch(addUser(user));

    const INITIAL_STATE = {
        email: "",
        firstName: "",
        lastName: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        newUser({...formData})
        setFormData(INITIAL_STATE)
        history.push('/')
    }

    return(
        <div className="col col-6 offset-3">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input onChange={handleChange} type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input onChange={handleChange} type="text" className="form-control" id="firstName" name="firstName" aria-describedby="first name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={handleChange} type="text" className="form-control" id="lastName" name="lastName" aria-describedby="last name" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
    )
}

export default Register