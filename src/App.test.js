// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PredictCryonix title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PredictCryonix/i);
    expect(titleElement).toBeInTheDocument();
});
