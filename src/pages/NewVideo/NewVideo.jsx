import { useState, useEffect } from 'react'
import OptionList from '../../components/OptionList/OptionList'
import { useData } from '../../contexts/DataContext'
import { FormValidate } from '../../validation/FormValidate'
import Style from './NewVideo.module.css'

function NewVideo() {
  const initialData = {
    title: '',
    category: '',
    photo: '',
    link: '',
    description: '',
  }

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

  const { categories = [], postVideo } = useData()
  const [errors, setErrors] = useState({})
  const [data, setData] = useState(initialData)
  const [fields, setFields] = useState(initialStateFields)
  const [styleError, setStyleError] = useState(styleErrorDefault)
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const validateFormAndSetErrors = async () => {
    const formErrors = await FormValidate(data)
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

  const handleSubmit = async e => {
    e.preventDefault()
    await validateFormAndSetErrors()
    if (isFormFilled(data) && Object.keys(errors).length === 0) {
      postVideo(data)
    }
  }

  const handleChange = e => {
    const { id, value } = e.target
    setData({ ...data, [id]: value })
  }

  const handleButtonDisabled = () => {
    if (isFormFilled(data) && isErrorsActive()) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }

  useEffect(() => {
    if (categories.length > 0) {
      setData(prevData => ({
        ...prevData,
        category: categories[0].name,
      }))
    }
  }, [categories])

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
  }, [errors, fields, data])

  return (
    <section className={Style.newVideo}>
      <div className={Style.title}>
        <h1>NUEVO VIDEO</h1>
        <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
      </div>
      <form className={Style.container}>
        <h2>Crear Tarjeta</h2>
        <div className={Style.allInputs}>
          <div className={Style.input}>
            <label style={styleError.titleColorText} htmlFor='title'>
              Título
            </label>
            <input
              style={styleError.titleBorderColor}
              id='title'
              type='text'
              placeholder='Ingrese el título'
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
            <label htmlFor='category'>Categoría</label>
            <OptionList
              section='addVideo'
              name='category'
              id='category'
              optionsAll={categories}
              onChange={e => {
                handleChange({
                  target: { id: 'category', value: e.target.value },
                })
              }}
            />
          </div>
          <div className={Style.input}>
            <label style={styleError.photoColorText} htmlFor='photo'>
              Imagen
            </label>
            <input
              style={styleError.photoBorderColor}
              id='photo'
              type='url'
              placeholder='Ingrese el enlace de la imagen'
              onChange={e => {
                handleChange(e)
                handleBlur('photo')
              }}
              onBlur={() => {
                handleBlur('photo')
              }}
            />
            {errors.photo && fields.photo && (
              <p className={Style.error}>{errors.photo}</p>
            )}
          </div>
          <div className={Style.input}>
            <label style={styleError.linkColorText} htmlFor='link'>
              Video
            </label>
            <input
              style={styleError.linkBorderColor}
              id='link'
              type='url'
              placeholder='Ingrese el enlace del video'
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
              htmlFor='description'
            >
              Descripción
            </label>
            <textarea
              style={styleError.descriptionBorderColor}
              name='description'
              id='description'
              cols='30'
              placeholder='¿De que trata este video?'
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
            onClick={handleSubmit}
            disabled={buttonDisabled}
            type='submit'
          >
            GUARDAR
          </button>
          <button type='reset'>LIMPIAR</button>
        </div>
      </form>
    </section>
  )
}

export default NewVideo
