import { auth } from "@clerk/nextjs"
import { prisma } from "./db"

export const getUserByClerkID = async () => {
    const { userId } = auth()

    const user = await prisma.user.findFirstOrThrow({
        where: {
            clerkId: userId,
        },
    
    })
    return user
}