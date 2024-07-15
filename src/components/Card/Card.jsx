import { PropTypes } from 'prop-types'
import { FaRegTrashAlt } from 'react-icons/fa'
import { RiEdit2Line } from 'react-icons/ri'
import Style from './Card.module.css'

function Card({ style, divider, onEdit, onDelete, onCardWatch, image }) {
  return (
    <div style={style} className={Style.Card}>
      <div className={Style.containerImage} onClick={onCardWatch}>
        <img src={image} width='530px' alt='Image Card' />
      </div>
      <div style={divider} className={Style.CardInfo}>
        <button className={Style.CardSection} onClick={onDelete}>
          <FaRegTrashAlt size={20} />
          <p>BORRAR</p>
        </button>
        <button
          className={Style.CardSection}
          onClick={() => {
            onEdit()
          }}
        >
          <RiEdit2Line size={20} />
          <p>EDITAR</p>
        </button>
      </div>
    </div>
  )
}

Card.propTypes = {
  style: PropTypes.object,
  divider: PropTypes.object,
  onEdit: PropTypes.func,
  onCardWatch: PropTypes.func,
  image: PropTypes.string,
  onDelete: PropTypes.func,
}

export default Card
