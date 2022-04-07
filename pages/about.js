import Link from 'next/link'

export function HomeLink() {
  return (
    <Link href="/" as={process.env.BACKEND_URL + '/'} >
      <a>Home</a>
    </Link>
  )
}

export function AboutLink() {
  return (
    <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
      <a>About</a>
    </Link>
  )
}

export default function About() {
  return (
    <>
      <div>
        Hello World.{' '}
      </div>
      <div>
        <HomeLink>Home</HomeLink>
      </div>
    </>
  )
}
