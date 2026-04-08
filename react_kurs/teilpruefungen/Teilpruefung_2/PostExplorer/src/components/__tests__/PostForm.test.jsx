import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import PostForm from '../PostForm';

describe('PostForm', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('zeigt Formularfelder an', () => {
    render(
      <BrowserRouter>
        <PostForm />
      </BrowserRouter>
    );
    
    expect(screen.getByLabelText('Titel')).toBeInTheDocument();
    expect(screen.getByLabelText('Inhalt')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Post erstellen' })).toBeInTheDocument();
  });

  it('zeigt Validierungsfehler bei leerem Titel', async () => {
    render(
      <BrowserRouter>
        <PostForm />
      </BrowserRouter>
    );
    
    const submitButton = screen.getByRole('button', { name: 'Post erstellen' });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Bitte gib einen Titel ein')).toBeInTheDocument();
    });
  });

  it('zeigt Validierungsfehler bei leerem Inhalt', async () => {
    render(
      <BrowserRouter>
        <PostForm />
      </BrowserRouter>
    );
    
    const titleInput = screen.getByLabelText('Titel');
    fireEvent.change(titleInput, { target: { value: 'Test Titel' } });
    
    const submitButton = screen.getByRole('button', { name: 'Post erstellen' });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Bitte gib einen Inhalt ein')).toBeInTheDocument();
    });
  });

  it('sendet Post erfolgreich', async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ id: 101, title: 'Test', body: 'Test Body', userId: 1 }),
      })
    ));

    render(
      <BrowserRouter>
        <PostForm />
      </BrowserRouter>
    );
    
    const titleInput = screen.getByLabelText('Titel');
    const bodyInput = screen.getByLabelText('Inhalt');
    
    fireEvent.change(titleInput, { target: { value: 'Neuer Post' } });
    fireEvent.change(bodyInput, { target: { value: 'Post Inhalt' } });
    
    const submitButton = screen.getByRole('button', { name: 'Post erstellen' });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Post erfolgreich erstellt!')).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
    );
  });

  it('zeigt Fehlermeldung bei fehlgeschlagenem Senden', async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ));

    render(
      <BrowserRouter>
        <PostForm />
      </BrowserRouter>
    );
    
    const titleInput = screen.getByLabelText('Titel');
    const bodyInput = screen.getByLabelText('Inhalt');
    
    fireEvent.change(titleInput, { target: { value: 'Test' } });
    fireEvent.change(bodyInput, { target: { value: 'Test Body' } });
    
    const submitButton = screen.getByRole('button', { name: 'Post erstellen' });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Fehler beim Erstellen des Posts')).toBeInTheDocument();
    });
  });
});
