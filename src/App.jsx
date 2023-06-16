import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/components/header';
import { publicRoutes } from './routes';
import './App.css';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        {publicRoutes.map((route, i) => {
          let Page = route.component;
          return (
            <Route key={i} path={route.path} element={< Page />} />
          )
        })}
      </Routes>
    </div>
  )
}

export default App;
