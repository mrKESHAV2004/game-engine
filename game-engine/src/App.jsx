import { Navbar, Sidebar } from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Resources from './Pages/Resources'
import Documents from './Pages/Documents'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/documents" element={<Documents/>}/>
      </Routes>
    </div>
  )
}

export default App