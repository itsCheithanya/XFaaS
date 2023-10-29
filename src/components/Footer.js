import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Footer = () => {

    return (
        <div className="Footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ textAlign: 'center' }}>@ IISC Dream Lab</p>
          <div>
            <p style={{ marginLeft: '70rem' }}>
              <InfoOutlinedIcon /> About
            </p>
            <p style={{ marginLeft: '70rem' }}>
              <EmailOutlinedIcon /> Contact Us
            </p>
          </div>
        </div>
      );
      
}

export default Footer;
