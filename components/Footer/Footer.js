import styles from './Footer.module.scss';
import logo from '../../assets/logos/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <img src={logo} alt="Coinomon world's largest and most accurate crypto price tracker" />
          <span>Coinomon</span>
        </div>
        <div className={styles.footerItems}>
          <div>
            {/* <span>Products</span>
            <ul>
              <li>
                <a href="/">Coming Soon</a>
              </li>
              <li>
                <a href="/">Crypto API</a>
              </li>
              <li>
                <a href="/">Jobs Board</a>
              </li>
            </ul> */}
          </div>
          <div>
            <span>Company</span>
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {/*  <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Terms of use</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Disclaimer</a>
              </li>*/}
            </ul>
          </div>
          <div>
            {/* <span>Support</span>
            <ul>
              <li>
                <a href="/">Coming Soon</a>
              </li>
              <li>
                <a href="/">Request Form</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
            </ul> */}
          </div>
          <div>
            <span>Socials</span>
            <ul>
              <li>
                <a target="new" href="https://web.facebook.com/groups/1042692876675171">
                  Facebook
                </a>
              </li>
              <li>
                <a target="new" href="https://discord.gg/PspF2cnF">
                  Discord
                </a>
              </li>
              <li>
                <a target="new" href="https://t.me/coinomonofficial">
                  Telegram
                </a>
              </li>
              <li>
                <a target="new" href="https://www.instagram.com/coinomon/">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p>&copy; 2022 Coinomon. All rights reserved</p>
    </footer>
  );
};

export default Footer;
