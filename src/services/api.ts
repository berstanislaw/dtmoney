import axios from "axios"
import { createServer } from 'miragejs'

import transactionsRoutes from './transactions'

export const mirage = createServer({
  routes() {
    this.namespace = 'api'
    transactionsRoutes(this)
  }
})



export const api = axios.create({
  baseURL: 'http://localhost:3000/api',

})