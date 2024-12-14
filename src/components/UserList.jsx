import { useState, useEffect } from "react";
import './UserList.css'

const UserList = () => {
    const [users, setUsers] = useState({
        items: [],
        loaded: false
    });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setUsers({
                    items: data,
                    loaded: true
                });
            } catch (error) {
                setUsers({ items: [], loaded: false});
            }
        }

        fetchUsers();
    }, []);

    if (!users.loaded) {
        return <div>Loading...</div>;
    }
    
    return (
        <>
        <h1>List of Users</h1>
        <ul className="users">
        {users.items.map((item) => (
            <li key={item.id}>
                ID: {item.id}<br/>
                Name: {item.name}<br/>
                Username: {item.username}<br/>
                Email: {item.email}<br/>
                City: {item.address.city}<br/>
                </li>
        ))}
        </ul>
        </>
    );
};
export default UserList;