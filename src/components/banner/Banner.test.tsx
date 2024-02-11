import { describe, expect, test } from 'vitest'
import { render } from "../../test-utils";
import { Banner } from './Banner';

describe('Banner', () => {
    test('Banner is rendered', () => {
        const { container } = render(<Banner />);
        const banner = container.querySelector("#banner");
        expect(banner).toBeDefined();
    })

})