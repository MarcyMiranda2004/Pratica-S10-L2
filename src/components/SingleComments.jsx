import { Button, ListGroup } from 'react-bootstrap'

const URL = 'https://striveschool-api.herokuapp.com/api/comments/'

const SingleComment = function (props) {
  const deleteComment = () => {
    fetch(URL + props.recensione._id, {
      method: 'DELETE',
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWIwMjViMjYxNTAwMTk4YTY5NmEiLCJpYXQiOjE3NDM2OTM5NzksImV4cCI6MTc0NDkwMzU3OX0.lwf-ZIFoaovBa04KJbdJgNOkivE8F7TkiASjtoOsHWs',
      },
    })
      .then((response) => {
        if (response.ok) {
          alert('recensione eliminata!')
        } else {
          throw new Error('non eliminata')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <div className="d-flex flex-wrap align-content-center">
        {props.recensione.comment} | {props.recensione.rate}/5
      </div>
      <Button variant="danger" onClick={deleteComment}>
        <i className="bi bi-trash-fill"></i>
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
