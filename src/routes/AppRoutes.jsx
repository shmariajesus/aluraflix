import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Home from '../pages/Home/Home.jsx'
import NewVideo from '../pages/NewVideo/NewVideo.jsx'
import Footer from '../components/Footer/Footer.jsx'
import DataProvider from '../contexts/DataContext.jsx'

function AppRoutes() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='newvideo' element={<NewVideo />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  )
}

export default AppRoutes
