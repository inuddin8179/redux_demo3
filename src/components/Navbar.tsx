import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navList">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/sign-in">sign in</Link>
                </li>
               
            </ul>
        </nav>
    );
};

export default Navbar;
