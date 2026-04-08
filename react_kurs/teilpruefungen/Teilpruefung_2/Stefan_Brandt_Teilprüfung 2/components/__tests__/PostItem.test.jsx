import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import PostItem from '../PostItem';

const mockPost = {
  id: 1,
  title: 'Test Post Titel',
  body: 'Test Post Inhalt',
  userId: 1,
};

describe('PostItem', () => {
  it('zeigt Post-Titel an', () => {
    render(
      <BrowserRouter>
        <PostItem post={mockPost} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Test Post Titel')).toBeInTheDocument();
  });

  it('zeigt Post-Body an', () => {
    render(
      <BrowserRouter>
        <PostItem post={mockPost} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Test Post Inhalt')).toBeInTheDocument();
  });

  it('enthält Link zur Detailseite', () => {
    render(
      <BrowserRouter>
        <PostItem post={mockPost} />
      </BrowserRouter>
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/posts/1');
  });
});
