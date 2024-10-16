import { createUser } from '@/services/userService'

export const POST = async (req: Request) => {
    const jsonData = await req.json();
    const data = jsonData.data;
    const emailAddress = data.email_addresses?.[0]?.email_address || '';
    const firstName = data.first_name || '';
    const lastName = data.last_name || '';
    const imageUrl = data.image_url || '';
    const id = data.id || '';

    console.log(emailAddress)
    console.log(firstName)
    console.log(lastName)
    console.log(imageUrl)
    console.log(id)

    try {
        await createUser({
            emailAddress: emailAddress,
            firstName: firstName,
            lastName: lastName,
            imageUrl: imageUrl,
            id: id
        });

        console.log('user created')
    } catch {
        console.log('user created error')
    }


    return new Response('Webhook rêcived', { status: 200 })
}