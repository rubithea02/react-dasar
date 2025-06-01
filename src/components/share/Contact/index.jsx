export default function Contact(){
    return(
        <>
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
        </>
    )
}