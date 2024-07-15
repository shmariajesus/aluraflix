import Style from './Loader.module.css'

function Loader() {
  return (
    <div className={Style.LoaderContainer}>
      <div className={Style.dotSpinner}>
        <div className={Style.dotSpinner__dot}></div>
        <div className={Style.dotSpinner__dot}></div>
        <div className={Style.dotSpinner__dot}></div>
        <div className={Style.dotSpinner__dot}></div>
        <div className={Style.dotSpinner__dot}></div>
        <div className={Style.dotSpinner__dot}></div>
        <div className={Style.dotSpinner__dot}></div>
        <div className={Style.dotSpinner__dot}></div>
      </div>
    </div>
  )
}

export default Loader
