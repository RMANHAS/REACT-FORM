
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
// import Form2 from './component/Form2';
import Form1 from './component/Form1';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
    <Form1/>
    <ToastContainer/>
    {/* <Form2/> */}
    </div>
  );
}

export default App;
