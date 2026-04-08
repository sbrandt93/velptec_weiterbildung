import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import PostList from '../PostList';

// Mock fetch
const mockPosts = [
  { id: 1, title: 'Test Post 1', body: 'Body 1', userId: 1 },
  { id: 2, title: 'Test Post 2', body: 'Body 2', userId: 1 },
];

describe('PostList', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('zeigt Ladezustand an', () => {
    vi.stubGlobal('fetch', vi.fn(() => new Promise(() => {})));
    
    render(
      <BrowserRouter>
        <PostList />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Lade Posts...')).toBeInTheDocument();
  });

  it('zeigt Posts nach erfolgreichem Fetch an', async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPosts),
      })
    ));

    render(
      <BrowserRouter>
        <PostList />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Post 1')).toBeInTheDocument();
      expect(screen.getByText('Test Post 2')).toBeInTheDocument();
    });
  });

  it('zeigt Fehlermeldung bei Fetch-Fehler an', async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ));

    render(
      <BrowserRouter>
        <PostList />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Fehler/)).toBeInTheDocument();
    });
  });

  it('zeigt Link zum Erstellen neuer Posts an', async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPosts),
      })
    ));

    render(
      <BrowserRouter>
        <PostList />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Neuen Post erstellen')).toBeInTheDocument();
    });
  });
});
