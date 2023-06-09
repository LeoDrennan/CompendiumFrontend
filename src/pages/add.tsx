import React, { useState } from 'react';
import { Stadium } from '../model';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {

    const [stadium, setStadium] = useState({
        stadium_name: "",
        capacity: 0,
    });

    const navigate = useNavigate();

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
        <div data-testid="addStadium" className="form">
            <h1>Add New Stadium</h1>
            <input type="text" placeholder="Stadium Name" onChange={handleChange} name="stadium_name" data-testid="stadium_input" />
            <input type="number" placeholder="Capacity" onChange={handleChange} name="capacity" data-testid="capacity_input" />
            <button className="formButton" onClick={handleClick} data-testid="submit_button" >Add</button>
        </div>
    )
}

export default Add