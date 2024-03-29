import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Select, FormControl, MenuItem, InputLabel } from '@mui/material';
import { Box } from '@mui/system';

export default function SelectPage() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Typography variant="h4" sx={{ margin: 2 }}>Select</Typography>
            <Box sx={{ margin: 2 }}>
                {/* 👀 */}
                <FormControl sx={{ width: "100px" }}>
                    <InputLabel>Age</InputLabel>
                    <Select
                        value={age}
                        onChange={handleChange}
                        label="Age"
                        inputProps={{ "data-testid": "input-test-id" }}
                    >
                        <MenuItem value={"10"}>Ten</MenuItem>
                        <MenuItem value={"20"}>Twenty</MenuItem>
                        <MenuItem value={"30"}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                {age}
                {/* 🙈 */}
            </Box>
        </>
    )
}