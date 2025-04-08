import { useState, useEffect } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

const reviewURL = 'https://striveschool-api.herokuapp.com/api/comments/'

const CommentArea = ({ asin }) => {
  const [reviews, setReviews] = useState([])

  const getReviews = () => {
    fetch(reviewURL + asin, {
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWIwMjViMjYxNTAwMTk4YTY5NmEiLCJpYXQiOjE3NDM2OTM5NzksImV4cCI6MTc0NDkwMzU3OX0.lwf-ZIFoaovBa04KJbdJgNOkivE8F7TkiASjtoOsHWs',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Recensioni non recuperate')
        }
      })
      .then((data) => {
        setReviews(data)
      })
      .catch((err) => {
        console.log('Errore:', err)
      })
  }

  useEffect(() => {
    if (asin) {
      getReviews()
    }
  }, [asin])

  return (
    <div>
      <AddComment asin={asin} /> 
      <h2>Commenti Sul Libro:</h2>
      <CommentsList reviews={reviews} /> 
    </div>
  )
}

export default CommentArea
