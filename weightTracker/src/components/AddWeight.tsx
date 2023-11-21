import { useState } from 'react';
import {
    Typography,
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField,
    Button
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import SubmitWeight from '../helper/SubmitWeight';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AddWeight = () => {
    const [name, setName] = useState<string>('');
    const [weight, setWeight] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [returnMsg, setReturnMsg] = useState<string>('');
    const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs(new Date()));

    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
    };

    const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(event.target.value as string);
        console.log(event.target.value)
    };
    const handleSubmit = async () => {
        if (name == '') {
            setError("Must set name");
        }
        else if (weight == '') {
            setError("Must set Weight");
        }
        else if (isNaN(parseFloat(weight))) {
            setError("Weight must be a number!");
        }
        else if (!dateValue) {
            setError("Must select Date!");
        }
        else {
            try {
                const result = await SubmitWeight(name, dateValue, parseFloat(weight));
                setReturnMsg(result);
                setName('');
                setWeight('');
                setDateValue(null);
                window.location.reload(); // Reload the page
            } catch (error) {
                const errorMessage = (error as Error).message;
                setError("Failed to submit weight: " + errorMessage);
            }
        }
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignContent: 'center' }}>
            <Typography variant='h5' component="h1" fontWeight="bold" letterSpacing={2}>Add Weight!</Typography>
            <Box sx={{
                minWidth: 120, m: 2, display: 'flex',
                flexDirection: 'row', justifyContent: 'center', alignContent: 'center'
            }}>
                <Box sx={{ width: '100%', borderRadius: 3 }}>
                    <FormControl sx={{ m: 1, width: '25ch', borderRadius: 3 }}>
                        <InputLabel id="demo-simple-select-label">Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={name}
                            label="Name"
                            onChange={handleChange}
                            sx={{ input: { color: 'red' } }}
                        >
                            <MenuItem value={"Benjamin"}>Benjamin</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch', borderRadius: 3 }}>
                        <TextField
                            id="outlined-basic"
                            label="Weight"
                            variant="outlined"
                            value={weight}
                            onChange={handleWeightChange}
                            InputProps={{ inputProps: { style: { color: '#fff' } } }}
                        />
                    </FormControl>
                    <FormControl sx={{ borderRadius: 3 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                <DatePicker
                                    label="Date"
                                    value={dateValue}
                                    onChange={(newValue) => setDateValue(newValue)}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }}>
                        <Button
                            id="btn"
                            variant='contained'
                            size='large'
                            sx={{
                                height: 54,
                                backgroundColor: (theme) => theme.palette.success.dark
                            }}
                            onClick={handleSubmit}
                        >
                            Send
                        </Button>
                    </FormControl>
                </Box>
            </Box>
            {returnMsg ?
                <Typography>{returnMsg}</Typography>
                : null
            }
        </Box>

    );
};
export default AddWeight;