import { Route, Routes } from 'react-router-dom'

import Perfil from '../components/Perfil.jsx'
import ErrorPages from '../components/ErrorPages.jsx'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path = '/perfil' element ={<Perfil />} />
        <Route path="/" element={<Perfil />} />
        <Route path='*' element = { <ErrorPages/>} />

    </Routes>
  )
}

export default AppRoutes