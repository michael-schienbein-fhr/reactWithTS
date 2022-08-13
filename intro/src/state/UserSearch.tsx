import {useState} from "react";

const users = [
    {name: 'Sarah', age: 18},
    {name: 'Michael', age: 32},
    {name: 'Justin', age: 33},
]
const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();
    const onClick = () => {
         const foundUser = users.find((user) => {
             return user.name === name;
         });
         setUser(foundUser);
     }
    return (
        <div>
            <h3>User Search</h3>
            <input value={name} onChange={event => setName(event.target.value)}/>
            <button onClick={onClick}>Search Users</button>
            <div>
                {user && user.name}
                <br/>
                {user && user.age}
            </div>
        </div>
    );
};

export default UserSearch;