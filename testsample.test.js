var supertest = require('supertest')
const request = supertest('https://cic-catalogs-dev-app.azurewebsites.net/api/catalogs?lang=en-US')

it('test case1', async done =>{

    const response = await request.get('/api/catalogs/status=activated')
    console.log(response.body)
    done()
})