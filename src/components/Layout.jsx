import { Outlet, Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
]

function Layout() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand-block">
          <p className="eyebrow">Canada only • free shipping over $50</p>
          <Link to="/" className="brand-mark" aria-label="RetroWear Shop home">
            RETROWEAR
          </Link>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/shop" className="button button--primary header-cta">
          Shop Now
        </Link>
      </header>

      <main className="content-wrap">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <p className="eyebrow eyebrow--small">RetroWear Shop</p>
          <h3>Built for late-night nostalgia.</h3>
        </div>
        <div className="footer-links">
          <a href="mailto:hello@retrowear.shop">hello@retrowear.shop</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            @retrowear.shop
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
