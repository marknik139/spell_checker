import React from 'react';
import {TextField} from "@mui/material";

const CorrectedTextField = ({correctedText}) => {
    return <TextField
        disabled
        fullWidth
        multiline
        maxRows={Infinity}
        value={correctedText}
    />
};

export default CorrectedTextField;