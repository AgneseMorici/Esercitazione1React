import { render, screen } from '@testing-library/react';
import App from './App';
import * as React from  "react";

export const FormRicerca = () => {

    return(
        //className per css
        <div>
            FormRicerca
        </div>
    );
}



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


