import { describe, expect, test } from 'vitest'
import { render, screen } from "../../test-utils";
import { Navbar } from './Navbar';

describe('Navbar', () => {
    test('Navbar is rendered', () => {
        const { container } = render(<Navbar />);
        const navbar = container.querySelector("#navbar");
        expect(navbar).toBeDefined();
    })
    test('Logo section is rendered', () => {
        render(<Navbar />);
        expect(screen.getByRole("link", {name: /blogs/i})).toBeDefined();
    })
    test('Nav section is rendered', () => {
        render(<Navbar />);
        expect(screen.getByRole("navigation")).toBeDefined();
    })
    test('Sign in / sign up section is rendered', () => {
        render(<Navbar />);
        expect(screen.getByRole("button", {name: /sign in/i})).toBeDefined();
        expect(screen.getByRole("button", {name: /sign up/i})).toBeDefined();
    })
    test('All nav buttons are rendered', () => {
        render(<Navbar />);
        expect(screen.getAllByRole("button")).toHaveLength(3);

    })
})