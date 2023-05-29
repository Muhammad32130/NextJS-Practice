import { useEffect } from "react"

export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return {
        props: {
            posts: data
        }
    }
}

export default function trending({posts}){

//     const [posts, setPosts] = useState([])
// useEffect(()=>{
//     const fetchData = async()=>{
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const data = await res.json()
//         setPosts(data)
//     console.log(posts)
//     }
//     fetchData()
// },[])



return(
    <>
    These are the sports related
   {posts.map(post => {
    return <li key={post.id}>{post.title}</li>

})}
   
    </>
)
}