/* eslint-disable react/prop-types */
import NewsItem from '../NewsItem/news-item'
import './news.css'

export default function News({newsContent}) {
  return (
    <>
    <div className='news'>
        <span>{newsContent}</span>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
    </div>
    </>
  )
}
