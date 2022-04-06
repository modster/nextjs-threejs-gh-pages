import Link from 'next/link'
export default function About() {
  const homeLink = <Link href="/" as={process.env.BACKEND_URL + '/'} ref={a.Home}><a ref={}/></Link>


  return (
    <div>
      <div>About</div>
      <div>
        Back to{' '}
        <Link href="/about" as={process.env.BACKEND_URL + '/about'}><a>About</a></Link>
      </div>
    </div>
  )
}
