import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Props = {
    emailAddress: string,
    firstName: string,
    lastName: string,
    imageUrl: string,
    id: string
}
export async function createUser({ emailAddress, firstName, lastName, imageUrl, id }: Props) {
    try {
        const user = await prisma.user.create({
            data: {
                id: id,
                emailAddress: emailAddress,
                firstName: firstName,
                lastName: lastName,
                imageUrl: imageUrl,
            },
        });
        console.log(user);
        return user;
    } catch (error) {
        console.log(error);

    }
}


