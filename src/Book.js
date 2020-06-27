import React from 'react'

class Book extends React.Component {

  state ={category:this.props.shelf}

  handelChange = (value) =>{      
   this.setState({category:value})
   const {book,UpdateBook} = this.props
   UpdateBook(book,value)  
  }
  render(){
    const {book} = this.props
  	const {category}= this.state
  	var style = {
        color: '#74c683'
    };

  	return( 
  		<div className="book">
  		   { book && (
  		   	<div>
            <div className="book-top">
             { book.imageLinks &&(
              <div className="book-cover" 
              style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
              </div>
              )
             }
              <div className="book-shelf-changer">
                <select value={category} onChange={(event) => this.handelChange(event.target.value)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading" style={category==="currentlyReading"?style:{color:''}}>Currently Reading</option>
                  <option value="wantToRead" style={category==="wantToRead"?style:{color:''}}>Want to Read</option>
                  <option value="read" style={category==="read"?style:{color:''}}  >Read</option>
                  <option value="none" style={category==="none"?style:{color:''}}>None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
               {Array.isArray(book.authors) && book.authors.length >0 && 
               	(book.authors.map((author,index)=>(<li key={index} style={{padding:"1px 5px"}}>{author}</li>)))
               }
            </div>
            </div>
            )
           }
        </div> 
         
  		)
  }

}

export default Book