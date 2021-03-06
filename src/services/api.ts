import axios from "axios"
import { createServer, Model } from 'miragejs'

import transactionsRoutes from './transactions'

export const mirage = createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-12-31 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          category: 'Casa',
          type: 'withdraw',
          amount: 6000,
          createdAt: new Date('2021-12-31 09:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'
    transactionsRoutes(this)
  }
})



export const api = axios.create({
  baseURL: 'http://localhost:3000/api',

})