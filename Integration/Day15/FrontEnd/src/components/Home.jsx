// import getAllUsers1 from '../apifolder/Api';
// import { getUserById } from '../apifolder/AppUser';
import '../assets/Home.css';
import image3 from '../assets/images/agrinature3.jpg';
function Home() {
  // console.log(getAllUsers1());
  // console.log(getUserById(2));
  return (
    <>
    <div className="wholehome">
       <div className="home-container">
      <div className="agri-home-container">
      <header className="agri-header">
        <h2>Welcome to Agriculture Financing System</h2>
      </header>
      <section className="agri-hero-section">
        <div className="agri-hero-image">
          <img src={image3} alt="Agriculture" />
        </div>
      </section>
      <div className="divvision">
      <div className="detail-box">
        <h3>Regd. Beneficiary</h3>
        <p>130338</p>
      </div>
      <div className="detail-box">
        <h3>No. of Applications</h3>
        <p>107792</p>
      </div>
      <div className="detail-box">
        <h3>Loan Amt. of Received Appls.</h3>
        <p>₹ 54,518 Cr</p>
      </div>
      <div className="detail-box">
        <h3>User</h3>
        <p>216320</p>
      </div>
      <div className="detail-box">
        <h3>State/UTs</h3>
        <p>34</p>
      </div>
      <div className="detail-box">
        <h3>Total Appl. Sanctioned</h3>
        <p>54152</p>
      </div>
      <div className="detail-box">
        <h3>Amt. Sanctioned by SCB under AIF</h3>
        <p>₹ 26,569 Cr</p>
      </div>
      <div className="detail-box">
        <h3>Amt. Sanctioned by Coop. under AIF</h3>
        <p>₹ 3,256 Cr</p>
      </div>
      <div className="detail-box">
        <h3>Total Amt. Sanctioned under AIF</h3>
        <p>₹ 29,825 Cr</p>
      </div>
      <div className="detail-box">
        <h3>Total Amount Sanctioned</h3>
        <p>₹ 38,482 Cr</p>
      </div>
      <div className="detail-box">
        <h3>Total Amt. Sanctioned under AIF</h3>
        <p>₹ 64,729 Cr</p>
      </div>
      <div className="detail-box">
        <h3>Project Cost of Sanctioned Projects</h3>
        <p>₹ 29,825 Cr</p>
      </div>
    </div>
      <div className="home-website-container">
      <h2>Main Features</h2>
      <div className="feature-box">
        <p><strong>Convergence with all schemes of central or state government.</strong></p>
        <p><strong>Online single window facility in collaboration with participating lending institutions.</strong></p>
        <p><strong>Project Management Unit to provide handholding support for projects including project preparation.</strong></p>
        <p><strong>Size of the financing facility – ₹ 1 lakh Crore.</strong></p>
        <p><strong>Credit Guarantee for loans up to ₹ 2 Crore.</strong></p>
        <p><strong>Interest subvention of 3% p.a., limited to ₹ 2 crore per project in one location, though loan amount can be higher.</strong></p>
        <p><strong>Cap on lending rate, so that benefit of interest subsidy reaches the beneficiary and services to farmers remain affordable.</strong></p>
        <p><strong>Multiple lending institutions including Commercial Banks, Cooperative Banks, RRBs, Small Finance Banks, NCDC, NBFCs etc.</strong></p>
        <p><strong>One eligible entity puts up projects in different locations then all such projects will be eligible under the scheme for loan upto ₹ 2 crore.</strong></p>
        <p><strong>For a private sector entity, such as farmer, agri entrepreneur, start-up there will be a limit of maximum of 25 such projects.</strong></p>
        <p><strong>Limitation of 25 projects will not be applicable to state agencies, national and state federations of cooperatives, federations of FPOs and federation of SHGs.</strong></p>
      </div>
    </div>
    
      <section className="agri-about-section">
        <h2>About Us</h2>
        <p>
          Our Agriculture Financing System aims to provide financial support to farmers and agricultural businesses. We offer a range of loan options tailored to the specific needs of the agriculture sector.
          Our Agriculture Financing System aims to provide financial support to farmers and agricultural businesses. We offer a range of loan options tailored to the specific needs of the agriculture sector.
          Our Agriculture Financing System aims to provide financial support to farmers and agricultural businesses. We offer a range of loan options tailored to the specific needs of the agriculture sector.
          Our Agriculture Financing System aims to provide financial support to farmers and agricultural businesses. We offer a range of loan options tailored to the specific needs of the agriculture sector.
        </p>
      </section>
      <section className="agri-services-section">
        <h2>Our Services</h2>
        <ul>
          <li>Loans for crop cultivation</li>
          <li>Equipment financing</li>
          <li>Working capital loans</li>
          <li>Insurance services</li>
        </ul>
      </section>
      <section className="agri-statistics-section">
        <h2>Statistics</h2>
        <div className="agri-statistics">
          <div className="agri-statistic-item">
            <h3>Total Loans Approved</h3>
            <p>400</p>
          </div>
          <div className="agri-statistic-item">
            <h3>Total Amount Disbursed</h3>
            <p>$1,000,000</p>
          </div>
        </div>
      </section>
    </div>
    <footer className="other-footer">
      <div className="other-container">
        <div className="other-row">
          <div className="other-col">
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Agriculture Street, Farmville, USA</p>
          </div>
          <div className="other-col">
            <h4>References</h4>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="other-row">
          <div className="other-col">
            <p className="text-center">&copy; {new Date().getFullYear()} Agriculture Financing System. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
     </div>
     </div>
     </>
  );
}

export default Home;
