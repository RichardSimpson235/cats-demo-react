import { useState } from 'react'
import { Box, TextField } from "@mui/material"
import axios from "axios"

function CatFinder() {

    const [cat, setCat] = useState(null)

    const fetchCat = async (id) => {
        const response = await axios("http://localhost:8080/cats/" + id)
        const cat = await response.data;
        setCat(cat)
    }

    return (
        <>
            <TextField
                defaultValue={1}
                label="Cat Id"
                onKeyUp={e => fetchCat(e.target.value)}
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