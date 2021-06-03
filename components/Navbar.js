import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar">
        <Link href="/">
            <a className="navbar-brand">Note App</a>
        </Link>
        <Link href="/new">
            <a className="create">Create note</a>
        </Link>
        <Link href="/people">
            <a className="people">visit people</a>
        </Link>


        <a style={{ color: 'white', fontSize: 20 }} classname="navbar-brand" href="/api/auth/logout">Logout</a>
        <a style={{ color: 'white', fontSize: 20 }} classname="navbar-brand" href="/api/auth/login  ">Login</a>

    </nav>
)

export default Navbar;