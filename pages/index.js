import { Overlay } from './overlay'
import { AboutLink } from './about'

export default function Home() {
  return (
    <>
      <Overlay />
      <div>
        Hello World.{' '}
      </div>
      <div>
        <AboutLink>About</AboutLink>
      </div>
      <Overlay />
    </>
  )
}



//     <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
//     <a>About</a>
//   </Link>
// </div>
//   )
// }/**



// import * as React from 'react'
// import ReactDOM from 'react-dom'
// import './components/styles.css'
// import Stars from './components/Stars'
// import Overlay from './components/Overlay'

// ReactDOM.render(
//   <Canvas camera={{ position: [0, 0, 1] }}>
//     <Stars />
//   </Canvas>,
//   <Overlay />
// )
//   * /
