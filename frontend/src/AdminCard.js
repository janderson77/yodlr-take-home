import React from 'react'

const AdminCard = ({id, firstName, lastName, email, state}) => {
    return(
        <div className="card" id={id}>
            <div className="card-body">
                <h5 className="card-title">{firstName} {lastName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                <p className="card-text">{state}</p>
                {state !== "active" ? <button className="btn btn-sm btn-danger">Reject</button> : <button className="btn btn-danger btn-sm">Delete</button>}
                
                {state !== "active" ? <button className="btn btn-sm btn-success">Activate</button> : null}
            </div>
        </div>
    )
}

export default AdminCard