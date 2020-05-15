const makeGetItem = ({ Exception, getMeliItem, getMeliItemDescription }) => {
    return async (httpRequest) => {
        let httpResponse = {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 200,
            body: null
        }
        try {
            const id = httpRequest.params.id;
            if (!id) {
                throw new Exception(400, 'Es necesario enviar un id.');
            }

            item = await getMeliItem(id);
            itemDescription = await getMeliItemDescription(id);

            httpResponse.body = {
                ...item,
                ...itemDescription
            }
            
            // TODO:
            // transformItem(item.data);
        } catch (e) {
            httpResponse.body = { error: e.message };
            httpResponse.statusCode = e.code;
        } finally {
            return httpResponse;
        }
    }
}

module.exports = makeGetItem;