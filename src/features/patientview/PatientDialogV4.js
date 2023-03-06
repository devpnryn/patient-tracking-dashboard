import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Tabs,
    Tab,
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@mui/lab';



const PatientDialogV4 = ({ open, onClose, patient }) => {
    const dialogTitleStyle = {
        textAlign: 'center',
        color: '#f50057', // set title color to pink
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '12px',
        right: '12px',
    };

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle style={dialogTitleStyle}>Patient Details</DialogTitle>
            <Tabs value={activeTab} onChange={handleTabChange}>
                <Tab label="Follow-up History" />
                <Tab label="Booking Form Tracking" />
            </Tabs>
            {activeTab === 0 && (
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
            )}
            {activeTab === 1 && (
                <DialogContent>
                    <Typography variant="h6" gutterBottom>
                        {patient.name}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Tracking Details:
                    </Typography>
                    <Timeline position="alternate">
                        {patient.bFormTrackingInfo.map((tracking, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot color={tracking.status === 'Sent' ? 'primary' : 'grey'} />
                                    {index !== patient.bFormTrackingInfo.length - 1 && (
                                        <TimelineConnector sx={{ bgcolor: '#f50057' }} />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Date: {tracking.date}
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Time: {tracking.time}
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Status: {tracking.event}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </DialogContent>
            )}
            <Button onClick={onClose} sx={{ position: 'absolute', top: 0, right: 0 }} style={closeButtonStyle}>
                Close
            </Button>
        </Dialog>
    )
}
export default PatientDialogV4;