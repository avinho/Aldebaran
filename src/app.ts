import fastify from 'fastify'
import { clientsRoutes } from './routes/client'

export const app = fastify()

app.register(clientsRoutes, {
  prefix: '/clients',
})
