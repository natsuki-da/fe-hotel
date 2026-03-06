import { api } from "./axiosInstance"

//Hotel-users
export const getAllRooms = () => api.get('/room');
export const getRoomById = (roomId) => api.get(`/room/${roomId}`)

//Admin-only
export const createRoom = (data) => api.post('/room', data);
export const updateRoom = (roomId, data) => api.put(`/room/${roomId}`, data);
export const deleteRoom = (roomId) => api.delete(`/room/${roomId}`)