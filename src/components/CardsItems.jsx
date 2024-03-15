import React from "react";
import "../assets/style/style.css";
import { Link } from "react-router-dom";

const CardsItems = ({ user }) => {
    return (
        <div className="robo-card">
            <div className="robo-image">
                <img src={`https://robohash.org/${user.name.first}`} alt={`Robot ${user.name.first}`} />
                <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
                <p>{user.email}</p>
                <Link to={`/user/`+ user.name.first + '/' +user.email }>View</Link>
            </div>
        </div>
    );
};

export default CardsItems;
