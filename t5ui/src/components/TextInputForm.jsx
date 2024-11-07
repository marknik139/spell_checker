import React, { useState } from 'react';
import TextInput from "./TextInput";
import CorrectedTextField from "./CorrectedTextField";
import CheckButton from "./CheckButton";
import ApiClient from "../api/apiClient";
import {Card, CardContent, Box} from "@mui/material";
const TextInputWithButton = () => {
    const [inputText, setInputText] = useState('');
    const [correctedText, setCorrectedText] = useState('');
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [warning, setWarning] = useState(false);
    const [warningMsg, setWarningMsg] = useState('');

    const handleInputChange = (event) => {
        const inputText = event.target.value;
        setInputText(inputText);
        setWarning(false);
        if (inputText.length > 1000) {
            setWarning(true);
            setWarningMsg(`Длина текста > 1000 символов (${inputText.length})`);
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    };

    const handleSubmit = async () => {
        setCorrectedText('');
        if (!inputText.trim()) {
            setWarning(true);
            setWarningMsg('Это поле обязательно к заполнению');
            return
        }
        setLoading(true);
        try {
            const {output: correctedText} = await ApiClient.getTextCorrection({ sentence: inputText });
            setCorrectedText(correctedText);
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card>
            <CardContent>
                <TextInput
                    inputText={inputText}
                    handleInputChange={handleInputChange}
                    warning={warning}
                    warningMsg={warningMsg}
                />

                <Box sx={{ my: 2 }}>
                    <CheckButton
                        handleSubmit={handleSubmit}
                        disabled={disabled}
                        loading={loading}
                    />
                </Box>

                <CorrectedTextField
                    correctedText={correctedText}
                />
            </CardContent>
        </Card>
    );
};

export default TextInputWithButton;
