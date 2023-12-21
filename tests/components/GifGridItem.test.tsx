import React from 'react';
import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";
import { GifInfo } from '../../src/interfaces';

describe('GigGridItem Test', () => {

    const gif: GifInfo = {
        id: '1',
        title: 'sdsada',
        url: 'http://one-punch.com/saitama.jpg'
    };

    test("Match with snapshot", () => {
        const { container } = render(<GifGridItem gif={gif} />);
        expect(container).toMatchSnapshot();
    });

    test("img component should display correctly", () => {
        render(<GifGridItem gif={gif} />);
        const { src, alt } = screen.getByRole('img') as HTMLImageElement;
        expect(src).toBe(gif.url);
        expect(alt).toBe(gif.title);
    });

    test("title exists and it's displayed", () => {
        render(<GifGridItem gif={gif} />);
        expect(screen.getByText(gif.title)).toBeTruthy();
    });
});