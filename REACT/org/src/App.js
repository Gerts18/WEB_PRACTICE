import './App.css';
import Form from './components/Form/Form.js';
import Header from './components/Header/Header.jsx';
import MiOrg from './components/MiOrg/index.js';

/* console.log(Header) */

function App() {
  return (
    <div>
      <Header/>
      <Form/>
      <MiOrg/>
    </div>
  );
}

export default App;
