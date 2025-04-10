//Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.

import { render, screen } from '@testing-library/react'  // Funzioni per renderizzare il componente e fare l'assertion
import { describe, it, expect, vi } from 'vitest'  // Funzioni per organizzare e scrivere i test con Vitest
import BookList from '../components/BookList'  // Componente da testare
import libri from '../data/fantasy.json'  // Dati che saranno passati al componente per comparare

// Mock del componente SingleBook per evitare di renderizzare la logica interna del componente durante il test
vi.mock('../components/SingleBook', () => ({
  default: ({ book }) => <div data-testid="single-book">{book.title}</div>  // Mock che restituisce il titolo del libro
}))

// Descrizione del gruppo di test per il componente BookList
describe('BookList Component', () => {
  // Test per verificare che vengano renderizzate tante card quante sono le voci nel JSON
  it('renders exactly one card per book in the JSON array', () => {
    // Rendering del componente BookList, passando l'array di libri come prop
    render(<BookList arrayOfBooks={libri} />)

    // Recupero di tutti gli elementi che rappresentano una card del libro tramite il testID
    const cards = screen.getAllByTestId('single-book')

    // Verifica che il numero di card renderizzate corrisponda al numero di libri nel JSON
    expect(cards.length).toBe(libri.length) 
  })
})
