import { Link } from "react-router-dom"
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from "react";


export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword]  = useState('')
    const [login, setLogin] = useState('')

    
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleChange = (value, func) => func(value);
    const handleSubmit = (e,psswrd, lgn) => {
        e.preventDefault();
        const userData = {password: psswrd, login: lgn}
        console.log('User: ' + userData.login + ' logged with password: ' + userData.password)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Box component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-login">Login</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-login"
                    type='text'
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                    label="Login"
                    value = {login}
                    onChange={(e) => handleChange(e.target.value, setLogin)}
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                    value = {password}
                    onChange={(e) => handleChange(e.target.value, setPassword)}
                />
            </FormControl>
            <Button type='submit' variant='contained' size='large' onClick ={(e) => handleSubmit(e,password, login)} >Login</Button>
            <Link to='/register'>
                <p>No account? Register then.</p>
            </Link>
        </Box>
    )
}