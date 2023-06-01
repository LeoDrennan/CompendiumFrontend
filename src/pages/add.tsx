import React, { useState } from 'react'
import { Stadium } from '../model'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const add = () => {

    const [stadium, setStadium] = useState({
        stadium_name: "",
        capacity: 0,
    });

    const navigate = useNavigate()

    const handleChange = (e: any) =>{
        setStadium(prev=>({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async (e: any) =>{
        e.preventDefault();
        try {
            await axios.post("https://compendiumbackend.azurewebsites.net/add", stadium)
            navigate("/")
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="form">
            <h1>Add New Stadium</h1>
            <input type="text" placeholder="Stadium Name" onChange={handleChange} name="stadium_name" />
            <input type="number" placeholder="Capacity" onChange={handleChange} name="capacity" />
            <button className="formButton" onClick={handleClick}>Add</button>
        </div>
    )
}

export default add