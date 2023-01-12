import React, { useEffect, useState } from 'react'
import axios from "axios"

const LocationSearch = (props) => {
    const [locations, setLocations] = useState([])
    const locationURL = process.env.REACT_APP_EVENDY_LOCATION;
  

    useEffect(() => {
    
        const getLocation = async () => {
          const response = await axios.get(locationURL);
          setLocations(response.data.data)
        }
      
        getLocation();
      }, [])

  

    const buttonClickHandler = (item) => {
        props.passData(item);
    }

    const filteredData = locations.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input?.toLowerCase())
        }
    })
  return (
    <>
          <ul>
            {filteredData.map((item) => (
                <li onClick={() => buttonClickHandler(item)} className=' p-2 text-slate-600 border-gray-300 border-b-2 cursor-pointer hover:bg-gray-300' key={item.id}>{item.name}</li>
            ))}
        </ul>
    </>
  )
}

export default LocationSearch