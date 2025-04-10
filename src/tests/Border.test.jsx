//Verifica che, cliccando su un libro, il suo bordo cambi colore.

import { render, screen, fireEvent } from '@testing-library/react';
import SingleBook from '../components/SingleBook';
import { vi } from 'vitest';

describe('SingleBook Component', () => {
  it('dovrebbe cambiare il colore del bordo quando viene cliccato', () => {
    const book = {
      asin: '12345',
      title: 'Test Book',
      category: 'Fantasy',
      price: '10',
      img: 'test-image.jpg',
    };

    const cambiaAsin = vi.fn();

    // Renderizza il componente con asinLibroSelezionato vuoto inizialmente
    const { rerender } = render(
      <SingleBook 
        book={book} 
        asinLibroSelezionato=""  // Assicurati che il libro non sia selezionato inizialmente
        cambiaAsin={cambiaAsin} 
      />
    );

    const bookCard = screen.getByRole('img');  // Trova l'immagine del libro
    const cardDiv = bookCard.closest('div');  // Trova il div contenitore del libro

    // Verifica che il bordo sia grigio inizialmente
    expect(cardDiv).toHaveStyle('border: 1px solid gray');

    // Simula un clic sul libro per selezionarlo
    fireEvent.click(bookCard);

    // Verifica che la funzione cambiaAsin venga chiamata con l'asin corretto
    expect(cambiaAsin).toHaveBeenCalledWith('12345');

    // Rende nuovamente il componente con asinLibroSelezionato uguale all'asin
    rerender(
      <SingleBook 
        book={book} 
        asinLibroSelezionato="12345"  // Ora il libro dovrebbe essere selezionato
        cambiaAsin={cambiaAsin} 
      />
    );

    // Verifica che il bordo diventi rosso dopo il clic
    expect(cardDiv).toHaveStyle('border: 3px solid red');

    // Simula un altro clic per deselezionarlo
    fireEvent.click(bookCard);

    // Verifica che cambiaAsin venga chiamato con una stringa vuota
    expect(cambiaAsin).toHaveBeenCalledWith('');

    // Rende di nuovo il componente con asinLibroSelezionato vuoto
    rerender(
      <SingleBook 
        book={book} 
        asinLibroSelezionato=""  // Il libro non dovrebbe essere selezionato
        cambiaAsin={cambiaAsin} 
      />
    );

    // Verifica che il bordo torni grigio
    expect(cardDiv).toHaveStyle('border: 1px solid gray');
  });
});
