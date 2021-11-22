import fetch from 'node-fetch'


exports.handler = async (event, context) => {
    const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
    const q = event.queryStringParameters.word;
    const response = await fetch(`${BASE_URL}${q}`);
    const data = await response.json();
    if (response.status === 404) {
        return {
            statusCode: 404,
            body: JSON.stringify(data)
        }
    }
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
    
    
};
          