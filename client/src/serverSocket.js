import openSocket from 'socket.io-client'
export const socket = openSocket(process.env.PORT ? '/' : 'localhost:8080')