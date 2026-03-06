import { api } from "./axiosInstance";

export const getBookingById = (bookingId) => api.get(`/booking/${bookingId}`);
export const createReservation = (data) => api.post('', data);
export const updateBooking = (bookingId, data) => api.put(`/booking/${bookingId}`, data);
export const cancelBooking = (bookingId) => api.put(`/booking/${bookingId}/cancel`);

//Admin-only
export const getAllBookings = () => api.get('/booking');
export const deleteBooking = (bookingId) => api.delete(`/booking/${bookingId}`);