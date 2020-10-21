const  express = require('express')
const app = express();
const server= require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket=>{
    console.log(`Socket conectado: ${socket.id}`);
    socket.on('enviouMensagem', data=>{
        console.log('Mensagem Recebida:' +  data);
        socket.broadcast.emit('mensagemRecebida',data);
    });
});

server.listen(8000);

