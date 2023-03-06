import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const styles = {
    dialogContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        padding: '20px',
    },
    timelineItem: {
        minHeight: '100px',
        display: 'flex',
        alignItems: 'center',
    },
    timelineContent: {
        marginLeft: '20px',
        color: '#424242',
    },
    timelineDot: {
        backgroundColor: '#6c63ff',
    },
    timelineConnector: {
        backgroundColor: '#6c63ff',
    },
    closeButton: {
        color: '#6c63ff',
    },
};

const PatientDialog_v2 = ({ open, onClose, patient }) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle>Patient Details</DialogTitle>
            <DialogContent style={styles.dialogContent}>
                <Typography variant="h5" gutterBottom>
                    {patient.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Follow-up Details:
                </Typography>
                <Timeline position="alternate">
                    {patient.followUpDetails.map((followUp, index) => (
                        <TimelineItem key={index} style={styles.timelineItem}>
                            <TimelineSeparator>
                                <TimelineDot color={followUp.status === 'confirmed' ? 'primary' : 'grey'} style={styles.timelineDot} />
                                {index !== patient.followUpDetails.length - 1 && <TimelineConnector style={styles.timelineConnector} />}
                            </TimelineSeparator>
                            <TimelineContent style={styles.timelineContent}>
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
            <DialogActions>
                <Button onClick={onClose} style={styles.closeButton}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PatientDialog_v2;
