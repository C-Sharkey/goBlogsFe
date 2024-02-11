import { describe, expect, test } from 'vitest'
import { render, screen } from "@testing-library/react";
import Navbar from './Navbar'

describe('Navbar', () => {
    test('Navbar is rendered', () => {
        const { container } = render(<Navbar />);
        screen.debug();
        const navbar = container.querySelector("#navbar");
        expect(navbar).toBeDefined();
    })
    test('Logo section is rendered', () => {
        render(<Navbar />);
        screen.debug();
        expect(screen.getByText(/logoSection/i)).toBeDefined();
    })
    test('Nav section is rendered', () => {
        render(<Navbar />);
        screen.debug();
        expect(screen.getByRole("navigation")).toBeDefined();
    })
    test('Sign in / sign up section is rendered', () => {
        render(<Navbar />);
        screen.debug();
        expect(screen.getAllByRole("button")).toHaveLength(2);
        expect(screen.getByRole("button", {name: /sign in/i})).toBeDefined();
        expect(screen.getByRole("button", {name: /sign up/i})).toBeDefined();
    })
})