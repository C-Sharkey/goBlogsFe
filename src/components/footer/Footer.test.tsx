import { describe, expect, test } from 'vitest'
import { render } from "../../test-utils";
import { Footer } from './Footer';

describe('Footer', () => {
    test('Footer is rendered', () => {
        const { container } = render(<Footer />);
        const footer = container.querySelector("#footer");
        expect(footer).toBeDefined();
    })

})