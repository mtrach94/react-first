/* eslint-disable react/prop-types */
import Logo from '../Logo/logo'
import Nav from '../Nav/nav'
import './blog-header.css'

export default function BlogHeader({headerContent}) {
  return (
    <>
    <div className='header'>
     <Logo></Logo>
     <span>{headerContent}</span>
     <div className='nav'>
      <Nav></Nav>
      <Nav></Nav>
      <Nav></Nav>
      <Nav></Nav>
      <Nav></Nav>
     </div>
    </div>
    </>
  )
}