import React from "react";
import { MailIcon, LinkedinIcon, GithubIcon} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Contact Details */}
        <div>
          <h3 className="section-title">Contact Me</h3>
          <ul className="contact-list">
            <li>
              <MailIcon className="w-5 h-5 text-blue-400" />
              <a
                href="mailto:meshram.harsh05@gmail.com"
                className="hover:text-blue-300 transition"
              >
                meshram.harsh05@gmail.com
              </a>
            </li>
            <li>
              <LinkedinIcon className="w-5 h-5 text-blue-400" />
              <a
                href="https://www.linkedin.com/in/harsh-meshram-5b8271258/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition"
              >
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>
            &copy; 2025 Harsh Meshram.
            <br />
            All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="section-title">Follow Me</h3>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/harsh-meshram-5b8271258/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/meshramharsh19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <TwitterIcon className="w-6 h-6" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
