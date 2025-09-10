import './App.css';
import { Routes , Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ServiceLayout from './components/ServiceLayout';
import WebDev from './pages/WebDev';
import AppDev from './pages/AppDev';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='services' element={<ServiceLayout />}>
            <Route path='web' element={<WebDev />} />
            <Route path='app' element={<AppDev />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
