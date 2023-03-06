import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@mui/lab';

const PatientDialog_v3 = ({ open, onClose, patient }) => {
    const dialogTitleStyle = {
        textAlign: 'center',
        color: '#f50057', // set title color to pink
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '12px',
        right: '12px',
    };

    const connectorStyle = {
        backgroundColor: '#f50057', // set connector color to pink
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle style={dialogTitleStyle}>Patient Details</DialogTitle>
            <DialogContent>
                <Typography variant="h6" gutterBottom>
                    {patient.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Follow-up Details:
                </Typography>
                <Timeline position="alternate">
                    {patient.followUpDetails.map((followUp, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot color={followUp.status === 'confirmed' ? 'primary' : 'grey'} />
                                {index !== patient.followUpDetails.length - 1 && (
                                    <TimelineConnector sx={{ bgcolor: '#f50057' }} />
                                )}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="subtitle1" gutterBottom>
                                    Date: {followUp.date}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Time: {followUp.time}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Status: {followUp.status}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </DialogContent>
            <Button onClick={onClose} sx={{ position: 'absolute', top: 0, right: 0 }} style={closeButtonStyle}>
                Close
            </Button>
        </Dialog>
    );
};

export default PatientDialog_v3;
