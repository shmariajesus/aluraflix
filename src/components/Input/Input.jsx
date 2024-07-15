import { PropTypes } from 'prop-types'
import Style from './Input.module.css'

function Input({
  style,
  type,
  placeholder,
  value,
  name,
  id,
  onChange,
  onBlur,
}) {
  return (
    <input
      style={style}
      className={Style.input}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

Input.propTypes = {
  style: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
}

export default Input
