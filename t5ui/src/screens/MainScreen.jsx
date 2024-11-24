import React, { useState } from "react";
import TextInputForm from "../components/TextInputForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import HistoryForm from "../components/HistoryForm";

const MainScreen = () => {
    const [updateSignal, setUpdateSignal] = useState(false);

    const handleUpdate = () => {
        setUpdateSignal((prev) => !prev);
    };

    return (
        <Box
            sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}
        >
            <Header />

            <Typography sx={{ px: 2, py: 2 }} variant="h6" align="left">
                Добро пожаловать! Введите текст для проверки и нажмите кнопку "Проверить"
            </Typography>

            <TextInputForm onTextSubmit={handleUpdate} />
            <HistoryForm updateSignal={updateSignal} />

            <Footer />
        </Box>
    );
};

export default MainScreen;
