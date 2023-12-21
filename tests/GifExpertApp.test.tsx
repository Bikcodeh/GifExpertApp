import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';
import { useFetchGifs } from '../src/hooks/useFetchGifs';
import { GifInfo } from '../src/interfaces';

jest.mock("../src/hooks/useFetchGifs");

describe('Tests for GifExpertApp', () => { 

    test('should show items after initialized', () => { 
        const gifs: GifInfo[] = [
            {
                id: "BAC",
                title: "test",
                url: "https://imagen.jpg"
            },
            {
                id: "123",
                title: "test",
                url: "https://imagen.jpg"
            }
        ];
        (useFetchGifs as jest.Mock).mockReturnValue({
            gifs: gifs,
            isLoading: false
        });
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        const categories = screen.getAllByRole('heading');
        fireEvent.input(input, { target: { value: "Saitama" } });
        fireEvent.submit(form);
        expect(categories.length).toBe(2);
     });


    test('should not add repeated category', () => { 
        const gifs: GifInfo[] = [
            {
                id: "BAC",
                title: "test",
                url: "https://imagen.jpg"
            },
            {
                id: "123",
                title: "test",
                url: "https://imagen.jpg"
            }
        ];
        (useFetchGifs as jest.Mock).mockReturnValue({
            gifs: gifs,
            isLoading: false
        });
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        const categories = screen.getAllByRole('heading');
        fireEvent.input(input, { target: { value: "Saitama" } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: "Saitama" } });
        fireEvent.submit(form);
        expect(categories.length).toBe(2);
        screen.debug()
     });


    test('should add new repeated category', () => { 
        const gifs: GifInfo[] = [
            {
                id: "BAC",
                title: "test",
                url: "https://imagen.jpg"
            },
            {
                id: "123",
                title: "test",
                url: "https://imagen.jpg"
            }
        ];
        (useFetchGifs as jest.Mock).mockReturnValue({
            gifs: gifs,
            isLoading: false
        });
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: "Saitama" } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: "Mob" } });
        fireEvent.submit(form);
        const categories = screen.getAllByRole('heading');
        expect(categories.length).toBe(4);
     });
 });