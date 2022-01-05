import { Registry, Server } from "miragejs"
import { AnyFactories, AnyModels } from "miragejs/-types"
import { mirage } from "./api"

export default function(server : Server<Registry<AnyModels, AnyFactories>>) {
  server.get('/transactions', () => {
    return [
      {
        id: 1,
        title: 'Transaction 1',
        amount: 400,
        type: 'withdraw',
        category: 'food',
        createdAt: new Date(),
      }
    ]
  })
}

