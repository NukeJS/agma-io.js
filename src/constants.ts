import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://agma.io'
})

export const regions = ['EU', 'NA', 'AS'];