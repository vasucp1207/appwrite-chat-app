import Link from "next/link";

export default function Home() {
  return (
    <div className="app">
      <div className="home-link"> <Link href='/signup'>Sign Up</Link> </div>
      <div className="home-link"> <Link href='/login'>Login</Link> </div>
    </div>
  )
}
