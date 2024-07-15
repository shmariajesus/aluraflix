import { useState, useEffect, useMemo } from 'react'
import { FormValidate } from '../../validation/FormValidate'
import { PropTypes } from 'prop-types'
import Input from '../Input/Input'
import OptionList from '../OptionList/OptionList'
import { GiCancel } from 'react-icons/gi'
import Style from './Modal.module.css'

function Modal({ isOpen, onClose, cardActive, onUpdate, categories }) {
  const initialFormData = useMemo(
    () => ({
      title: '',
      category: '',
      photo: '',
      link: '',
      description: '',
    }),
    [],
  )

  const initialStateFields = {
    title: false,
    category: false,
    photo: false,
    link: false,
    description: false,
  }

  const styleErrorDefault = {
    titleColorText: {},
    titleBorderColor: {},
    photoColorText: {},
    photoBorderColor: {},
    linkColorText: {},
    linkBorderColor: {},
    descriptionColorText: {},
    descriptionBorderColor: {},
  }

  const styleErrorApply = {
    colorText: 'red',
    border: '2px solid red',
  }

  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState(initialFormData)
  const [fields, setFields] = useState(initialStateFields)
  const [styleError, setStyleError] = useState(styleErrorDefault)
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const validateFormAndSetErrors = async () => {
    const formErrors = await FormValidate(formData)
    setErrors(formErrors)
  }
  const handleBlur = field => {
    setFields({ ...fields, [field]: true })
    validateFormAndSetErrors()
  }

  const isFormFilled = formData => {
    return (
      formData.title.trim() !== '' &&
      formData.category.trim() !== '' &&
      formData.photo.trim() !== '' &&
      formData.link.trim() !== '' &&
      formData.description.trim() !== ''
    )
  }

  const isErrorsActive = () => {
    return (
      errors.title === undefined &&
      errors.category == undefined &&
      errors.photo === undefined &&
      errors.link === undefined &&
      errors.description === undefined
    )
  }

  const handleButtonDisabled = () => {
    if (isFormFilled(formData) && isErrorsActive()) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }

  const handleSave = e => {
    e.preventDefault()
    onUpdate(formData)
  }

  const handleChange = e => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value.toString() })
  }

  useEffect(() => {
    if (isOpen && cardActive) {
      setFormData({ ...cardActive })
    }
  }, [cardActive, isOpen, initialFormData])

  useEffect(() => {
    const updateErrorStyle = field => {
      if (errors[field] && fields[field]) {
        setStyleError(prevStyleError => ({
          ...prevStyleError,
          [`${field}ColorText`]: { color: styleErrorApply.colorText },
          [`${field}BorderColor`]: { border: styleErrorApply.border },
        }))
      } else if (!errors[field]) {
        setStyleError(prevStyleError => ({
          ...prevStyleError,
          [`${field}ColorText`]: {},
          [`${field}BorderColor`]: {},
        }))
      }
    }

    const fieldsToCheck = ['title', 'photo', 'link', 'description']
    fieldsToCheck.forEach(updateErrorStyle)

    handleButtonDisabled()
  }, [errors, fields, formData])

  if (!isOpen) {
    return null
  }

  return (
    <div className={Style.containerModal}>
      <div className={Style.modal}>
        <h2>EDITAR CARD:</h2>
        <button className={Style.exitIcon} onClick={onClose}>
          <GiCancel size={35} color='white' />
        </button>
        <form className={Style.form}>
          <div className={Style.allInputs}>
            <div className={Style.input}>
              <label style={styleError.titleColorText} htmlFor='titulo'>
                Título
              </label>
              <Input
                style={styleError.titleBorderColor}
                type='text'
                name='title'
                id='title'
                placeholder='Título'
                value={formData.title}
                onChange={e => {
                  handleChange(e)
                  handleBlur('title')
                }}
                onBlur={() => {
                  handleBlur('title')
                }}
              />
              {errors.title && fields.title && (
                <p className={Style.error}>{errors.title}</p>
              )}
            </div>
            <div className={Style.input}>
              <label htmlFor='categoria'>Categoría</label>
              <OptionList
                name='category'
                id='category'
                optionsAll={categories}
                value={formData.category}
                onChange={handleChange}
              />
            </div>
            <div className={Style.input}>
              <label style={styleError.photoColorText} htmlFor='imagen'>
                Imagen
              </label>
              <Input
                style={styleError.photoBorderColor}
                type='url'
                name='photo'
                id='photo'
                placeholder='Imagen'
                value={formData.photo}
                onChange={handleChange}
                onBlur={() => {
                  handleBlur('photo')
                }}
              />
              {errors.photo && fields.photo && (
                <p className={Style.error}>{errors.photo}</p>
              )}
            </div>
            <div className={Style.input}>
              <label style={styleError.linkColorText} htmlFor='video'>
                Video
              </label>
              <Input
                style={styleError.linkBorderColor}
                type='url'
                name='link'
                id='link'
                placeholder='Video'
                value={formData.link}
                onChange={e => {
                  handleChange(e)
                  handleBlur('link')
                }}
                onBlur={() => {
                  handleBlur('link')
                }}
              />
              {errors.link && fields.link && (
                <p className={Style.error}>{errors.link}</p>
              )}
            </div>
            <div className={Style.input}>
              <label
                style={styleError.descriptionColorText}
                htmlFor='descripcion'
              >
                Descripción
              </label>
              <textarea
                style={styleError.descriptionColorText}
                name='description'
                id='description'
                placeholder='Descripción'
                value={formData.description}
                onChange={e => {
                  handleChange(e)
                  handleBlur('description')
                }}
                onBlur={() => {
                  handleBlur('description')
                }}
              ></textarea>
              {errors.description && fields.description && (
                <p className={Style.error}>{errors.description}</p>
              )}
            </div>
          </div>
          <div className={Style.buttons}>
            <button
              onClick={handleSave}
              disabled={buttonDisabled}
              type='submit'
            >
              GUARDAR
            </button>
            <button type='reset'>LIMPIAR</button>
          </div>
        </form>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  cardActive: PropTypes.object,
  onUpdate: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
}

export default Modal
