import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Form from './components/Form/Form.js';
import Header from './components/Header/Header.jsx';
import MiOrg from './components/MiOrg/index.js';
import Team from './components/Team/index.js';
import Footer from './components/Footer/index.jsx';

function App() {
  const [displayForm, setDisplayForm] = useState(true);
  const [collaborators, setCollaborators] = useState([
    {
    id: uuidv4(),
    name:"German Torres", 
    image:"https://github.com/Gerts18.png", 
    team:"Programacion", 
    occupation:"Lead Programmer"
    },
    {
      id: uuidv4(),
      name:"Eddy", 
      image:"https://github.com/eddy3o.png", 
      team:"Front End", 
      occupation:"Sr Programmer"
    },
    {
      id: uuidv4(),
      name:"Andre", 
      image:"https://github.com/Andreexd.png", 
      team:"Programacion", 
      occupation:"Jr programmer"
    }
  ]);
  //List of teams available
  const [teamsList, setTeamsList] = useState([
    {
      id: uuidv4(),
      title: "Programacion",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      id: uuidv4(),
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      id: uuidv4(),
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      id: uuidv4(),
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      id: uuidv4(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      id: uuidv4(),
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      id: uuidv4(),
      title: "Innovación y  Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    }
  ])

  // Ternario -->  condicion ? true : false
  // Corto circuito --> condicion && true

  //Register Collaborator 
  const registerCollaborator = (collaborator) => {
    collaborator.id = uuidv4()
    //Spread Operator
    setCollaborators([...collaborators, collaborator])
  }

  //Eliminate Collaborator
  const deleteCollaborator = (id) => {
    const collaboratorsUpdated = collaborators.filter(collaborator => collaborator.id !== id)
    setCollaborators(collaboratorsUpdated)
  }

  //Update Color Team
  const updateColor = (newColor, id) =>{
    const teamsUpdated = teamsList.map((team) => {
      if(team.id === id){
        team.primaryColor = newColor;
      }
      return team
    })
    setTeamsList(teamsUpdated)
  }

  //Create team
  const createTeam = (newTeam) => {
    setTeamsList([...teamsList, {...newTeam, id: uuidv4() } ])
  }

  return (
    <div>
      <Header/>
      {
        displayForm && <Form 
          teams={teamsList.map((team) => team.title)} 
          registerCollab = {registerCollaborator}
          createTeam = {createTeam}
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
