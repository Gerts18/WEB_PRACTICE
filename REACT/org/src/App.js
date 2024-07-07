import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form.js';
import Header from './components/Header/Header.jsx';
import MiOrg from './components/MiOrg/index.js';
import Team from './components/Team/index.js';

/* console.log(Header) */

function App() {

  //Ternario -->  condicion ? true : false
  // corto circuito --> condicion && true

  const teamsList = [
    {
      title: "Programacion",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      title: "Innovación y  Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    }
  ]

  const [displayForm, setDisplayForm] = useState(false);

  return (
    <div>
      <Header/>
      {displayForm && <Form teamsList={teamsList} /> }
      <MiOrg changeDisplay={() => setDisplayForm(!displayForm)} />
      {
        teamsList.map( (team, id) => {
          return <Team data={team} key={team.title} />
        })
      } 
    </div>
  )
}

export default App
