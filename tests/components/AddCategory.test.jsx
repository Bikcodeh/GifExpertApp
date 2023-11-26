import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';
describe('Add Category tests', () => {
    test('should change value in the input', () => { 
        render(<AddCategory onNewCategory={ () => {}} />)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' }});
        expect(input.placeholder).toBe('Search gifs');
     })

     test('should fire onSubmit', () => { 
        const inputValue = "Saitama";
        render(<AddCategory onNewCategory={ () => {}} />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue }});
        fireEvent.submit(form);
        expect(input.value).toBe('');
      })
});