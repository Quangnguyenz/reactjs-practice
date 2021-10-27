import React from 'react';
import ReactDom from 'react-dom';
// CSS 
import './index.css';

function BookList() {
  return (<section className="booklist">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>);

}

const Book = () => {
  return <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
}



const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/71BTth-z7iL._AC_UL127_SR127,127_.jpg" alt="" />

const Title = () => <h1>A title of the book 5</h1>

const Author = () => <h4 style={{ color: '#618d98', fontSize: "0.75rem", marginTop: '0.25rem' }}>Author name</h4>

ReactDom.render(<BookList />, document.getElementById('root'))
