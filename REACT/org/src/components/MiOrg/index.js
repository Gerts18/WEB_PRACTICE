import {React} from 'react'
import './MiOrg.css'

const MiOrg = (props) => {
  //Estado - hooks
  //useState
  //const [display, setDisplay] = useState(true);

  const handleClick = () => {
      //setDisplay(!display);
      props.changeDisplay();
  }

  return (
    <section className='orgSection'>
        <h3 className='title'>Mi organización</h3>
        <img src='/img/add.png' alt='add' onClick={handleClick}/>
    </section>
  )
}

export default MiOrg
