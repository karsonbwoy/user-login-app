import { Box, Stack, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Home(params) {
    return (
        <Box sx={{ '& button': { m: 1 } }}>
            <Stack >
                <Typography my={4} variant='h4'>Welcome buddy!</Typography>
                <Link to='/login'>
                    <Button variant='contained' size='large' >Login</Button>
                </Link>
                <Link to='/register'>
                    <Button variant='text' size='small' >Register</Button>
                </Link>
            </Stack>
        </Box>
    )
}