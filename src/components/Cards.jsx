import React, { useEffect, useState } from "react";
import CardsItems from "./CardsItems";
import CardsHeader from "./CardsHeader";
import "../assets/style/style.css";

const Cards = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    let itemsPerPage = 10;

    useEffect(() => {
        setLoading(true);
        fetch(`https://randomuser.me/api/?page=${currentPage}&results=${itemsPerPage}`)
            .then(response => response.json())
            .then(data => {
                setUsers(prevUsers => [...prevUsers, ...data.results]);
                setFilteredUsers(prevUsers => [...prevUsers, ...data.results]);
                setLoading(false);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });
    }, [currentPage, itemsPerPage]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
    
            if (!loading && scrollY + windowHeight >= documentHeight * 0.5) {
                setCurrentPage(prevPage => prevPage + 1);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentPage, loading]); 
    

    const handleSearch = (searchTerm) => {
        const filtered = users.filter(user => {
            const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
            return fullName.includes(searchTerm.toLowerCase());
        });
        setFilteredUsers(filtered);
    };

    return (
        <div className="card-container">
            <CardsHeader onSearch={handleSearch} />
            <div className="card">
                {filteredUsers.map((user, index) => (
                    <CardsItems key={index} user={user} />
                ))}
                {loading && <p>Loading...</p>}
            </div>
        </div>
    );
};

export default Cards;
