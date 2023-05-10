/* eslint-disable react/prop-types */
import './banner.css'

export default function Banner({ bannerContent }) {
  return (
    <>
      <div className='banner'>
        <span>{bannerContent}</span>
      </div>
    </>
  )
}
