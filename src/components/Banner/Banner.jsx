import { PropTypes } from 'prop-types'
import backgroundBanner from '../../assets/backgroundBanner.webp'
import Style from './Banner.module.css'

function Banner({ data, onCardWatch }) {
  const dataInfo = data[0]
  return (
    <section className={Style.banner}>
      <img
        className={Style.backgroundImage}
        src={backgroundBanner}
        alt='Imagen background'
      />
      {dataInfo && (
        <>
          <div className={Style.titleBanner}>
            <h1>{dataInfo?.category}</h1>
            <div className={Style.infoBanner}>
              <h2>{dataInfo?.title}</h2>
              <p>{dataInfo?.description}</p>
            </div>
          </div>
          <div
            className={Style.containerImage}
            onClick={() => {
              onCardWatch(dataInfo)
            }}
          >
            <img
              className={Style.playerImage}
              src={dataInfo?.photo}
              alt='Player'
            />
          </div>
        </>
      )}

      {dataInfo === undefined && (
        <div className={Style.titleBanner}>
          <h2>Cargando...</h2>
        </div>
      )}
    </section>
  )
}

Banner.propTypes = {
  data: PropTypes.array.isRequired,
  onCardWatch: PropTypes.func.isRequired,
}

export default Banner
