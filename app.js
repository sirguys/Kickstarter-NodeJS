var http = require('http')
var server = http.createServer(myname)
server.listen(2000)

function myname(req, res) {
  if(req.url == '/') {
    res.writeHead(200,{'content-type': 'text/html'})
    res.write('<i>Welcome To My Website</i>')
  }else if(req.url == '/sirguys') {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<i>My name sirguys</i>')
  }else {
    res.writeHead(404,{'content-type': 'text/html'})
    res.write('<i>404 - not Found</i>')
  }
  res.writeHead(200,{'content-type': 'text/html'})
  res.write('Hello NodeJS')
  res.end
}
