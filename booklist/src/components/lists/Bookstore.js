import React, { useState } from "react";
import Booklist from "./Booklist";
import BookForm from "./BookForm";

function Bookstore() {
  const [booklists, setBooklists] = useState([
    { id: "1", title: "name1", author: "author1", category: "category1" },
    { id: "2", title: "name2", author: "author2", category: "category2" },
    { id: "3", title: "name3", author: "author3", category: "category3" },
  ]);

  const addBooklists = (booklist) => {
    setBooklists([...booklists, booklist]);
  };

  const removeBooklists = (id) => {
    setBooklists([...booklists].filter((booklist) => booklist.id !== id));
  };

  return (
    <div>
      <Booklist booklists={booklists} removeBooklists={removeBooklists} />
      <BookForm onSubmit={addBooklists} />
    </div>
  );
}

export default Bookstore;
