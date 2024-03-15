import React, { useState } from "react";
import "../assets/style/style.css";

const CardsHeader = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    
    const handleInputChange = (event) => {
        event.preventDefault()
        setSearchTerm(event.target.value);
        
        onSearch(event.target.value);
        console.log(onSearch);
    };

    return (
        <div>
            <div className="robo-header">
                <h2>ROBOFRIENDS</h2>
                <input className="search-robo" type="text" value={searchTerm} placeholder="Search Robot" onChange={handleInputChange} />
            </div>
            <div>
                <hr className="horizontal-line" />
            </div>
        </div>
    );
};

export default CardsHeader;
