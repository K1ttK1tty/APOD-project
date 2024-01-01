import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

export default function ButtonPage() {
    const [clicked, setClicked] = useState(false)

    return (
        <>
            <Typography variant="h4" sx={{ margin: 2 }}>Button</Typography>
            <Box sx={{ margin: 2 }}>
                {/* 👀 */}
                <Button variant="contained" onClick={() => setClicked(true)}>Click</Button>
                {clicked && <Typography>Clicked!</Typography>}
                {/* 🙈 */}
            </Box>
        </>
    )
}