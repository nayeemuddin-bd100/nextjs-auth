import { getSession } from "next-auth/client"



const secret = async (req, res) => {
    const session = await getSession({ req })
    

    if (session) {
        res.send({
            content: 'Welcome to the secret Page'
        })
    } else {
        res.send({
            error: 'You need to be signed in'
        })
    }


}

export default secret