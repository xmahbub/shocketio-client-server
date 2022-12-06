import {Server} from "socket.io"
const server = new Server(3000)


server.of("/test").on("connection", (socket) => {
    console.log("New client connected to /test");

})

server.on("connection", (socket) => {
    console.log("New client connected");
    
    
});

