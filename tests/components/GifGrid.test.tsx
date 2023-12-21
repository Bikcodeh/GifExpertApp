import React from 'react';
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { GifInfo } from '../../src/interfaces';

jest.mock("../../src/hooks/useFetchGifs");

describe('Tests for GifGrid', () => { 
    const category = "One punch";
    test('should show loading when initial state', () => {
        (useFetchGifs as jest.Mock).mockReturnValue({
            gifs: [],
            isLoading: true
        });
        render(<GifGrid category={category} />)
        expect(screen.getByText("Loading..."));
        expect(screen.getByText(category));
     });

     test('should show items when images are retrieve from api', () => { 
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
        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2);   
      });
 });