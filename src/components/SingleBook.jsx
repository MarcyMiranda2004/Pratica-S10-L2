import { Card, Button, Col } from 'react-bootstrap'

const SingleBook = ({ book, asinLibroSelezionato, cambiaAsin }) => {
  const isSelected = asinLibroSelezionato === book.asin

  const handleSelection = () => {
    if (isSelected) {
      cambiaAsin('')
    } else {
      cambiaAsin(book.asin) 
    }
  }

  return (
    <Col xs={12} md={6} lg={3} className="mb-3">
      <Card
        className="h-100 shadow"
        style={{
          border: isSelected ? '3px solid red' : '1px solid gray',
          cursor: 'pointer',
        }}
      >
        <Card.Img variant="top" src={book.img} onClick={handleSelection} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            {book.category} - {book.price}€
          </Card.Text>
          <Button variant="primary">details</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleBook
