import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
          <img src="/images/brand_logo.png" alt="#" />
          <ul>
            <li><a href="#"></a>MENU</li>
            <li><a href="#"></a>LOCATION</li>
            <li><a href="#"></a>ABOUT</li>
            <li><a href="#"></a>CONTACT</li>
          </ul>

          <button>Login</button>
        </nav>

        <main>
          <div className="content">
            <div>
              <h1 id='h1'>
                YOUR FEET DESERVE THE BEST
              </h1>
              <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
              </p>

              <button>
                Shop Now
              </button>

              <button className='button'>
                Category
              </button>

              <h6>
                Also available at
              </h6>

              <div>
                <img src="/images/shops.png" alt="" />
              </div>
            </div>
            <div className='shoe-img'>
              <img src="/images/shoe_image.png" alt="" id='shoe-img'/>
            </div>
          </div>
        </main>


      </div>
        
    </>
  )
}

export default App
