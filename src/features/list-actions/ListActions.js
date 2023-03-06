import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';


export default function ListActions({ confirmed = false }) {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };


    if (confirmed) {
        return <Stack direction="row" spacing={1}>
            <AlarmOnIcon sx={{ fill: "green" }} />
            <Chip label={"Confirmed!"} onClick={handleClick} style={{ fill: "green" }} />
        </Stack>
    } else {
        return (
            <Stack direction="row" spacing={1}>
                <NotificationsActiveIcon style={{ fill: "red" }} />
                <Chip label={"Remind Now!"} onClick={handleClick} style={{ fill: "yellow" }} />
            </Stack>
        );
    }
}