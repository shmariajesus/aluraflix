import { useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Category from '../../components/Category/Category'
import WatchVIdeo from '../../components/WatchVideo/WatchVideo'
import Modal from '../../components/Modal/Modal'
import { useData } from '../../contexts/DataContext'
import Style from './Home.module.css'
import Loader from '../../components/Loader/Loader'

function Home() {
  const {
    videos = [],
    categories = [],
    banners = [],
    editVideo,
    deleteVideo,
  } = useData()
  const [modalOpen, setModalOpen] = useState(false)
  const [cardOpen, setCardOpen] = useState(null)
  const [watchVideoOpen, setWatchVideoOpen] = useState(false)
  const [watchVideoInfo, setWatchVideoInfo] = useState({})

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleCardEdit = video => {
    setCardOpen(video)
    setModalOpen(true)
  }

  const handleDelete = id => {
    deleteVideo(id)
  }

  const handleUpdate = cardUpdated => {
    editVideo(cardUpdated.id, cardUpdated)
  }

  const handleWatchVideo = data => {
    setWatchVideoInfo(data)
    setWatchVideoOpen(true)
  }

  const handleWatchVideoClose = () => {
    setWatchVideoOpen(false)
  }

  return (
    <>
      <main className={Style.main}>
        {categories.length === 0 && <Loader />}
        {categories.length !== 0 && (
          <Banner data={banners} onCardWatch={handleWatchVideo} />
        )}
        {categories.map(category => (
          <Category
            key={category.id}
            datos={category}
            cards={videos.filter(video => video?.category === category.name)}
            onCardEdit={handleCardEdit}
            OnCardDelete={handleDelete}
            onCardWatch={handleWatchVideo}
          />
        ))}
      </main>
      <WatchVIdeo
        cardActive={watchVideoInfo}
        isOpen={watchVideoOpen}
        onClose={handleWatchVideoClose}
      />
      <Modal
        cardActive={cardOpen}
        isOpen={modalOpen}
        onClose={handleModalClose}
        onUpdate={handleUpdate}
        categories={categories}
      />
    </>
  )
}

export default Home
