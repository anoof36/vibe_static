import "./App.css";
import logo from "./assets/images/vibe_logo.png";

function App() {
  const googleMap =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d277.9630778185232!2d75.88798072189091!3d10.964558160227517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ad9d529461fb%3A0xbb6a9d23cc4d5dfb!2sVibe!5e1!3m2!1sen!2sin!4v1732612793714!5m2!1sen!2sin";
  return (
    <>
      <div className="position-relative">
        {/* Navbar */}
        <nav className="custom-nav navbar navbar-expand-lg">
          <div className="container">
            <img
              src={logo}
              style={{
                borderRadius: "5px",
                padding: "10px",
                backgroundColor: "black",
                width: "100px",
                height: "auto",
              }}
              alt="SVG example"
            />

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
            
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#products">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#location">
                    Location
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Header Section */}
        <section id="home" className="text-center py-5 vh-100">
          <div className="container">
            <h2>Welcome to Vibe Women Store</h2>
            <p className="lead">Your one-stop shop for beauty & fashion</p>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-5 vh-100">
          <div className="container text-center">
            <h2 className="mb-4">Our Products</h2>
            <p className="w-75 mx-auto">
              Discover an extensive range of products from top brands in the
              industry. From trendy apparel to beauty essentials, we’ve got you
              covered.
            </p>
            <ul className="list-unstyled">
              <li>
                <strong>Clothing:</strong> Dresses, Tops, Jeans, and more
              </li>
              <li>
                <strong>Beauty:</strong> Skincare, Makeup, and Perfumes
              </li>
              <li>
                <strong>Brands:</strong> Zara, H&M, Maybelline, and others
              </li>
            </ul>
          </div>
        </section>
        {/* Location Section */}
        <section id="location" className="py-5 vh-100">
          <div className="container">
            <h2 className="text-center">Our Location</h2>
            <div className="row align-items-center mt-5">
              <div className="col-md-6 text-center mb-4 mb-md-0">
                <iframe
                  src={googleMap}
                  style={{
                    border: 0,
                    borderRadius: "10px",
                    width: "80%",
                    minHeight: "300px",
                    height: "auto",
                  }} // Missing unit for height
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="col-md-6">
                <h3>Visit Us</h3>
                <p>
                  Our store is located in the heart of Style City, offering a
                  luxurious shopping experience in a cozy atmosphere. Drop by
                  and explore the latest trends in women’s fashion.
                </p>
                <p>
                  <strong>Address:</strong> 123 Fashion Street, Style City, USA
                </p>
                <p>
                  <strong>Hours:</strong> Mon-Sat: 10 AM - 8 PM, Sun: 12 PM - 6
                  PM
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-5 vh-100">
          <div className="container text-center">
            <h2 className="mb-4">About Us</h2>
            <p className="w-75 mx-auto">
              At Vibe Women Store, we offer a curated collection of women's
              clothing that blends style, comfort, and elegance. Explore the
              best of beauty and fashion under one roof.
            </p>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-5 vh-100">
          <div className="container text-center">
            <h2>Contact Us</h2>
            <p>Have questions? Reach out to us!</p>
            <ul className="list-unstyled">
              <li>
                <strong>Email:</strong> contact@vibewomenstore.com
              </li>
              <li>
                <strong>Phone:</strong> +1 234 567 8900
              </li>
              <li>
                <strong>Address:</strong> 123 Fashion Street, Style City, USA
              </li>
            </ul>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3">
          <p>© 2024 Vibe Women Store. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
