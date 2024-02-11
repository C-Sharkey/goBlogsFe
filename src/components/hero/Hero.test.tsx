import { describe, expect, test } from 'vitest'
import { render } from "../../test-utils";
import { Hero } from './Hero';

describe('Hero', () => {
    test('Hero is rendered', () => {
        const { container } = render(<Hero />);
        const hero = container.querySelector("#hero");
        expect(hero).toBeDefined();
    })
    
    test('Hero should have image', () => {
        const { getByRole } = render(<Hero />);
        expect(getByRole("img")).toBeDefined();
    })

})