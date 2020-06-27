import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBook from './searchBook.js'
import MyReads from './MyReads.js'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
class BooksApp extends React.Component {
  state={Library:[]}  
  
    componentDidMount() {
    BooksAPI.getAll()
      .then((Library) => {
        this.setState(() => ({
          Library
        }))
      })
    }
     UpdateBook =(book,category)=>{
     BooksAPI.update(book,category)
      .then((Library)=>{
        console.log(Library)
      }
        )
      if(this.state.Library.some(b => (b.id ===book.id)))
      { 
        const updated = this.state.Library.map((b)=>{
          if(b.id === book.id) {b.shelf=category}
          return b 
        }
        )
        this.setState({Library:updated})
      }
      else {

      BooksAPI.getAll()
      .then((Library) => {
        this.setState(() => ({
          Library
        }))
      })
      }
    }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(<MyReads Library={this.state.Library} UpdateBook={this.UpdateBook}/>)}/>
        <Route  path='/search' render={({history})=>(<SearchBook Library={this.state.Library} UpdateBook={this.UpdateBook} />)}/>
      </div>
    )
  }
}

MyReads.PropTypes ={
  Library : PropTypes.array.isRequired,
  UpdateBook :PropTypes.func.isRequired
}
SearchBook.PropTypes ={
  Library : PropTypes.array.isRequired,
  UpdateBook :PropTypes.func.isRequired
}
export default BooksApp
