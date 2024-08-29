import BooksPage from './views/BooksPage.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import SingleBookPage from './views/SingleBookPage.jsx';
import AddBookPage from './views/AddBookPage.jsx';
function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route index element={<BooksPage />}/>
        <Route path="add-book" element={<AddBookPage />}/>
        <Route path="book/:id" element={<SingleBookPage />}/>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
