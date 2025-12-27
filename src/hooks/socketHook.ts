import { io } from 'socket.io-client'
const BASEURL = import.meta.env.VITE_API_URL

export default io(BASEURL, { 
  withCredentials: true, 
  autoConnect: true,
  transports: ['polling', 'websocket'], 
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
})