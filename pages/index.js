import Link from 'next/link'
export default function Home() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
    </div>
  )
}/**



import * as React from 'react'
import ReactDOM from 'react-dom'
import './components/styles.css'
import Stars from './components/Stars'
import Overlay from './components/Overlay'

ReactDOM.render(
  <Canvas camera={{ position: [0, 0, 1] }}>
    <Stars />
  </Canvas>,
  <Overlay />
)
*/
