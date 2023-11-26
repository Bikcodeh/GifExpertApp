import { render } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('GigGridItem Test', () => {
    const title = "Saitama";
    const url   = "http://one-punch.com/saitama.jpg";

    test("Match with snapshot", () => {
        const { container } = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
});