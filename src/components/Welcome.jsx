import Alert from 'react-bootstrap/Alert'

const Welcome = () => {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5' >
      <Alert variant="primary" className='p-3 w-50 text-center'>
      <Alert.Heading>Benvenuto Nella Nostra Libreria !</Alert.Heading>
      <p>
        Sfoglia il nostro catalogo e dicci cosa pensi dei nostri titoli editoriali !
      </p>
      <hr />
      <p className="mb-0 ">
       se hai bisogno di aiuto contatta i nostri addetti.
      </p>
    </Alert>
    </div>
  )
}

export default Welcome
