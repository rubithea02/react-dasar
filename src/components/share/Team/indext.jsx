export default function Team(){
    return(
        <>
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
        </>
    )
}