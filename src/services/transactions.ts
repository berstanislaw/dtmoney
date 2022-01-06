import { Registry, Server } from "miragejs"
import { AnyFactories, AnyModels } from "miragejs/-types"

export default function(server : Server<Registry<AnyModels, AnyFactories>>) {
  server.get('/transactions', () => {
    return server.schema.all('transaction')
  })

  server.post('/transactions', (schema, request) => {
    const data = JSON.parse(request.requestBody)
    
    console.log(new Date())
    
    return schema.create('transaction', {
      ...data,
      createdAt: new Date(),
    })
  })
}

