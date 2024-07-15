import { createContext, useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

const DataContext = createContext()

export const useData = () => {
  return useContext(DataContext)
}

// DEV
// const URL_BASE = 'http://localhost:3001'

// PROD
const URL_BASE = 'https://aluraflix-api-ivory.vercel.app'

const URL_VIDEOS_API = `${URL_BASE}/videos`
const URL_CATEGORIES_API = `${URL_BASE}/categories`
const URL_BANNERS_API = `${URL_BASE}/banners`

function DataProvider({ children }) {
  const [videos, setVideos] = useState([])
  const [categories, setCategories] = useState([])
  const [banners, setBanners] = useState([])
  const [fetching, setFetching] = useState(true)

  const fetchVideos = async () => {
    try {
      const res = await fetch(URL_VIDEOS_API)
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await res.json()
      setVideos(data)
    } catch (error) {
      console.error(
        'Failed to fetch videos from API, loading local data:',
        error,
      )
    }
  }

  const fetchCategories = async () => {
    try {
      const res = await fetch(URL_CATEGORIES_API)
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await res.json()
      setCategories(data)
    } catch (error) {
      console.error(
        'Failed to fetch categories from API, loading local data:',
        error,
      )
    }
  }

  const fetchBanners = async () => {
    try {
      const res = await fetch(URL_BANNERS_API)
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await res.json()
      setBanners(data)
    } catch (error) {
      console.error(
        'Failed to fetch banner from API, loading local data:',
        error,
      )
    }
  }

  useEffect(() => {
    fetchCategories()
    fetchBanners()
  }, [])

  useEffect(() => {
    if (fetching) {
      fetchVideos()
      setFetching(false)
    }
  }, [fetching])

  const postVideo = async video => {
    try {
      const res = await fetch(URL_VIDEOS_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(video),
      })
      const data = await res.json()
      setVideos([...videos, setVideos(data)])
      setFetching(true)
    } catch (error) {
      console.error(error)
    }
  }

  const editVideo = async (id, video) => {
    try {
      const res = await fetch(`${URL_VIDEOS_API}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(video),
      })
      const data = await res.json()
      setVideos([...videos, setVideos(data)])
      setFetching(true)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteVideo = async id => {
    try {
      await fetch(`${URL_VIDEOS_API}/${id}`, {
        method: 'DELETE',
      })
      setVideos(videos.filter(video => video.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <DataContext.Provider
      value={{
        videos,
        categories,
        banners,
        postVideo,
        editVideo,
        deleteVideo,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DataProvider
