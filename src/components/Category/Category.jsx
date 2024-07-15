import { PropTypes } from 'prop-types'
import Card from '../Card/Card'
import Style from './Category.module.css'

function Category({ datos, onCardEdit, OnCardDelete, cards, onCardWatch }) {
  let { name, style } = datos
  const styles = {
    backgroundColor: `${style}`,
  }
  const stylesCard = {
    boxShadow: `inset 0px 5px 20px 0px ${style}`,
    border: `solid 5px ${style}`,
  }
  const divider = {
    borderTop: `solid 5px ${style}`,
  }

  return (
    <div className={Style.category}>
      <h3 style={styles} className={Style.categoryName}>
        {name}
      </h3>
      <div className={Style.cardList}>
        {cards.map(card => (
          <Card
            style={stylesCard}
            divider={divider}
            onEdit={() => onCardEdit(card)}
            onDelete={() => OnCardDelete(card.id)}
            onCardWatch={() => onCardWatch(card)}
            key={card.id}
            image={card.photo}
          />
        ))}
      </div>
    </div>
  )
}

Category.propTypes = {
  datos: PropTypes.shape({
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
  }).isRequired,
  onCardEdit: PropTypes.func.isRequired,
  OnCardDelete: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onCardWatch: PropTypes.func.isRequired,
}

export default Category
