'use client';

import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';

const copyrightLinks = [
  {
    title: 'Terms of Use',
    href: '/terms',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy',
  },
];

const serviceMenu = [
  {
    title: 'Smart Invoicing',
    href: '/service/smart-invoicing',
  },
  {
    title: 'Financial Dashboard',
    href: '/service/financial-dashboard',
  },
  {
    title: 'Maintenance Tracking',
    href: '/service/maintenance-tracking',
  },
  {
    title: 'Utility Management',
    href: '/service/utility-management',
  },
];

const date = new Date().getFullYear();

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-footer">
      <Div className="cs-footer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/footer_logo.svg"
                  logoAlt="Keja Plus Logo"
                  text="Keja Plus is revolutionizing property management in Kenya, offering efficient and transparent solutions for landlords, tenants, and property owners."
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Our Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget 
                  title="Get in Touch"
                  address="Keja Plus HQ, Nairobi, Kenya"
                  phone="+254 700 000 000"
                  email="support@kejaPlus.com"
                />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Stay Updated"
                  subtitle="Subscribe to get the latest tips, trends, and news in property management."
                  placeholder="Enter your email"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              Copyright © {`${date}`} Andromeda Labs. All rights reserved.
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
