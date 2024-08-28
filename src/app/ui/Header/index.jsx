'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import DropDown from './DropDown';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant || ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <div className="cs-main_header">
          <div className="container">
            <div className="cs-main_header_in">
              <div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <img 
                    src="/images/logo.png" 
                    alt="Logo" 
                    style={{ width: '50px', height: '80px' }} 
                  />
                </Link>
              </div>
              <div className="cs-main_header_center">
                <div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: mobileToggle ? 'block' : 'none' }}
                  >
                    <li className="menu-item-has-children">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                      <DropDown>
                        {/* Dropdown items */}
                      </DropDown>
                    </li>
                    <li>
                      <Link href="/about" onClick={() => setMobileToggle(false)}>
                        About
                      </Link>
                    </li>
                    {/* Add other navigation items here */}
                  </ul>
                  <span
                    className={`cs-munu_toggle ${mobileToggle ? 'cs-toggle_active' : ''}`}
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </div>
              </div>
              <div className="cs-main_header_right">
                <div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`cs-side_header ${sideHeaderToggle ? 'active' : ''}`}>
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <div className="cs-side_header_in">
          <div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
            <img 
              src="/images/footer_logo.svg" 
              alt="Logo" 
              style={{ width: '50px', height: '10px' }} 
            />
          </Link>
          <div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Keep connect us.
            </h2>
          </div>
          <div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </div>
          <div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
              placeholder="example@gmail.com"
            />
          </div>
          <div className="cs-side_header_box">
            <SocialWidget />
          </div>
        </div>
      </div>
    </>
  );
}