import React from 'react';
import ReactDom from 'react-dom';

function BookList() {
  return (<section>
    <Book />
  </section>)

}

const Book = () => {
  return <article>
    <Image />
    <Title />
    <Author />
  </article>
}



const Image = () => <img src="https://media.istockphoto.com/photos/school-picture-id1016131800?b=1&k=20&m=1016131800&s=170667a&w=0&h=imifkJTvS-4b8cvOhVNlCqqvZlwI4S-xCKZ6Oxbla4Q=" alt="" />

const Title = () => <h1>A title of the book 5</h1>

const Author = () => <h1>Author name</h1>

ReactDom.render(<BookList />, document.getElementById('root'))
