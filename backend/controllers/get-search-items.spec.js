const { getSearchItems } = require('./index');

describe('Testing get-item controller', () => {

    it('Empty search', async () => {
        const response = await getSearchItems({
            query: {}
        });
        expect(response.statusCode).toBe(400);
    });

    it('Request should have 4 results', async () => {
        const response = await getSearchItems({
            query: {
                q: 'iphone'
            }
        });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('items');
        expect(response.body).toHaveProperty('categories');
        expect(response.body.items).toHaveLength(4);
    });

});