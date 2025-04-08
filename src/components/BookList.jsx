import { Container, Form, Row, Col } from 'react-bootstrap'
import SingleBook from './SingleBook'
import { useState } from 'react'
import CommentArea from './CommentArea'

const BookList = ({ arrayOfBooks }) => {
  
  const [search, setSearch] = useState('')
  const [asin, setAsin] = useState('')

  const changeAsin = (newAsin) => {
    setAsin(newAsin)
  }

    return (
      <Container>
        <Row className="justify-content-start mb-3 mt-5 w-50">
          <Col xs={12} md={6}>
            <Form.Control
              type="text"
              placeholder="cerca un libro"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={8}>
            <Row>
              {arrayOfBooks
                .filter((libro) =>
                  libro.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((libro) => (
                  <SingleBook
                    key={libro.asin}
                    book={libro}
                    cambiaAsin={changeAsin}
                    asinLibroSelezionato={asin}
                  />
                ))}
            </Row>
          </Col>

          <Col xs={12} md={4}>
            <CommentArea asin={asin} />
          </Col>
          
      </Row>
      </Container>
    )
}

export default BookList
