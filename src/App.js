import Home from './pages/Home';
import { Button, CssBaseline, useMediaQuery, useTheme } from '@material-ui/core';


function App() {


  const theme= useTheme();
  const matches= useMediaQuery(theme.breakpoints.down('md'));
  

  return (
    <>
    
      <Home />
    </>
  );
}

export default App;
