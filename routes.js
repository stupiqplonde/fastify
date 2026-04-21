const fastifyStatic = require('@fastify/static')

module.exports = async function routes(fastify) {
  fastify.register(fastifyStatic, {
    root: __dirname
  })

  fastify.get('/', (request, reply) => {
    reply.sendFile('index.html')
  })

  fastify.post('/api/text', async (request, reply) => {
    const { text } = request.body
    const result = text
    return { success: true, message: result }
  })
}