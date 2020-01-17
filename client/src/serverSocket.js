import openSocket from 'socket.io-client'
export const socket = openSocket(
    (process.env.NODE_ENV === 'development') ? 'localhost:8080' : '/'
)