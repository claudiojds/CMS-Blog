import { Prisma } from "@prisma/client";

export type PostWirhUser = Prisma.PostGetPayload<{
    include: {
        user: true;
    }
}>