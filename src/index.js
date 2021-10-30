import React from 'react';
import ReactDom from 'react-dom';
// CSS 
import './index.css';
// set up vars 
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71BTth-z7iL._AC_UL127_SR127,127_.jpg",
    title: 'A demo book 1',
    author: 'Jun Yuu',
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/61I1N9jpTGL._AC_UL127_SR127,127_.jpg",
    title: 'A demo book 2',
    author: 'Chang Yin',
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/61I1N9jpTGL._AC_UL127_SR127,127_.jpg",
    title: 'A demo book 3',
    author: 'Lapag',
  }]

function BookList() {
  return (<section className="booklist">
    {books.map((book) => {
      const { img, title, author } = book
      return (
        <Book book={book}></Book>
      )
    })}
  </section>);

}

const Book = (props) => {
  const { img, title, author } = props.book

  return <article className="book">
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4 >{author}</h4>
  </article>
}

ReactDom.render(<BookList />, document.getElementById('root'))
