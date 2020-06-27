import React from 'react'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'


class BooksList extends React.Component {

	handel =(bookID)=>{
          BooksAPI.get(bookID)
	       .then ((book)=>(console.log( book)))             	    
	}
	render(){
		 const {category,shelf,Library,UpdateBook} = this.props
		return(
			<div className="bookshelf">
                <h2 className="bookshelf-title">{category}</h2>
                <div className="bookshelf-books">
                   <ol className="books-grid">
                       {Library.filter((book)=>(book.shelf===shelf)).map((filtred)=>(
                          <Book key={filtred.id} 
                       book={filtred} UpdateBook={UpdateBook} shelf={shelf}/>
                       	))}
                    </ol>
                </div>
            </div>
              )
	}
}

export default BooksList