
import './App.css';
import MainForm from './components/mainForm/MainForm.js'
import theme from './components/Theme/Theme.js'
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MainForm />
      </ThemeProvider>
    </div>
  );
}

export default App;
