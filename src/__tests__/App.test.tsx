import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('updates elevatorRequests when a floor button is clicked', async () => {
    render(<App />);

    // Click a floor button
    fireEvent.click(screen.getByText('Floor 2'));

    // Wait for the interval to trigger
    await waitFor(() => screen.getByText('Elevator is on floor 2'));

    // Assert that the elevatorRequests state has changed
    expect(screen.getByText('Elevator is on floor 2')).toBeInTheDocument();
  });

  it('handles form submission and updates elevator data', () => {
    render(<App />);

    // Mock form input values
    const liftsInput = screen.getByLabelText('Number of Lifts') as HTMLInputElement;
    const floorsInput = screen.getByLabelText('Number of Floors') as HTMLInputElement;
    fireEvent.change(liftsInput, { target: { value: '2' } });
    fireEvent.change(floorsInput, { target: { value: '10' } });

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Assert that elevator data is updated
    expect(screen.getByText('Floor 0')).toBeInTheDocument();
    expect(screen.getByText('Elevator is on floor 0')).toBeInTheDocument();
  });
});
