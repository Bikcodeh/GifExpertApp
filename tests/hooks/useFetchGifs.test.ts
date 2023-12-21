import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Tests useFetchGifs', () => { 
    test('should return initial state when it is called', () => { 
        const { result } = renderHook(() => useFetchGifs('one punch'));
        const { gifs, isLoading } = result.current;
        expect(isLoading).toBeTruthy();
        expect(gifs.length).toBe(0);
     });

     test('should return an images array state when it is called', async() => { 
        const { result } = renderHook(() => useFetchGifs('one punch'));
        await waitFor( 
            () => expect (result.current.gifs.length).toBeGreaterThan(0)
        )
        const { gifs, isLoading } = result.current;
        expect(isLoading).toBeFalsy();
        expect(gifs.length).toBeGreaterThan(0);
     });
 });