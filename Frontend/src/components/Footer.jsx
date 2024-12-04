import React from 'react'

const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto font-poppins mt-8">
      <hr />
      <footer className="footer footer-center text-base-content rounded p-8">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* GitHub Icon */}
            <a href="https://github.com/Pvpkishore" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.107-.776.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.931 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.004 2.048.137 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.119 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.623-5.475 5.921.43.371.823 1.102.823 2.222 0 1.604-.015 2.897-.015 3.292 0 .322.218.694.825.576 4.765-1.584 8.2-6.081 8.2-11.384 0-6.627-5.373-12-12-12z"
                ></path>
              </svg>
            </a>
            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/ponnala-venkata-padma-kishor-76679326a/" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.67 19h-3.33v-10h3.33v10zm-1.67-11.3c-1.03 0-1.87-.84-1.87-1.88s.84-1.88 1.87-1.88c1.04 0 1.88.84 1.88 1.88s-.84 1.88-1.88 1.88zm13.67 11.3h-3.33v-5.48c0-1.31-.47-2.21-1.64-2.21-.9 0-1.43.6-1.67 1.17-.09.22-.11.53-.11.84v5.68h-3.33s.04-9.21 0-10.17h3.33v1.44c.44-.69 1.23-1.67 2.99-1.67 2.18 0 3.81 1.42 3.81 4.47v6.93z"
                ></path>
              </svg>
            </a>
            {/* Project Expo Icon */}
            <a href="https://my-projects-kishore.vercel.app/" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="fill-current">
                <path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8z" />
              </svg>

            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by Pvpkishore</p>
        </aside>
      </footer>
    </div>

  )
}

export default Footer