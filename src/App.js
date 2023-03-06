import './App.css';
import { Divider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import Dashboard from './features/dashboard/Dashboard';
import { generateData_40 } from './utils/getData';
import Footer from './features/footer/Footer';
import AppbarV2 from './features/appbar/AppbarV2';

function App() {
  // let patients = generateRandomData()
  let patients = generateData_40()
  if (patients.length > 0) {
    return (
      <div className="App">
        {/* <Appbar /> */}
        <AppbarV2 />
        <Divider variant='middle' />
        <Dashboard patients={patients} />
        <ToastContainer position="bottom-right" />
        <Footer />
        {/* <Footer_v2 /> */}
      </div>
    );
  } else {
    return <h1>Loading...</h1>
  }
}
export default App;
