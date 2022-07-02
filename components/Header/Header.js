import MenuIcon from '../../assets/img/menu.svg';
import CloseIcon from '../../assets/img/close.svg';
import FacebookIcon from '../../assets/img/facebook.svg';
import InstagramIcon from '../../assets/img/instagram.svg';
import DiscordIcon from '../../assets/img/discord.svg';
import TelegramIcom from '../../assets/img/telegram.svg';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mainHeader">
      <div className="desktop-menu">
        <Link href="/">
          <a>
            <div className="logo">
              <div className="logo-title">Hassuu</div>
            </div>
          </a>
        </Link>
        <div className="nav-items">
          <div>
            <Link href="/categories">Categories</Link>
          </div>
          <div>
            <Link href="/blogs">Posts</Link>
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        <div className="logo">
          <Link href="/">
            <a>
              <div className="logo-title">Hassuu</div>
            </a>
          </Link>
        </div>
        <div className="menu-icon" onClick={menuToggler}>
          <MenuIcon />
        </div>
      </div>
      <div className={`menuOverlay ${isMenuOpen && 'open'} `}>
        {isMenuOpen && (
          <>
            <div className="mobile-menu">
              <div className="logo">
                <div className="logo-title">Hassuu</div>
              </div>
              <div className="menu-icon" onClick={menuToggler}>
                <CloseIcon />
              </div>
            </div>
            <div className={`navItems `}>
              <div>
                <Link href="/categories">
                  <a>Categories</a>
                </Link>
              </div>
              <div>
                <Link href="/blogs">
                  <a>Posts</a>
                </Link>
              </div>
            </div>
            <div className={`socialIcons ${!isMenuOpen && 'hide'}`}>
              <Link href="https://web.facebook.com/groups/1042692876675171">
                <a>
                  <FacebookIcon />
                </a>
              </Link>
              <Link href="https://www.instagram.com/coinomon">
                <a>
                  <InstagramIcon />
                </a>
              </Link>
              <Link href="https://discord.gg/PspF2cnF">
                <a>
                  <DiscordIcon />
                </a>
              </Link>
              <Link href="https://t.me/coinomonofficial">
                <a>
                  <TelegramIcom />
                </a>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
