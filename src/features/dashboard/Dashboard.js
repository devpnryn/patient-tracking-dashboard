import React, { useState } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Badge, Chip, DialogActions, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import { Email, Alarm } from '@mui/icons-material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PatientDialogV4 from '../patientview/PatientDialogV4';


const Dashboard = ({ patients }) => {

    const [alarmColor, setAlarmColor] = useState('primary');
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState({});
    const [patientName, setPatientName] = useState("");
    const [emailNotificationCount, setEmailNotificationCount] = useState(
        patients.map(p => ({ id: p.id, count: p.reminded }))
    );
    const [showCallDialog, setShowCallDialog] = useState(false);

    const notifySMS = (patientName, patientId) => {
        toast.success(`SMS sent to ${patientName}`);
        let copyOfNotificationCount = emailNotificationCount.map(p => {
            if (p.id === patientId) {
                if ((p.count + 1) > 2) {
                    p.count = 3
                    p.status = "call now"
                    setShowCallDialog(true)
                    setPatientName(patientName)
                } else {
                    p.count += 1
                }
            }
            return p;
        })

        setEmailNotificationCount(copyOfNotificationCount)

        setAlarmColor('secondary');
        setTimeout(() => {
            setAlarmColor('primary');
        }, 1000);
    }

    const handleRowClick = (patient) => {
        setSelectedPatient(patient);
        setOpenDialog(true);
    };

    const notifyEmail = (patientName) => {
        toast.info(`Email sent to ${patientName}`);
    }

    return (
        <>
            <TableContainer component={Paper} style={{ marginBottom: '40px' }}>
                <Table aria-label="dashboard table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="center">Type</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {patients.map((patient) => (
                            <TableRow key={patient.id}>
                                <TableCell component="th" scope="row" align="left">
                                    {patient.id}
                                </TableCell>
                                <TableCell align="left" sx={{ maxWidth: 60 }}>
                                    <Button onClick={() => handleRowClick(patient)} sx={{ margin: 0, padding: 0 }}>
                                        {patient.name}
                                    </Button>
                                </TableCell>
                                <TableCell align="center">{patient.time}</TableCell>
                                <TableCell align="center">{patient.type}</TableCell>
                                <TableCell align="center">
                                    <Chip variant="outlined" style={{
                                    }} size="small" label={patient.status === 'Confirmed' ? 'Coming' : 'Remind'} />
                                    <IconButton onClick={() => notifySMS(patient.name, patient.id)}>
                                        <Badge color="secondary" badgeContent={emailNotificationCount.find(p => p.id === patient.id)?.count}>
                                            <Alarm color={alarmColor} />
                                        </Badge>
                                    </IconButton>
                                    <IconButton onClick={() => notifyEmail(patient.name)}>
                                        <Email />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {openDialog && <PatientDialogV4 open={openDialog} onClose={() => setOpenDialog(false)} patient={selectedPatient} />}
            {showCallDialog && <Dialog open={showCallDialog} onClose={() => setShowCallDialog(false)}>
                <DialogTitle>Call Patient</DialogTitle>
                <DialogContent>
                    <p>Do you want to call {patientName}?</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowCallDialog(false)}>Cancel</Button>
                    <Button color="primary"></Button>
                </DialogActions>
            </Dialog>
            }
            {/* <Footer /> */}
        </>

    );
}

export default Dashboard;
