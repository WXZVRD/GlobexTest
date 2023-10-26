import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "../assets/SearchIcon.svg";

    const SearchInput = ({fetchUser}) => {

        const handleChange = (e) => {
            fetchUser(e.target.value)
        }

    return (
        <TextField
            variant="outlined"
            size="small"
            onInput={handleChange}
            sx={{
                    fontHeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#8189A3'
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <img src={SearchIcon} alt="Search" />
                    </InputAdornment>
                ),
            }}
            fullWidth
        />
    );
}

export default SearchInput;
