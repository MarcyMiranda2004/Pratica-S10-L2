import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import FantasyBook from './data/fantasy.json'
import BookList from './components/BookList'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNav />
      <main className="flex-grow-1">
        <Welcome />
        <BookList arrayOfBooks={FantasyBook} />
      </main>
      <MyFooter />
    </div>
  )
}

export default App
