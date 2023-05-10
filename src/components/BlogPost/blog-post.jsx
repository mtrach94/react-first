/* eslint-disable react/prop-types */
import './blog-post.css'

export default function BlogPost({ blogPostHeader, content }) {

  return (
    <>
      <div className='blog-post'>
        <h5>{blogPostHeader}</h5>
        {content}
      </div>
    </>
  )
}
