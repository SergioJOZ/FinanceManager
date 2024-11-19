import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import {z} from 'zod'
import { zValidator } from '@hono/zod-validator'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'

import authors from './authors'
import books from './books'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
    return c.json({ hello: 'world'})
})


export const GET = handle(app)
export const POST = handle(app)