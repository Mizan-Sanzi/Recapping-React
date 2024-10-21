import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    const userStyles = {
        border: '2px solid blue',
        borderRadius: '15px',
        padding: '15px'
    }
    return (
        <div style={userStyles}>
            <h3>Users: {users.length}</h3>
        </div>
    )
}