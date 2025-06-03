import React, { useState } from "react";
import booksData from "../../../Utils/books";

export default function ProductList() {
  const [books, setBooks] = useState(booksData);

  // Handler untuk menambahkan buku baru
  const handleAddBook = () => {
    const newBook = {
      id: books.length + 1,
      title: `Book ${books.length + 1}`,
      description: "Deskripsi buku baru",
      image: "https://via.placeholder.com/150"
    };
    setBooks([...books, newBook]);
  };

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Buku-buku pilihan dengan rating tinggi dan banyak dicari pelanggan kami.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">
                View More
              </a>
              <a href="#" className="btn btn-secondary my-2">
                Other Books
              </a>
            </p>
            {/* Tombol untuk menambahkan buku baru */}
            <button onClick={handleAddBook} className="btn btn-success my-2">
              Add Book
            </button>
          </div>
        </div>
      </section>

      {/* Book List */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <img
                    src={book.image}
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    alt={`Cover ${book.title}`}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
