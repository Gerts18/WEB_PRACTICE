import './Team.css';
import Collaborator from '../Collaborator';
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    //Desesctructuracion
    const {title, secondaryColor, primaryColor} = props.data;
    const {collaborators, deleteCollab, updateColor} = props

    const titleStyle = {borderColor: primaryColor}

    const backgroundTeamStyle = {backgroundColor: hexToRgba(primaryColor, 0.6)}

    const notEmpty = collaborators.length > 0 

    const handleColor = (e) =>{
        updateColor(e.target.value, title)
    }   

    return ( notEmpty &&
        <section className="team" style={backgroundTeamStyle} >
            <input
                type='color'
                className='input-color'
                value={hexToRgba(primaryColor, 0.6)}
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