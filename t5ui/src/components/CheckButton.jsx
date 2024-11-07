import {Button, LinearProgress} from "@mui/material";
import React from "react";

const CheckButton = ({ handleSubmit, loading, disabled }) => {
    return (
        <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center" }}>
            <Button
                onClick={handleSubmit}
                disabled={loading || disabled}
                variant="outlined"
                fullWidth
            >
                Проверить
            </Button>
            {loading && <LinearProgress style={{ width: "100%", marginTop: 4 }} />}
        </div>
    );
};


export default CheckButton;