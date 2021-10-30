import React from 'react';
import ReactDom from 'react-dom';
// CSS 
import './index.css';

function BookList() {
  return (<section className="booklist">
    <Book />

  </section>);

}

const Author = 'Author name';
const Book = () => {
  const title = 'A title of the book 5sdsd';
  return <article className="book">
    <img src="https://images-na.ssl-images-amazon.com/images/I/71BTth-z7iL._AC_UL127_SR127,127_.jpg" alt="" />
    <h1>{title}</h1>
    <h4 >{Author.toUpperCase()}</h4>
    <p>{6 + 6}</p>
  </article>
}

ReactDom.render(<BookList />, document.getElementById('root'))
