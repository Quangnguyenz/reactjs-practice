import React from 'react';
import ReactDom from 'react-dom';
// CSS 
import './index.css';
// set up vars 
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/71BTth-z7iL._AC_UL127_SR127,127_.jpg",
    title: 'A demo book 1',
    author: 'Jun Yuu',
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/61I1N9jpTGL._AC_UL127_SR127,127_.jpg",
    title: 'A demo book 2',
    author: 'Chang Yin',
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/61I1N9jpTGL._AC_UL127_SR127,127_.jpg",
    title: 'A demo book 3',
    author: 'Lapag',
  }]

function BookList() {
  return (<section className="booklist">
    {books.map((book) => {
      return (
        <Book key={book.id} {...book}></Book>
      )
    })}
  </section>);

}

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    alert("Hello")
    console.log(e.target)
  }

  const complexExample = (author) => {
    console.log(author)
  }

  return <article className="book" onMouseOver={() => {
    console.log(title)
  }}>
    <img src={img} alt="" />
    <h1 onClick={() => { console.log(title) }}>{title}</h1>
    <h4 >{author}</h4>
    <button type="button" onClick={clickHandler}>A button</button>
    <button type="button" onClick={() => complexExample(author)}>More complex example</button>
  </article>
}

ReactDom.render(<BookList />, document.getElementById('root'))
