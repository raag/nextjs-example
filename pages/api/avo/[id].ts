import { NextApiRequest, NextApiResponse } from 'next'

import DB from '@database'

const getById = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()
  const id = request.query.id as string
  const avocado = await db.getById(id)
  response.statusCode = 200
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(avocado))
}

export default getById
