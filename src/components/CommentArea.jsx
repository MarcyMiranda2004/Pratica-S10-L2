import { Component } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

const URL = 'https://striveschool-api.herokuapp.com/api/comments/'

class CommentArea extends Component {

  state = {
    reviews: [], 
  }

  getReviews = () => {
    fetch(URL + this.props.asin, {
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWIwMjViMjYxNTAwMTk4YTY5NmEiLCJpYXQiOjE3NDM2OTM5NzksImV4cCI6MTc0NDkwMzU3OX0.lwf-ZIFoaovBa04KJbdJgNOkivE8F7TkiASjtoOsHWs',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('recensioni non recuperate')
        }
      })
      .then((data) => {
        console.log('DATA', data)
        this.setState({
          reviews: data, 
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
