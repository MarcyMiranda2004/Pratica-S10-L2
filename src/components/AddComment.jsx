import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

const URL = 'https://striveschool-api.herokuapp.com/api/comments/'

class AddComment extends Component {
  state = {
    review: {
      comment: '',
      rate: '3',
      elementId: this.props.asin,
    },
  }

  sendReview = (e) => {
    e.preventDefault()
    // facciamo la post, inviando come body this.state.review
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(this.state.review),
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWIwMjViMjYxNTAwMTk4YTY5NmEiLCJpYXQiOjE3NDM2OTM5NzksImV4cCI6MTc0NDkwMzU3OX0.lwf-ZIFoaovBa04KJbdJgNOkivE8F7TkiASjtoOsHWs',
      },
    })
      .then((response) => {
        if (response.ok) {
          alert('COMMENTO INVIATO!')
        } else {
          throw new Error('commento NON inviato')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <Form onSubmit={this.sendReview}>
        <Form.Group className="mb-3">
          <Form.Label>Testo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Bello sto libbbro!"
            value={this.state.review.comment}
            required
            onChange={(e) => {
              this.setState({
                review: {
                  ...this.state.review,
                  comment: e.target.value,
                },
              })
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Voto</Form.Label>
          <Form.Select
            value={this.state.review.rate}
            onChange={(e) => {
              this.setState({
                review: {
                  ...this.state.review,
                  rate: e.target.value,
                },
              })
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit">
          INVIA
        </Button>
      </Form>
    )
  }
}

export default AddComment
