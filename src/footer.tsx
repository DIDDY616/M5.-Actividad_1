function Footer() {
  const socialIcons = [
    { name: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", fill: true },
    { name: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", fill: true },
    { name: "Instagram", path: "", fill: false },
    { name: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z", fill: true },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-8 h-8 text-white p-1.5 bg-indigo-500 rounded-lg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="font-bold text-gray-900">PricingApp</span>
          </div>
          <p className="text-sm text-gray-400 text-center">
            DEAAAHHH
          </p>
          <div className="flex items-center gap-3">
            {socialIcons.map((social, i) => (
              <a
                key={i}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-indigo-500 hover:bg-indigo-50 rounded-lg transition-colors duration-150 cursor-pointer"
                title={social.name}>
                {social.name === "Instagram" ? (
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                ) : (
                  <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
                    <path d={social.path} />
                    {social.name === "LinkedIn" && <circle cx="4" cy="4" r="2" />}
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;