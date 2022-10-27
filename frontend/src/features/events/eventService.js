import axios from 'axios'

const API_URL = '/api/events/'

// Create new event
const createEvent = async (eventData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, eventData, config)
console.log(response.data, eventData)
  return response.data
}

// Get user events
const getEvents = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }


  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete event
const deleteEvent = async (eventId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + eventId, config)

  return response.data
}
const updateEvent = async (eventId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + eventId, config)

  return response.data
}
const eventService = {
  createEvent,
  getEvents,
  deleteEvent,
  updateEvent
}

export default eventService
