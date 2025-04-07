import { Component } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

const URL = 'https://striveschool-api.herokuapp.com/api/comments/'

class CommentArea extends Component {
  // riceve una prop di nome "asin" che fornisce a questa CommentArea l'id del libro
  // su cui fare la fetch

  state = {
    reviews: [], // diventa un array pieno di recensioni
  }

  getReviews = () => {
    fetch(URL + this.props.asin, {
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWIwMjViMjYxNTAwMTk4YTY5NmEiLCJpYXQiOjE3NDM2OTM5NzksImV4cCI6MTc0NDkwMzU3OX0.lwf-ZIFoaovBa04KJbdJgNOkivE8F7TkiASjtoOsHWs',
      },
    }) // es. https://striveschool-api.herokuapp.com/api/comments/0316438960
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('recensioni non recuperate')
        }
      })
      .then((data) => {
        console.log('DATA', data) // array delle recensioni
        this.setState({
          reviews: data, // metto le recensioni nello stato
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // dovremmo recuperare i commenti del nuovo libro cliccato non appena
  // lo selezioniamo!
  // quando clicchiamo su un SingleBook:
  // 1) settiamo lo stato di BookList con l'asin del libro cliccato
  // 2) CommentArea riceve una nuova prop! si chiama "asin"

  componentDidUpdate = (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.getReviews()
    }
  }

  render() {
    return (
      <div>
        <h2>COMMENTAREA</h2>
        <AddComment asin={this.props.asin} />
        <CommentsList reviews={this.state.reviews} />
      </div>
    )
  }
}

export default CommentArea
