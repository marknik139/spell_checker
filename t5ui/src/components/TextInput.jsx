import {TextField} from "@mui/material";
import React from "react";

const TextInput = ({inputText, handleInputChange, warning, warningMsg}) => {
    return <TextField
        value={inputText}
        onChange={handleInputChange}
        placeholder="Введите текст для проверки"
        fullWidth
        multiline
        maxRows={Infinity}
        error={warning}
        helperText={warning ? warningMsg : ''}
    />
}

export default TextInput;