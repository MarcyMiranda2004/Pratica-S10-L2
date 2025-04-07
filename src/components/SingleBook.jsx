import { Component } from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  render() {
    return (
      <Col xs={12} md={6} lg={3}>
        <Card
         
          style={{
            border:
              this.props.asinLibroSelezionato === this.props.book.asin
                ? '2px solid red'
                : '1px solid gray',
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            onClick={() => {

              this.props.cambiaAsin(this.props.book.asin) 
            }}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>
              {this.props.book.category} - {this.props.book.price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
