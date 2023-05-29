import { useRouter } from "next/router"
export default function User(){
    const router = useRouter()
    return(
        <h1>
            this is the user {router.query.username}
        </h1>
    )
}