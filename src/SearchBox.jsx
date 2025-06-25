import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

function SearchBox({updateinfo}) {

    const API_URl="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="3d11a748e36918008e0922e908769693";

    let getweatherInfo=async()=>{
        let responce=await fetch(`${API_URl}?q=${city}&appid=${API_KEY}&units=metric`)

        let jsonResponce = await responce.json();
        // console.log(jsonResponce);
        let result={
            city:city,
            temp:jsonResponce.main.temp,
            tempMin:jsonResponce.main.temp_min,
            tempMax:jsonResponce.main.temp_max,
            humidity:jsonResponce.main.humidity,
            feelsLike:jsonResponce.main.feels_like,
            weather:jsonResponce.weather[0].description,
        }
        console.log(result);
        return result;


    }

    let[city,setCity]=useState("");
    
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit=async(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity('');
        let newinfo=await getweatherInfo();
        updateinfo(newinfo);

    }

    return ( <div className='searchbox'>
        
        <form onSubmit={handleSubmit}>
              <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/><br/><br/>
              <Button variant="contained" type='submit'>Search</Button>
        </form>

    </div> );
}

export default SearchBox;