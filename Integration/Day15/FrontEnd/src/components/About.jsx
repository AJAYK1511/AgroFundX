const AboutPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Agriculture Financing System</h1>
      <p style={styles.paragraph}>
        Agriculture Financing System is a platform designed to provide financial assistance and support
        to farmers and agricultural businesses. Our mission is to empower farmers and promote sustainable
        agriculture practices by offering various financial services tailored to their needs.
      </p>
      <p style={styles.paragraph}>
        With Agriculture Financing System, farmers can access loans, insurance, and other financial products
        essential for their operations. We strive to enhance financial inclusion in the agricultural sector
        and contribute to the growth and development of rural communities.
      </p>
      <h2 style={styles.subheader}>Our Vision</h2>
      <p style={styles.paragraph}>
        Our vision is to become the leading platform for agricultural finance, providing innovative solutions
        to address the financial challenges faced by farmers and agribusinesses worldwide.
      </p>
      <h2 style={styles.subheader}>Contact Us</h2>
      <p style={styles.paragraph}>
        If you have any questions or inquiries, please feel free to contact us at info@agfinance.com.
      </p>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: '100vw',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subheader: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '40px',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
};

export default AboutPage;
