import React, { useEffect, useState } from 'react'
import { Stadium } from '../model'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const update = (thisStadium: Stadium) => {

    const [stadium, setStadium] = useState<Stadium>(thisStadium)
    
    const navigate = useNavigate()
    const location = useLocation()
    const stadiumID = location.pathname.split("/")[2]

    useEffect(()=>{
      const fetchThisStadium = async ()=>{
          try{
              const res = await axios.get("http://localhost:3000/update/" + stadiumID);
              setStadium(res.data)
          } catch (err) {
              console.log(err);
          }
      }
    fetchThisStadium()
    }, []);

    const handleChange = (e: any) =>{
        setStadium(prev=>({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async (e: any) =>{
        e.preventDefault();
        try {
            await axios.put("http://localhost:3000/update/" + stadiumID, stadium)
            navigate("/")
        } catch(err) {
            console.log(err)
        }
    }

    console.log(stadium)
    return (
        <div className="form">
            <h1>Update the Stadium</h1>
            <input type="text" placeholder="stadium_name" onChange={handleChange} name="stadium_name" defaultValue={stadium.stadium_name}></input>
            <input type="number" placeholder="capacity" onChange={handleChange} name="capacity" defaultValue={stadium.capacity}></input>
            <button className="formButton" onClick={handleClick}>Update</button>
        </div>
    )
}

export default update;