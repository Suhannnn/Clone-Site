import React from "react";
import Books from "./Books";
import "./Booklist.css";

function Booklist({ booklists, removeBooklists }) {
  return (
    <div className="booklist">
      <ul className="box-booklist">
        {booklists.map((booklist) => (
          <div key={booklist.id} className="book-box">
            <div className="box-text">
              <strong>{booklist.category}</strong>
              <h3>{booklist.title}</h3>
              <p>{booklist.author}</p>
              <div className="box-remove">
                <p>Comment</p>
                <p onClick={() => removeBooklists(booklist.id)}>Remove</p>
                <p>Edit</p>
              </div>
            </div>
            <div className="box-progress">
              <Books />
            </div>
          </div>
        ))}
      </ul>
      {/*<BookForm onSubmit={addBooklists} />*/}
    </div>
  );
}

export default Booklist;
