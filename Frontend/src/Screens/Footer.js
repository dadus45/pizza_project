function Footer() {
  return (
    <>
      <div
        style={{
          height: 50,
          textAlign: "center",
          border: "1px solid",
          backgroundColor: "gray",
          position: 'fixed',
          bottom:0,
          left:0,
          right:0
        }}
        className="card-header bg-light "
      >
        <a href="/About" className="fw-bold text-body">
          <u>About Our Shop</u>
        </a>
        <div className="fw-bold text-body">
          <span className="large">Open from 10am to 12pm</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
