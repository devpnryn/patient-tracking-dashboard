import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Badge, Chip } from '@mui/material';
import { Email, Alarm } from '@mui/icons-material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const generateData = () => {
    const patients = [
        { id: 1, name: 'John Doe', time: '10:00 AM', type: 'Routine Checkup', status: 'remind' },
        { id: 2, name: 'Jane Smith', time: '11:30 AM', type: 'Dental Cleaning', status: 'confirm' },
        { id: 3, name: 'Bob Johnson', time: '2:00 PM', type: 'Eye Exam', status: 'confirm' },
        { id: 4, name: 'Mary Brown', time: '3:30 PM', type: 'Physical Therapy', status: 'remind' },
    ];

    return patients;
}

const Dashboard_v3 = () => {
    const patients = generateData();
    const [alarmColor, setAlarmColor] = useState('primary');
    const history = useHistory();

    const notifySMS = (patientName) => {
        toast.success(`SMS sent to ${patientName}`);
        setAlarmColor('secondary');
        setTimeout(() => {
            setAlarmColor('primary');
        }, 1000);
    }

    const notifyEmail = (patientName) => {
        toast.info(`Email sent to ${patientName}`);
    }

    const handleRowClick = (patientId) => {
        // Redirect to the patient's record page
        history.push(`/patients/${patientId}`);
    }

    return (
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
                        <TableRow key={patient.id} onClick={() => handleRowClick(patient.id)}>
                            <TableCell component="th" scope="row">
                                {patient.id}
                            </TableCell>
                            <TableCell>{patient.name}</TableCell>
                            <TableCell align="right">{patient.time}</TableCell>
                            <TableCell align="right">{patient.type}</TableCell>
                            <TableCell align="right">
                                <Chip variant="outlined" size="small" label={patient.status === 'confirm' ? 'confirm' : 'remind'} />
                                <IconButton onClick={() => notifySMS(patient.name)}>
                                    <Alarm color={alarmColor} />
                                </IconButton>
                                <IconButton onClick={() => notifyEmail(patient.name)}>
                                    <Badge color="secondary" badgeContent={1}>
                                        <Email />
                                    </Badge>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Dashboard_v3;
