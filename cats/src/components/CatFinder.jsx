import { useState } from 'react'
import { Box, TextField } from "@mui/material"
import axios from "axios"

function CatFinder() {

    const [cat, setCat] = useState(null)

    const ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT
    const fetchCat = async (e) => {
        if(e.code === "Enter") {
            const response = await axios(ENDPOINT + e.target.value)
            const cat = await response.data;
            setCat(cat)
        }
    }

    return (
        <>
            <TextField
                label="Cat Id"
                onKeyUp={e => fetchCat(e)}
            />
            <Box>
                {
                    cat && (<>
                        <p>Name: {cat.name}</p>
                        <p>Breed: {cat.breed}</p>
                    </>)
                }
            </Box>
        </>
    )
}

export default CatFinder