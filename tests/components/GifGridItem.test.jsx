import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('GigGridItem Test', () => {
    const title = "Saitama";
    const url   = "http://one-punch.com/saitama.jpg";

    test("Match with snapshot", () => {
        const { container } = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test("img component should display correctly", () => {
        render(<GifGridItem title={title} url={url} />);
        //screen.debug()
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test("title exists and it's displayed", () => {
        render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});