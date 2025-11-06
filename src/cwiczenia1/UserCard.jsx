import React from 'react';

const UserCard = (props) => {
    return (
        <div className="szpont">
          <h3>Witaj {props.imie}</h3>  <p>Masz {props.wiek} lat i mieszkasz w {props.miasto}</p>
        </div>
    );
};

export default UserCard;