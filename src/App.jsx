import React from "react";

/**
 * Membuat component Home.
 * Component Home menampilkan halaman Home.
 */
function Home() {
  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Temukan Buku Favoritmu di Bookstore Kami!
          </h1>
          <p className="lead">
            Koleksi buku terlengkap mulai dari fiksi, non-fiksi, biografi hingga buku anak-anak. 
            Dapatkan diskon spesial setiap minggu dan baca review jujur dari pembaca lainnya.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
              Lihat Koleksi
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Hubungi Kami
            </button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            className="rounded-lg-3"
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80"
            alt="Buku Favorit"
            width="720"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Membuat component Book.
 * Component Book menampilkan daftar buku.
 */
function Book() {
  const books = [
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
      description: "Buku C menceritakan kisah inspiratif.",
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
  ];

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
              <a href="#" className="btn btn-primary my-2 m-2">View More</a>
              <a href="#" className="btn btn-secondary my-2">Other Books</a>
            </p>
          </div>
        </div>
      </section>
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
  );
}

/**
 * Membuat component Team.
 * Component Team menampilkan daftar anggota tim.
 */
function Team() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Meet Our Team</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" className="card-img-top" alt="Team Member 1"/>
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">CEO & Founder</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="https://randomuser.me/api/portraits/women/2.jpg" className="card-img-top" alt="Team Member 2"/>
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">Marketing Director</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="https://randomuser.me/api/portraits/men/3.jpg" className="card-img-top" alt="Team Member 3"/>
            <div className="card-body">
              <h5 className="card-title">Alex Johnson</h5>
              <p className="card-text">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Membuat component Contact.
 * Component Contact menampilkan informasi kontak.
 */
function Contact() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="John Doe"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your message here"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="col-md-6">
          <h5>Contact Information</h5>
          <p><i className="fa fa-map-marker-alt"></i> 123 Main Street, Jakarta</p>
          <p><i className="fa fa-phone"></i> +62 812-3456-7890</p>
          <p><i className="fa fa-envelope"></i> info@bookstore.com</p>
          <div className="map mt-3">
            <iframe
              src="https://maps.google.com/maps?q=Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      {/* Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4">bookstore</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/" className="nav-link px-2">Home</a></li>
            <li><a href="/book" className="nav-link px-2">Book</a></li>
            <li><a href="/team" className="nav-link px-2">Team</a></li>
            <li><a href="/contact" className="nav-link px-2">Contact</a></li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>
      </div>

      {/* Home Section */}
      <Home />

      {/* Book Section */}
      <Book />

      {/* Team Section */}
      <Team />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <p className="text-center text-body-secondary">&copy; 2025 NF Academy</p>
        </footer>
      </div>
    </>
  );
}

export default App;
