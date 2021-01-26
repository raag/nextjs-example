import { IncomingMessage, ServerResponse } from 'http'

import DB from '@database'

const allAvocados = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const db = new DB()
  const avocados = await db.getAll()
  const length = avocados.length
  response.statusCode = 200
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify({ data: avocados, length }))
}

export default allAvocados
