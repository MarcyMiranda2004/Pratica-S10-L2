// BookList riceve dalle props un array di libri, sotto il nome di "arrayOfBooks"

import { Container, Form, Row, Col } from 'react-bootstrap'
import SingleBook from './SingleBook'
import { Component } from 'react'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
    search: '', // il valore del campo di ricerca
    asin: '', // devo cambiare questo asin a ogni click su un SingleBook
  }

  changeAsin = (newAsin) => {
    // questa funzione verrà eseguita da ogni SingleBook cliccato
    // serve a ricevere l'asin del libro da SingleBook e a salvarlo dentro lo
    // stato di BookList
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
                  // filter applica una condizione ad ogni libro
                  // se la condizione ritorna true, il libro corrente farà parte
                  // dell'array filtrato; se invece la condizione sul libro torna false,
                  // il filtro blocca il libro e non andrà a far parte dei risultati
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
                // versione abbreviata ultrapro
                // .filter((libro) =>
                //   libro.title
                //     .toLowerCase()
                //     .includes(this.state.search.toLowerCase())
                // )
                .map((libro) => {
                  // genero 50 volte SingleBook
                  // per ogni libro genero un SingleBook
                  // ogni invocazione di SingleBook riceve un libro diverso!
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
