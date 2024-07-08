import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form.js';
import Header from './components/Header/Header.jsx';
import MiOrg from './components/MiOrg/index.js';
import Team from './components/Team/index.js';
import Footer from './components/Footer/index.jsx';

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  const [collaborators, setCollaborators] = useState([
    {
    name:"German Torres", 
    image:"https://github.com/Gerts18.png", 
    team:"Programacion", 
    occupation:"Lead Programmer"
    },
    {
      name:"Eddy", 
      image:"https://github.com/eddy3o.png", 
      team:"Front End", 
      occupation:"Sr Programmer"
    }
  ]);
  //List of teams available
  const [teamsList, setTeamsList] = useState([
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
  ])

  // Ternario -->  condicion ? true : false
  // Corto circuito --> condicion && true

  //Register Collaborator 
  const registerCollaborator = (collaborator) => {
    //Spread Operator
    setCollaborators([...collaborators, collaborator])
  }

  //Eliminate Collaborator
  const deleteCollaborator = () => {

  }

  //Update Color Team
  const updateColor = (newColor, title) =>{
    const teamsUpdated = teamsList.map((team) => {
      if(team.title === title){
        team.primaryColor = newColor;
      }
      return team
    })
    setTeamsList(teamsUpdated)
  }

  return (
    <div>
      <Header/>
      {
        displayForm && <Form 
          teams={teamsList.map((team) => team.title)} 
          registerCollab = {registerCollaborator}
        /> 
      }

      <MiOrg changeDisplay={() => setDisplayForm(!displayForm)} />

      {
        teamsList.map( (team) => <Team 
          data={team} 
          key={team.title}
          collaborators = {collaborators.filter(collaborator => collaborator.team === team.title)}
          deleteCollab = {deleteCollaborator}
          updateColor = {updateColor}
         />
        )
      } 

      <Footer/>
    </div>
  )
}

export default App
