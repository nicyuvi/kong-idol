import { UserButton } from '@clerk/nextjs'

const Home = async () => {
  return (
    <div className="h-screen">
      <h1> public home page</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default Home
