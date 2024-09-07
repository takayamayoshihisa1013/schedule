import React ,{ useEffect } from "react";
import "./Dashboard.css"
import { useNavigate } from "react-router-dom";


function Dashboard() {
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/check_session', {
            method: "GET",
            credentials: "include",
        }
            
        )
        .then(response => response.json())
        .then(data => {
            if (!data.login) {
                navigate("/login");
            }
        })
        .catch(error => {
            console.error(error);
        })
    })
    return (
        <article class="dashboard">
            
        </article>
    )
}

export default Dashboard;
