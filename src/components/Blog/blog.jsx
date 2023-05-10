/* eslint-disable react/prop-types */
import BlogPost from '../BlogPost/blog-post'
import './blog.css'

export default function Blog({blogContent}) {
  return (
    <>
    <div className='blog'>
      <span>{blogContent}</span>
      <BlogPost></BlogPost>
      <BlogPost></BlogPost>
      <BlogPost></BlogPost>
      <BlogPost></BlogPost>
    </div>
    </>
  )
}
