import React from 'react';
import { screen, act } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';
import App, { About } from './App';

describe('testes da aplicação do course', () => {
  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading', {
      name: 'Você está na página Sobre',
    });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('deve testar uma rota não existente e renderizar o noMatch', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/asdasdas');
    });

    const notFound = screen.getByRole('heading', {
      name: 'Página não encontrada',
    });

    expect(notFound).toBeInTheDocument();
  });

  it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);

    const aboutTitle = screen.getByRole('heading', {
      name: 'Você está na página Sobre',
    });
    expect(aboutTitle).toBeInTheDocument();
  });
});
