import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, Card, CardContent, Divider, Button } from '@mui/material';

const HistoryForm = ({updateSignal}) => {
    const [corrections, setCorrections] = useState([]);

    useEffect(() => {
        loadCorrections();
    }, [updateSignal]);

    const loadCorrections = () => {
        const storedCorrections = localStorage.getItem('corrections');
        if (storedCorrections) {
            setCorrections(JSON.parse(storedCorrections));
        };
    };

    const clearCorrections = () => {
        localStorage.removeItem('corrections');
        setCorrections([]);
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                <Typography variant="h6">
                    История исправлений
                </Typography>
                {corrections.length > 0 ? (
                    <Button variant="outlined" color="error" onClick={clearCorrections}>
                        Очистить историю
                    </Button>
                ) : (<></>)}
            </Box>
            {corrections.length > 0 ? (
                <List>
                    {[...corrections].reverse().map((correction, index) => (
                        <React.Fragment key={index}>
                            <ListItem disablePadding>
                                <Card sx={{ width: '100%', marginBottom: 2 }}>
                                    <CardContent>
                                        <Typography color="textSecondary">
                                            Исходный текст:
                                        </Typography>
                                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                            {correction.inputText}
                                        </Typography>
                                        <Typography color="textSecondary">
                                            Исправленный текст:
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'primary.main' }}>
                                            {correction.correctedText}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </ListItem>
                            {index < corrections.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            ) : (
                <Typography variant="body1" color="text.secondary">
                    Нет записей в истории исправлений.
                </Typography>
            )}
        </Box>
    );
};

export default HistoryForm;
