import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComments'

const CommentsList = (props) =>{
  return (
    <ListGroup>
      {props.reviews.map((recensione) => {
        return <SingleComment recensione={recensione} key={recensione._id} />
      })}
    </ListGroup>
  )
}

export default CommentsList
