import React, { useEffect, useState } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Badge, Chip, DialogActions, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import { Email, Alarm } from '@mui/icons-material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PatientDialog from '../patientview/PatientDialog';
import PatientDialog_v2 from '../patientview/PatientDialog_v2';
import PatientDialog_v3 from '../patientview/PatientDialog_v3';


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
                    setShowCallDialog(true)
                    setPatientName(patientName)
                } else {
                    p.count = p.count + 1
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
            <TableContainer component={Paper}>
                <Table minWidth={650} aria-label="dashboard table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {patients.map((patient) => (
                            <TableRow key={patient.id} >
                                <TableCell component="th" scope="row">
                                    {patient.id}
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => handleRowClick(patient)}>
                                        {patient.name}
                                    </Button>
                                </TableCell>
                                <TableCell align="right">{patient.time}</TableCell>
                                <TableCell align="right">{patient.type}</TableCell>
                                <TableCell align="right">
                                    <Chip variant="outlined" size="small" label={patient.status === 'confirm' ? 'confirm' : 'remind'} />
                                    <IconButton onClick={() => notifySMS(patient.name, patient.id)}>
                                        <Alarm color={alarmColor} />
                                    </IconButton>
                                    <IconButton onClick={() => notifyEmail(patient.name)}>
                                        <Badge color="secondary" badgeContent={emailNotificationCount.find(p => p.id === patient.id)?.count}>
                                            <Email />
                                        </Badge>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* {openDialog && <PatientDialog open={openDialog} onClose={() => setOpenDialog(false)} patient={selectedPatient} />} */}
            {/* {openDialog && <PatientDialog_v2 open={openDialog} onClose={() => setOpenDialog(false)} patient={selectedPatient} />} */}
            {openDialog && <PatientDialog_v3 open={openDialog} onClose={() => setOpenDialog(false)} patient={selectedPatient} />}
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
        </>

    );
}

export default Dashboard;
