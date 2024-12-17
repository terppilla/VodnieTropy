import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx'; 
import Siberia from './components/Siberia.jsx'; 
import SiberiaPage1 from './components/RoutesComponents/Siberia1.jsx';
import SiberiaPage2 from './components/RoutesComponents/Siberia2.jsx';
import SiberiaPage3 from './components/RoutesComponents/Siberia3.jsx';


import Karelya from './components/Karelya.jsx';
import KarelyaPage1 from './components/RoutesComponents/Karelya1.jsx';
import KarelyaPage2 from './components/RoutesComponents/Karelya2.jsx';
import KarelyaPage3 from './components/RoutesComponents/Karelya3.jsx';

import Volga from './components/Volga.jsx';
import VolgaPage1 from './components/RoutesComponents/Volga1.jsx';
import VolgaPage2 from './components/RoutesComponents/Volga2.jsx';
import VolgaPage3 from './components/RoutesComponents/Volga3.jsx';

export default function App() {
  
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/routes/siberia" element={<Siberia />} />
                    <Route path="/routes/karelia" element={<Karelya />} />
                    <Route path="/karelya1" element={<KarelyaPage1 />} />
                    <Route path="/karelya2" element={<KarelyaPage2 />} />
                    <Route path="/karelya3" element={<KarelyaPage3 />} />

                    <Route path="/siberia1" element={<SiberiaPage1 />} />
                    <Route path="/siberia2" element={<SiberiaPage2 />} />
                    <Route path="/siberia3" element={<SiberiaPage3 />} />

                    <Route path="/volga1" element={<VolgaPage1 />} />
                    <Route path="/volga2" element={<VolgaPage2 />} />
                    <Route path="/volga3" element={<VolgaPage3 />} />
                    <Route path="/routes/volga" element={<Volga />} />

            </Routes>
        </BrowserRouter>
    );
}

