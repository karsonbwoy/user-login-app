import './App.css';
import { Box, Stack, Typography, Button } from '@mui/material'

export default function App(params) {
  return (<div class='App'>
    <Box width='500px'>
      <Stack >
        <Typography variant='h5'>Welcome buddy!</Typography>
        <Button>Login</Button>
        <Button>Register</Button>
      </Stack>
    </Box>
  </div>
  )
}