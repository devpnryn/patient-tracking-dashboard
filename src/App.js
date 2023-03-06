import './App.css';
import { Divider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import Dashboard from './features/dashboard/Dashboard';
import { generateData } from './utils/getData';
import Footer from './features/footer/Footer';
import AppbarV2 from './features/appbar/AppbarV2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import ThemeProvider from './ThemeProvider';
import { useState } from 'react';

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // .dashboard-container {
  //   flex-grow: 1;
  //   overflow-y: auto;
  //   padding: 16px;
  // }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });


  let patients = generateData()

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppbarV2 toggleTheme={toggleTheme} />
        <Divider variant='middle' />
        <div className="dashboard-container" style={{ flexGrow: 1, overflowY: 'auto' }}>
          <Dashboard patients={patients} />
        </div>
        <ToastContainer position="bottom-right" />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
