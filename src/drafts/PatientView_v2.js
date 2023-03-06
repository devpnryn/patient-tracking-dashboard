import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const PatientView_v2 = ({ open, onClose, patient }) => {
    // if (!open) {
    //     return null;
    // } else {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Patient Details</DialogTitle>
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
                                {index !== patient.followUpDetails.length - 1 && <TimelineConnector />}
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
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
    // }
};

export default PatientView_v2;
