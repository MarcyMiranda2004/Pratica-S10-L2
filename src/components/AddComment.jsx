import { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'

const commentsURL = 'https://striveschool-api.herokuapp.com/api/comments/'

const AddComment = ({ asin }) => {
  const [review, setReview] = useState({
    comment: '',
    rate: '',
    elementId: asin,
  })

  useEffect(() => {
    setReview((prevReview) => ({
      ...prevReview,
      elementId: asin,
    }))
  }, [asin])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(commentsURL, {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWIwMjViMjYxNTAwMTk4YTY5NmEiLCJpYXQiOjE3NDM2OTM5NzksImV4cCI6MTc0NDkwMzU3OX0.lwf-ZIFoaovBa04KJbdJgNOkivE8F7TkiASjtoOsHWs',
      },
    })
      .then((response) => {
        if (response.ok) {
          alert('Commento Inviato!')
          setReview({
            comment: '',
            rate: '',
            elementId: asin,
          })
        } else {
          throw new Error('Invio Commento Fallito')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <h2>Scrivi Un Commento:</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Testo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cosa ne penso..."
            value={review.comment}
            required
            onChange={(e) =>
              setReview({ ...review, comment: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Voto</Form.Label>
          <Form.Select
            value={review.rate}
            onChange={(e) =>
              setReview({ ...review, rate: e.target.value })
            }
          >
            <option value="">Scegli un voto</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit" className="mb-4">
          INVIA
        </Button>
      </Form>
    </>
  )
}

export default AddComment
