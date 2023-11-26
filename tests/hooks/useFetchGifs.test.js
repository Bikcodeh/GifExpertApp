import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Tests useFetchGifs', () => { 
    test('should return initial state when it is called', () => { 
        const { result } = renderHook(() => useFetchGifs('one punch'));
        const { images, isLoading } = result.current;
        expect(isLoading).toBeTruthy();
        expect(images.length).toBe(0);
     });

     test('should return an images array state when it is called', async() => { 
        const { result } = renderHook(() => useFetchGifs('one punch'));
        await waitFor( 
            () => expect (result.current.images.length).toBeGreaterThan(0)
        )
        const { images, isLoading } = result.current;
        expect(isLoading).toBeFalsy();
        expect(images.length).toBeGreaterThan(0);
     });
 });