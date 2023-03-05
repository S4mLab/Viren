import { React, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate} from "react-router-dom";
import { StyleSheet } from '../configuration/style';
import Header from '../component/header';



export default function FetchPage() {
    const navigate = useNavigate();
    const [id, setID] = useState(null);
    return (
        <div style={{ width: '100%', height: '100%' }}>
          
            <div style={{ align: 'center', justifyContent: 'center', marginTop: "15%",  }}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    style= {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}
                >
                    <h1 style={{fontFamily: StyleSheet.fontFamily}}> Enter meeting ID </h1>
                    <TextField id="outlined-basic" label="ID" variant="outlined" onChange={(e)=>{
                        setID(e.target.value);
                    }}/>
                    <Button variant="contained" component="label" onClick={() =>{
                        navigate("/notepage/{id}",{state:{id:id}});
                    }}> 
                    Search 
                    </Button>
                </Box>
            </div>
        </div>
    );

}
