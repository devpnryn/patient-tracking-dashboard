import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton, Snackbar, Badge } from '@mui/material';
import Alarm from '@mui/icons-material/Alarm';
import Email from '@mui/icons-material/Email';

const AppointmentDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [showSMSNotification, setShowSMSNotification] = useState(false);
  const [showEmailNotification, setShowEmailNotification] = useState(false);
  const [smsCount, setSMSCount] = useState(0);
  const [emailCount, setEmailCount] = useState(0);


  const generateRandomAppointments = (count) => {
    const types = ['Check-up', 'Cleaning', 'Extraction', 'Filling', 'Root Canal'];
    const patients = ['John Doe', 'Jane Doe', 'Alice Smith', 'Bob Johnson', 'David Lee'];
    const now = new Date();
    const appointments = [];
    for (let i = 0; i < count; i++) {
      const appointmentTime = new Date(now.getTime() + 1000 * 60 * 30 * (i + 1));
      const appointment = {
        id: i + 1,
        patientName: patients[Math.floor(Math.random() * patients.length)],
        appointmentTime: appointmentTime.toLocaleString(),
        appointmentType: types[Math.floor(Math.random() * types.length)],
      };
      appointments.push(appointment);
    }
    return appointments;
  };


  useEffect(() => {
    // fetch appointments from the database or API
    setAppointments(generateRandomAppointments(5));
  }, []);

  useEffect(() => {
    // fetch appointments from the database or API
    const fetchData = async () => {
      const response = await fetch('/api/appointments');
      const data = await response.json();
      setAppointments(data);
    };
    fetchData();
  }, []);

  const handleAlarmClick = () => {
    setShowSMSNotification(true);
    setSMSCount((prevCount) => prevCount + 1);
    // send SMS integration request to the server
  };

  const handleEmailClick = () => {
    setShowEmailNotification(true);
    setEmailCount((prevCount) => prevCount + 1);
    // send email integration request to the server
  };

  const handleCloseSMSNotification = () => {
    setShowSMSNotification(false);
  };

  const handleCloseEmailNotification = () => {
    setShowEmailNotification(false);
  };

  return (
    <div>
      <h2>Appointment Dashboard</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell>Appointment Time</TableCell>
            <TableCell>Appointment Type</TableCell>
            <TableCell align="right">
              <IconButton onClick={handleAlarmClick}>
                <Badge badgeContent={smsCount} color="secondary">
                  <Alarm />
                </Badge>
              </IconButton>
            </TableCell>
            <TableCell align="right">
              <IconButton onClick={handleEmailClick}>
                <Badge badgeContent={emailCount} color="secondary">
                  <Email />
                </Badge>
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>{appointment.patientName}</TableCell>
              <TableCell>{appointment.appointmentTime}</TableCell>
              <TableCell>{appointment.appointmentType}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Snackbar open={showSMSNotification} autoHideDuration={3000} onClose={handleCloseSMSNotification} message="SMS has been sent" />
      <Snackbar open={showEmailNotification} autoHideDuration={3000} onClose={handleCloseEmailNotification} message="Email has been sent" />
    </div>
  );
};

export default AppointmentDashboard;
