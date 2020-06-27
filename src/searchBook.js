import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import Book from './Book.js'
class SearchBook extends React.Component{
      state={query:'',list:[]}
      
      handelSearch = (query) => {
      this.setState(()=>({
        query: query
      }))
      	if (query !== ''){
        BooksAPI.search(query)
         .then((list) => {
        this.setState(()=>({list:list}))
      })
     }
        else {
        	this.setState({list:[]})
        }
      }
 render(){
 	 const {query,list}= this.state
 	 const {Library}=this.props
 	return(
         <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" value ={query} onChange={(event)=>(this.handelSearch(event.target.value))} placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              {Array.isArray(list) && list.length >0 && (
              <ol className="books-grid">
                 {list.map((book,index)=>(<Book 
                 	key={book.id} 
                 	book={book} 
                 	UpdateBook={this.props.UpdateBook}
                    shelf={Library.some(b =>(b.id === book.id))?
                    	Library[Library.findIndex(e =>(e.id===book.id))].shelf:"none"}
                 	/>))}
              </ol>
                )
              }
            </div>
          </div>
 		)
 }
}

export default SearchBook