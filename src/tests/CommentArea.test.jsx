//Verifica che il componente CommentArea venga renderizzato correttamente.

import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import BookList from '../components/BookList'
import libri from '../data/fantasy.json'

// Mock dei componenti per isolare il test
vi.mock('../components/SingleBook', () => ({
  default: ({ book, cambiaAsin }) => (
    <div data-testid="single-book" onClick={() => cambiaAsin(book.asin)}>
      {book.title}
    </div>  // Aggiunto onClick per simulare il cambio dell'ASIN
  )
}))

vi.mock('../components/CommentArea', () => ({
  default: ({ asin }) => <div data-testid="comment-area">CommentArea for ASIN: {asin}</div>  // Mock per CommentArea
}))

describe('BookList Component', () => {
  it('renders CommentArea correctly when ASIN is set', () => {
    render(<BookList arrayOfBooks={libri} />)

    // Simula il clic sul primo libro per impostare l'ASIN
    const firstBook = screen.getByText(libri[0].title)
    fireEvent.click(firstBook)

    // Verifica che CommentArea venga renderizzato con l'ASIN corretto
    const commentArea = screen.getByTestId('comment-area')
    expect(commentArea).toBeInTheDocument()
    expect(commentArea).toHaveTextContent(`CommentArea for ASIN: ${libri[0].asin}`)
  })
})
