import { Routes, Route, Switch } from 'react-router-dom';

import { Navigate } from 'react-router-dom';
import './App.css';
import Open_page from './page/open/Open_page';
import Home from './page/home/Home';
import Menu from './componants/menu/Menu';
import { AppProvider } from './AppContext';
import QRScannerPage from './componants/qrScan/QRScannerPage';
function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes>

          {/* <Route path="/qr-scanner" component={QRScannerPage} />
            <Route path='/' element={<Open_page />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/home/menu' element={<Menu />}></Route>
            <Redirect exact from="/" to="/qr-scanner" /> */}
          {/* <Route path="/qr-scanner" element={<QRScannerPage />} /> */}
          <Route path="/" element={<Open_page />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/menu" element={<Menu />} />
          {/* <Navigate to="/qr-scanner" replace /> */}


        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
