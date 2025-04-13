// Arquivo criado do alth-js para criar instancias com a chave de segurança

import { PrismaClient } from "@prisma/client"
 
// Verificando a instacia do Prisma
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

//  Usar a instacia global caso não tenha criar a instancia "new PrismaClient()""
const prisma = globalForPrisma.prisma || new PrismaClient()

//Usando "export default prisma" evita que o prisma crie conexões excecivas com o banco pesando na aplicação 
export default prisma
 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

