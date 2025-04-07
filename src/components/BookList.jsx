import { Container, Form, Row, Col } from 'react-bootstrap'
import SingleBook from './SingleBook'
import { Component } from 'react'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
    search: '', 
    asin: '', 
  }

  changeAsin = (newAsin) => {
    this.setState({
      asin: newAsin,
    })
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center my-5">
          <Col xs={12} md={6}>
            <Form.Control
              type="text"
              placeholder="cerca un libro"
              value={this.state.search}
              onChange={(e) => {
                this.setState({
                  search: e.target.value,
                })
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <Row>
              {this.props.arrayOfBooks
                .filter((libro) => {
                  if (
                    libro.title
                      .toLowerCase()
                      .includes(this.state.search.toLowerCase())
                  ) {
                    return true
                  } else {
                    return false
                  }
                })

                .map((libro) => {
                  return (
                    <SingleBook
                      book={libro}
                      key={libro.asin}
                      cambiaAsin={this.changeAsin}
                      asinLibroSelezionato={this.state.asin}
                    />
                  )
                })}
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <CommentArea asin={this.state.asin} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default BookList
