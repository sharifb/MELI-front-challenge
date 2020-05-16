const { getItem, getSearchItems } = require('./index');

describe('Testing get-item controller', () => {

    it('Request with fake id', async () => {
        const requestWithFakeId = {
            params: {
                id: 'sharif123'
            }
        };
        const response = await getItem(requestWithFakeId);
        expect(response.statusCode).toBe(404);
    });

    it('Request without id', async () => {
        const requestWithoutId = {
            params: {}
        };
        const response = await getItem(requestWithoutId);
        expect(response.statusCode).toBe(400);
    });

    it('Correct request', async () => {
        const searchedItems = await getSearchItems({
            query: {
                q: 'iphone'
            }
        });
        const correctRequest = {
            params: {
                id: searchedItems.body.items[0].id
            }
        }
        const response = await getItem(correctRequest);
        const expectedKeys = ['id', 'title', 'price', 'picture', 'condition', 'free_shipping', 'sold_quantity', 'description'];
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('item');
        expect(Object.keys(response.body.item)).toEqual(expect.arrayContaining(expectedKeys));
    });

});