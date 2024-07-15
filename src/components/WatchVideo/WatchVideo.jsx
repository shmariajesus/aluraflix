import { PropTypes } from 'prop-types'
import { GiCancel } from 'react-icons/gi'
import Style from './WatchVideo.module.css'

function WatchVideo({ cardActive, isOpen, onClose }) {
  if (!isOpen) {
    return null
  }

  return (
    <section className={Style.container}>
      <section className={Style.box}>
        <h2 className={Style.title}>{cardActive.title}</h2>
        <button className={Style.exitIcon} onClick={onClose}>
          <GiCancel size={35} color='white' />
        </button>
        <div className={Style.iframe}>
          <iframe
            className={Style.video}
            width='560'
            height='315'
            src={`${cardActive.link}`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
        <div className={Style.information}>
          <h3 className={Style.titleDescription}>Descripción</h3>
          <p>{cardActive.description}</p>
        </div>
      </section>
    </section>
  )
}

WatchVideo.propTypes = {
  cardActive: PropTypes.object,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}

export default WatchVideo
