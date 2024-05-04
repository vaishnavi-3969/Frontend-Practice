import http from 'node:http';

const server = http.createServer((req,res) => {
    res.statusCode(200)
    res.setHeader('Content-Type','text/plain')
    res.end('Hello world')
})

server.listen(4000, () => {
    console.log('Server is running at http://localhost:4000')
    
})


const string = data => `this is my name: ${data.name}`

