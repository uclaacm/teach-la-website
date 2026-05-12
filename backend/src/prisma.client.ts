import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'

// 1. Setup the adapter
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
// 2. Initialize Prisma with the adapter
const prisma = new PrismaClient({ adapter })

// 3. export glopal prisma api
export default prisma