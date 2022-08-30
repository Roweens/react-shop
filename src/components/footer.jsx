export function Footer() {
  return (
    <footer className="page-footer deep-purple lighten-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/Roweens/react-shop"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
