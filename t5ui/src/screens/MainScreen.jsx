import TextInputForm from "../components/TextInputForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Typography, Container } from "@mui/material";
import React from "react";

const MainScreen = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}
        >
            <Header />

            <Container sx={{ py: 4 }}>
                <Typography variant="h6" align="center" color="textSecondary">
                    Добро пожаловать! Введите текст для проверки и нажмите кнопку "Проверить"
                </Typography>
            </Container>

            <TextInputForm />

            <Footer />
        </Box>
    );
};

export default MainScreen;
