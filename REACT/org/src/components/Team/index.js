import './Team.css';
import Collaborator from '../Collaborator';

const Team = (props) => {
    //Desesctructuracion
    const {title, secondaryColor, primaryColor} = props.data;
    const {collaborators, deleteCollab, updateColor} = props

    const titleStyle = {borderColor: primaryColor}

    const backgroundTeamStyle = {backgroundColor: secondaryColor}

    const notEmpty = collaborators.length > 0 

    const handleColor = (e) =>{
        updateColor(e.target.value, title)
    }   

    return ( notEmpty &&
        <section className="team" style={backgroundTeamStyle} >
            <input
                type='color'
                className='input-color'
                value={secondaryColor}
                onChange={handleColor}
            />
            <h3 style={titleStyle}>{title} </h3>
            <div className="collaborators">
                {
                    collaborators.map((collaborator, index) => <Collaborator 
                        data={collaborator} 
                        key={index} 
                        color = {primaryColor}
                        deleteCollab = {deleteCollab}
                    /> )
                }
            </div>
        </section>
    )
}

export default Team