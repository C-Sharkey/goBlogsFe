import { describe, expect, test } from 'vitest'
import { render, screen } from "@testing-library/react";
import Header from './Header'

describe('Header', () => {
    test('header is rendered', () => {
        const { container } = render(<Header />);
        screen.debug();
        const header = container.querySelector("#header");
        expect(header).toBeDefined();
    })
})