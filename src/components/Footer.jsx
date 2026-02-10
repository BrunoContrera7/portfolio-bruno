function Footer() {
  return (
      <footer className="py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Brunoweb Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
  )
}

export default Footer;