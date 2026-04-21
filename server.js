import Fastify from 'fastify'
import route from './routes.js'

const fastify = Fastify({
  logger: true
})

await route(fastify)

await fastify.listen({ port: 3000, host: '0.0.0.0' })