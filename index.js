var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + 'public/index.html');
});

io.on('connection', function(socket){
  console.log('connected');
  
  
  socket.on('disconnect', function(){
    console.log('disconnected');
  });
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});