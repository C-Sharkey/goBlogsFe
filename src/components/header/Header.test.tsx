import { describe, expect, test } from 'vitest'
import { render } from "../../test-utils";
import Header from './Header'

describe('Header', () => {
    test('header is rendered', () => {
        const { container } = render(<Header />);
        const header = container.querySelector("#header");
        expect(header).toBeDefined();
    })
})