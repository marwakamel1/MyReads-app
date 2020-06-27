import React from 'react'
import './App.css'
import BooksList from './BooksList.js'
import {Link} from 'react-router-dom'


class MyReads extends React.Component {
	
	render(){
      const {Library,UpdateBook} = this.props
	return(
    <div>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                 <div>
                <BooksList category={"Currently Reading"} shelf={"currentlyReading"} Library={Library} UpdateBook={UpdateBook}/>
              </div>
              <div>
                <BooksList category={"Want to Read"} shelf={"wantToRead"} Library={Library}  UpdateBook={UpdateBook}/>
              </div>
              <div>
                <BooksList category={"Read"} shelf={"read"} Library={Library} UpdateBook={UpdateBook}/>
              </div>
            </div>
          </div>
          <div className="open-search" >
             <Link to ="/search" >Add a book</Link>
          </div>
    </div>
		)}
}

export default MyReads