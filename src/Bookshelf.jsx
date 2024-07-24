import { useState } from 'react'

const Bookshelf = () => {
  
  const [books, setBooks] = useState([])
  const [newBook, setNewBook] = useState({ title: '', author: '' })

  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewBook((prevNewBook) => ({ ...prevNewBook, [name]: value }))
  }

  
  const handleSubmit = (e) => {
    e.preventDefault()
    setBooks((prevBooks) => [...prevBooks, newBook])
    setNewBook({ title: '', author: '' })
  }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookshelf
