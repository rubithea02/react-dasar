export default function ProductList(){
    return(
        <>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller</h1>
              <p className="lead text-body-secondary">
                Buku-buku pilihan dengan rating tinggi dan banyak dicari pelanggan kami.
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2 m-2">View More</a>
                <a href="#" className="btn btn-secondary my-2">Other Books</a>
              </p>
            </div>
          </div>
        </section>

        {/* Book List */}
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {[
                {
                  title: "Buku A",
                  description: "Buku A sangat populer di kalangan pembaca dewasa.",
                  image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80"
                },
                {
                  title: "Buku B",
                  description: "Buku B berisi tips sukses untuk karier profesional.",
                  image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80"
                },
                {
                  title: "Buku C",
                  description: "Buku C menceritakan kisah inspiratif .",
                  image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80"
                },
                {
                  title: "Buku D",
                  description: "Buku D cocok untuk kamu yang suka kisah cinta.",
                  image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80"
                },
                {
                  title: "Buku E",
                  description: "Buku E penuh motivasi dan inspirasi dalam hidup.",
                  image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80"
                },
                {
                  title: "Buku F",
                  description: "Buku F berisi kisah sejarah Indonesia.",
                  image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80"
                }
              ].map((book, index) => (
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
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
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
    )
}