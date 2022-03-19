import sut from './index';

describe("Hello function", () => {
    it("can be imported", async () => {
        const context = {} as any;
        const request = {} as any;

        await sut(context, request);

        expect(context.res.status).toBe(200);
        expect(context.res.body).toBe(JSON.stringify({ hello: "world" }));
    });
})