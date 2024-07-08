import './Team.css';
import Collaborator from '../Collaborator';

const Team = (props) => {
    //Desesctructuracion
    const {title, secondaryColor, primaryColor} = props.data;
    const {collaborators, deleteCollab} = props

    const titleStyle = {borderColor: primaryColor}

    const notEmpty = collaborators.length > 0 

    return ( notEmpty &&
        <section className="team" style={{backgroundColor: secondaryColor}} >
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