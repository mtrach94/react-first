import { useState } from 'react'
import './App.css'
import Blog from './components/Blog/blog'
import News from './components/News/news'
import Banner from './components/Banner/banner'
import BlogHeader from './components/BlogHeader/blog-header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BlogHeader headerContent={'Blog name'}></BlogHeader>
      <Banner bannerContent={'Full-width banner image'}></Banner>
      <div className='main'>
        <Blog blogContent={'Blog'}></Blog>
        <News newsContent={'News'}></News>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
