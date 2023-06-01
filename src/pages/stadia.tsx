import { createHook } from 'async_hooks'
import React, { useEffect, useState } from 'react'
import { Stadium } from '../model'
import axios from 'axios';
import { Link } from 'react-router-dom';


const stadia = () => {
    const [stadia, setStadia] = useState<Stadium[]>([]);
    useEffect(()=>{
        const fetchAllStadia = async ()=>{
            try{
                const res = await axios.get("compendiumbackend.azurewebsites.net/stadia");
                setStadia(res.data)
            } catch (err) {
                console.log(err);
            }
        }
    fetchAllStadia()
    }, []);

    const handleDelete = async (id: number) =>{
        try {
            await axios.delete("compendiumbackend.azurewebsites.net/stadia/" + id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return ( <div>
        <h1>List of Stadiums</h1>
        <div className="stadia">
            {stadia.map(stadium=>(
                <div className="stadium" key={stadium.stadium_id}>
                    <h2>{stadium.stadium_name}</h2>
                    <hr/>
                    <p>Capacity: {stadium.capacity}</p>
                    <button className="update"><Link className="updateLink" to={`/update/${stadium.stadium_id}`} state={stadium}>Update</Link></button>
                    <button className="delete" onClick={() => handleDelete(stadium.stadium_id)}>Delete</button>
                </div>
            ))}
        </div>
        <button className="addButton"><Link className="addButton" to="/add">Add new stadium</Link></button>
    </div>
    )
}

export default stadia