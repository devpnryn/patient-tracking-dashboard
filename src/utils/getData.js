const generateData = () => {
    const patients = [
        {
            id: 1,
            name: 'John Doe',
            followUpDetails: [
                { date: '2022-03-01', time: '10:00 AM', status: 'Confirmed' },
                { date: '2022-03-08', time: '11:00 AM', status: 'Remind' },
                { date: '2022-03-15', time: '12:00 PM', status: 'Not Confirmed' },
            ],
            status: 'remind',
            time: '10:00 AM', type: 'Routine Checkup',
            reminded: 1,
        },
        {
            id: 2,
            name: 'Jane Smith',
            followUpDetails: [
                { date: '2022-03-02', time: '10:00 AM', status: 'Confirmed' },
                { date: '2022-03-09', time: '11:00 AM', status: 'Confirmed' },
                { date: '2022-03-16', time: '12:00 PM', status: 'Confirmed' },
            ],
            status: 'confirm',
            time: '11:30 AM', type: 'Dental Cleaning',
            reminded: 0,
        },
        {
            id: 3,
            name: 'Bob Johnson',
            followUpDetails: [
                { date: '2022-03-03', time: '10:00 AM', status: 'Confirmed' },
                { date: '2022-03-10', time: '11:00 AM', status: 'Remind' },
                { date: '2022-03-17', time: '12:00 PM', status: 'Not Confirmed' },
            ],
            status: 'confirm',
            time: '2:00 PM', type: 'Eye Exam',
            reminded: 1,
        },
        {
            id: 4,
            name: 'Mary Brown',
            followUpDetails: [
                { date: '2022-03-02', time: '10:00 AM', status: 'Confirmed' },
                { date: '2022-03-09', time: '11:00 AM', status: 'Confirmed' },
                { date: '2022-03-16', time: '12:00 PM', status: 'Confirmed' },
            ],
            status: 'confirm',
            time: '3:30 PM', type: 'Physical Therapy',
            reminded: 3
        }]
    return patients;
}

const generateData_40 = () => {
    const patients = [];
    const followUpStatuses = ['Confirmed', 'Remind', 'Call Now'];
    const appointmentTypes = ['Routine Checkup', 'Dental Cleaning', 'Eye Exam', 'Physical Therapy'];
    const appointmentTimes = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

    for (let i = 1; i <= 40; i++) {
        const patient = {
            id: i,
            name: `Patient ${i}`,
            followUpDetails: [
                { date: '2022-03-01', time: appointmentTimes[Math.floor(Math.random() * appointmentTimes.length)], status: followUpStatuses[Math.floor(Math.random() * followUpStatuses.length)] },
                { date: '2022-03-08', time: appointmentTimes[Math.floor(Math.random() * appointmentTimes.length)], status: followUpStatuses[Math.floor(Math.random() * followUpStatuses.length)] },
                { date: '2022-03-15', time: appointmentTimes[Math.floor(Math.random() * appointmentTimes.length)], status: followUpStatuses[Math.floor(Math.random() * followUpStatuses.length)] },
            ],
            status: followUpStatuses[Math.floor(Math.random() * followUpStatuses.length)],
            time: appointmentTimes[Math.floor(Math.random() * appointmentTimes.length)],
            type: appointmentTypes[Math.floor(Math.random() * appointmentTypes.length)],
            reminded: Math.floor(Math.random() * 4)
        };
        patients.push(patient);
    }
    return patients;
}

const generateRandomData = async () => {
    const patients = [];
    const followUpStatuses = ['Confirmed', 'Remind', 'Not Confirmed'];
    const appointmentTypes = ['Routine Checkup', 'Dental Cleaning', 'Eye Exam', 'Physical Therapy'];
    const appointmentTimes = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

    for (let i = 1; i <= 40; i++) {
        const response = await fetch('https://random-data-api.com/api/name/random_name');
        const json = await response.json();
        const { first_name, last_name } = json;
        // const response = await fetch('https://randomuser.me/api/');
        // const json = await response.json();
        // const { name: { first, last } } = json.results[0];

        const patient = {
            id: i,
            name: `${first_name} ${last_name}`,
            followUpDetails: [
                { date: '2022-03-01', time: appointmentTimes[Math.floor(Math.random() * appointmentTimes.length)], status: followUpStatuses[Math.floor(Math.random() * followUpStatuses.length)] },
                { date: '2022-03-08', time: appointmentTimes[Math.floor(Math.random() * appointmentTimes.length)], status: followUpStatuses[Math.floor(Math.random() * followUpStatuses.length)] },
                { date: '2022-03-15', time: appointmentTimes[Math.floor(Math.random() * appointmentTimes.length)], status: followUpStatuses[Math.floor(Math.random() * followUpStatuses.length)] },
            ],
            status: followUpStatuses[Math.floor(Math.random() * followUpStatuses.length)],
            time: appointmentTimes[Math.floor(Math.random() * appointmentTimes.length)],
            type: appointmentTypes[Math.floor(Math.random() * appointmentTypes.length)],
            reminded: Math.floor(Math.random() * 4)
        };
        patients.push(patient);
    }
    return patients;
};




export { generateData, generateData_40, generateRandomData };


// export { generateData };