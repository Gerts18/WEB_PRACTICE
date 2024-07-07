import './Team.css';

const Team = (props) => {
    //Desctructuracion
    const {title, secondaryColor, primaryColor} = props.data;

    const titleStyle = {borderColor: primaryColor}

    return (
        <section className="team" style={{backgroundColor: secondaryColor}} >
            <h3 style={titleStyle}>{title} </h3>
            <div className="collaborators">

            </div>
        </section>
    )
}

export default Team