import { it, describe, expect, beforeAll } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {

    beforeAll(() => {
        global.fetch = (info: RequestInfo | URL, init?: RequestInit) => {
            return Promise.resolve({
                json: () => Promise.resolve({
                    hello: "world"
                })
            } as any);
        };
    });

    it("component can render", async () => {
        render(<App></App>);

        const header = screen.getByRole("header");

        await act(async () => {
            await wait(50); // Wait for useEffect to fire.
        });

        expect(header.innerHTML).toContain("Hello Vite + React!");
    });
});

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));