import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getUsers} from './actions/actionCreators'
import AdminCard from './AdminCard'

const Admin = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    let list;

    const userList = useSelector(store => store.users)
    const userArray = Object.values(userList)
    console.log(userList)

    if(Object.keys(userList).length > 0){
        list = userArray.map(u => (
            // <div key={u.id} id={u.id}>
            //     <div>{u.email}</div>
            //     <div>{u.firstName} {u.lastName}</div>
            //     <div>{u.state}</div>
            // </div>
            <AdminCard key={u.id} id={u.id} firstName={u.firstName} lastName={u.lastName} email={u.email} state={u.state} />
        )) 
    }else {
        list = <div>Nothing to display</div>
    }
    return(
        <div className="col d-flex flex-column col-6 offset-3 align-items-center">
            <div>
                <h2 className="d-2">Administration</h2>
            </div>
            <div className="d-flex flex-wrap">
            {list}
            </div>
            
        </div>
        
    )
}

export default Admin