const Post: React.FC<{
  posts: any
}> = ({ posts }) => {
  return (
    <ul>
      {posts.map((item: any, j: number) => (
        <li key={j}>{JSON.stringify(item)}</li>
      ))}
    </ul>
  )
}

export default Post
