import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { useEffect, useState } from 'react'
import { getProgramInstance } from '../utils/program'

const Index = () => {
  const wallet = useWallet()
  return (
    <>
      <h1>This is home page</h1>
      {wallet?.publicKey && <Data />}
    </>
  )
}

const Data = () => {
  const [posts, setPosts] = useState<any>([])
  const wallet = useWallet()
  const connection = useConnection()
  //   @ts-ignore
  const program = getProgramInstance(connection.connection, wallet)

  useEffect(() => {
    const displayPosts = async () => {
      const posts = await program.account.blogAccount.all()
      setPosts(posts)
    }

    if (program) displayPosts()
  }, [program])

  return (
    <>
      <h1>This is DATA</h1>
      <ul>
        {posts.map((item: any, j: number) => (
          <li key={j}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </>
  )
}

export default Index
