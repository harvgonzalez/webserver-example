
const http = require('http');

http.createServer( ( req, res ) => {

    console.log(req);

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, { 'Content-Type': 'application/csv' })

    res.write( 'Hola mundo')
    res.write(JSON.stringify( persona ))
    res.end()
})
.listen( 8080 );

console.log(('Escuchando el puerto'), 8080);