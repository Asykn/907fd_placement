import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import "../styles/FD_Placement.css";

export default function FD_Placement() {

    const [val, setVal] = useState(0);

    const [accType, setAccType] = React.useState('');

    const handleChange = (event) => {
        setAccType(event.target.value);
    };

    function MyFormHelperText() {
        const { focused } = useFormControl() || {};
    
        const helperText = React.useMemo(() => {
        if (focused) {
            return 'This field is being focused';
        }
    
        return 'Helper text';
        }, [focused]);
    
        return <FormHelperText>{helperText}</FormHelperText>;
    }
   
  return (
    <div className="main">
        <div className="top-main"> 
            <div className="div-main">
                <div className="title">Account Type</div>
                    <div className="">
                    <FormControl>
                        <Select
                        value={accType}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem value="">
                            <p><b>Islamic Fixed Deposit (eiFD)</b></p>
                        </MenuItem>
                        </Select>
                    </FormControl>
                        {/* <FormControl>
                            <InputLabel></InputLabel>
                            <Select
                            // labelId="demo-simple-select-label"
                            // id="demo-simple-select"
                            // value={accType}
                            // onChange={handleChange}
                            >
                            <MenuItem value={10}><b>Islamic Fixed Deposit (eiFD)</b></MenuItem>
                            </Select>
                        </FormControl>  */}
                    </div>
            </div>

            <div className="div-main">
                <div className="title">FD Account Number</div>
                    <div className="">
                    <FormControl>
                        <Select
                        value={accType}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem value="">
                            <p><b>4334 2333 2212</b></p>
                        </MenuItem>
                        </Select>
                    </FormControl>
                        {/* <FormControl>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={accType}
                            label="Account Type"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}><b>4334 2333 2212</b></MenuItem>
                            <MenuItem value={20}></MenuItem>
                            <MenuItem value={30}></MenuItem>
                            </Select>
                        </FormControl>  */}
                    </div>
            </div>

            <div className="div-main">
                <div className="title">Transfer from Bank</div>
                    <div className="">
                    <FormControl>
                        <Select
                        value={accType}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem value="">
                            <p>Select bank</p>
                        </MenuItem>
                        <MenuItem value={10}>Maybank</MenuItem>
                        <MenuItem value={20}>Affin Bank Berhad</MenuItem>
                        <MenuItem value={30}>Al-Rajhi Banking & Investment</MenuItem>
                        <MenuItem value={40}>Alliance Bank Malaysia Berhad</MenuItem>
                        <MenuItem value={50}>Ambank Berhad</MenuItem>
                        <MenuItem value={60}>Bangkok Bank</MenuItem>
                        <MenuItem value={70}>Bank Islam Malaysia</MenuItem>
                        <MenuItem value={80}>Bank Kerjasama Rakyat Malaysia</MenuItem>
                        <MenuItem value={90}>Bank Muamalat</MenuItem>
                        <MenuItem value={100}>Bank of America</MenuItem>
                        </Select>
                    </FormControl>
                        {/* <FormControl>
                            <InputLabel><b>Select bank</b></InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={accType}
                            label="Account Type"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Maybank</MenuItem>
                            <MenuItem value={20}>Affin Bank Berhad</MenuItem>
                            <MenuItem value={30}>Al-Rajhi Banking & Investment</MenuItem>
                            <MenuItem value={40}>Alliance Bank Malaysia Berhad</MenuItem>
                            <MenuItem value={50}>Ambank Berhad</MenuItem>
                            <MenuItem value={60}>Bangkok Bank</MenuItem>
                            <MenuItem value={70}>Bank Islam Malaysia</MenuItem>
                            <MenuItem value={80}>Bank Kerjasama Rakyat Malaysia</MenuItem>
                            <MenuItem value={90}>Bank Muamalat</MenuItem>
                            <MenuItem value={100}>Bank of America</MenuItem>
                            </Select>
                        </FormControl>  */}
                    </div>
            </div>

            <div className="div-main">
                <div className="title">Term</div>
                    <div className="">
                    <FormControl>
                        <Select
                        value={accType}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem value="">
                            <p>Select term</p>
                        </MenuItem>
                        <MenuItem value={10}>2 Months</MenuItem>
                        <MenuItem value={20}>3 Months</MenuItem>
                        <MenuItem value={30}>4 Months</MenuItem>
                        <MenuItem value={40}>5 Months</MenuItem>
                        <MenuItem value={50}>6 Months</MenuItem>
                        <MenuItem value={60}>7 Months</MenuItem>
                        <MenuItem value={70}>8 Months</MenuItem>
                        <MenuItem value={80}>9 Months</MenuItem>
                        <MenuItem value={90}>10 Months</MenuItem>
                        <MenuItem value={100}>11 Months</MenuItem>
                        </Select>
                    </FormControl>
                        {/* <FormControl>
                            <InputLabel id="demo-simple-select-label">Select term</InputLabel>
                            <Select
                            id="demo-simple-select"
                            value={accType}
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>2 Months</MenuItem>
                            <MenuItem value={20}>3 Months</MenuItem>
                            <MenuItem value={30}>4 Months</MenuItem>
                            <MenuItem value={40}>5 Months</MenuItem>
                            <MenuItem value={50}>6 Months</MenuItem>
                            <MenuItem value={60}>7 Months</MenuItem>
                            <MenuItem value={70}>8 Months</MenuItem>
                            <MenuItem value={80}>9 Months</MenuItem>
                            <MenuItem value={90}>10 Months</MenuItem>
                            <MenuItem value={100}>11 Months</MenuItem>
                            </Select>
                        </FormControl>  */}
                    </div>
            </div>

            <div className="div-main">
                <div className="title">Amount</div>
                    <div className="">
                        <FormControl>
                            <OutlinedInput 
                            id="amount"
                            onInput="cal()"
                            type="number"
                            value={accType}
                            onChange={handleChange}
                            placeholder="0.00"
                            startAdornment={<InputAdornment position="start">RM</InputAdornment>}
                            />
                        </FormControl>
                    </div>
            </div>

            <div className="div-main">
                <div className="sub-title">Minimum amount RM1,000.00</div>
                    <div className="calculation">
                        <div className="profit">
                            <TextField
                            disabled
                            defaultValue= "Profit Rate (p.a)"
                            />
                            <div className="sub-profit">2.5%</div>
                        </div>
                        <div className="profit">
                            <TextField
                                disabled
                                defaultValue= "Maturity Amount"
                            />
                            <div className="sub-profit">2.5%</div>
                        </div>
                    </div>
            </div>

            <div className="div-main">
                    <div className="">
                    <Stack spacing={8} direction="row">
                        <Button variant="contained">Next</Button>
                    </Stack>
                    </div>
            </div>

        </div>
    </div>
  ); 
}
