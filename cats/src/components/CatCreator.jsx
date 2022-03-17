import { useState } from 'react'
import { Box, Button, TextField } from "@mui/material"
import axios from 'axios'

function CatCreator() {

    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [cat, setCat] = useState(null)

    const ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT
    const createCat = async () => {
        const response = await axios.post(ENDPOINT, {
            name: name,
            breed: breed
        })

        const data = await response.data
        setCat(data)
    }

    return (
        <>
            <TextField
                label="Name"
                onChange={e => setName(e.target.value)}
            />
            <TextField
                label="Breed"
                onChange={e => setBreed(e.target.value)}
            />
            <Button variant="outlined" onClick={createCat}>Create</Button>
            {
                cat && <p>Your new cat's id is: {cat.id}!</p>
            }
        </>
    )
}

export default CatCreator