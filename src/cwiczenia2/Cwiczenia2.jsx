import React, {use} from 'react';
import {users} from "../data.js";
const Cwiczenia2 = () => {


    return (
        <div>
            <ol>
            {
                users.filter(user => user.salary > 5000 && user.salary < 6000)
                    .map(user => <li key={user.id}>{user.name} - {user.salary}</li>)
            }
            </ol>

        </div>
    );
};

export default Cwiczenia2;