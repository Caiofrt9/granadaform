import styles from './MainArea.css'

import doleta from '../Assets/doleta.png'
import Form from './Form'

const MainArea = () => {
  return (
    <div className="image-bg">
      <img src={doleta} />
      <Form />
    </div>
  )
}

export default MainArea
