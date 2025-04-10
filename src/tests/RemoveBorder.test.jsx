//Verifica che, cliccando su di un secondo libro dopo il primo, il bordo del primo libro ritorni normale.

import { render, screen, fireEvent } from '@testing-library/react';
import SingleBook from '../components/SingleBook';

// Mock della funzione cambiaAsin
jest.mock('jest', () => ({
  fn: jest.fn(),
}));

describe('SingleBook Component', () => {
  test('cliccando su un secondo libro, il bordo del primo ritorna normale', () => {
    const book1 = { asin: '1', title: 'Book 1', img: 'img1.jpg', category: 'Fiction', price: 10 };
    const book2 = { asin: '2', title: 'Book 2', img: 'img2.jpg', category: 'Non-Fiction', price: 15 };

    // Renderizza il primo libro
    render(
      <>
        <SingleBook book={book1} asinLibroSelezionato="1" cambiaAsin={jest.fn()} />
        <SingleBook book={book2} asinLibroSelezionato="" cambiaAsin={jest.fn()} />
      </>
    );

    // Trova il primo libro e il secondo libro
    const firstBookCard = screen.getAllByRole('img')[0].parentElement.parentElement; // Card del primo libro
    const secondBookCard = screen.getAllByRole('img')[1].parentElement.parentElement; // Card del secondo libro

    // Verifica che il primo libro abbia un bordo rosso (selezionato)
    expect(firstBookCard).toHaveStyle('border: 3px solid red');

    // Clicca sul secondo libro
    fireEvent.click(secondBookCard);

    // Verifica che il bordo del primo libro torni normale (border: 1px solid gray)
    expect(firstBookCard).toHaveStyle('border: 1px solid gray');
  });
});

