import Image from "next/image";
import MehranPhoto from '../../assets/images/mehran-khanjan-photo.jpg';
import Link from "next/link";
import {useState} from "react";
import {usePathname} from "next/navigation";

export default function Header() {
    const pathname = usePathname()
    const [menuClass, setMenuClass] = useState('collapse navbar-collapse');

    function handleHamburgerMenuButtonClick() {
        if (menuClass === 'collapse navbar-collapse') {
            setMenuClass('collapse navbar-collapse show');
        } else if (menuClass === 'collapse navbar-collapse show') {
            setMenuClass('collapse navbar-collapse');
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link href={'/'} className="navbar-brand">Mehran Khanjan</Link>
                    <button
                        type="button"
                        className="navbar-toggler"
                        onClick={handleHamburgerMenuButtonClick}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={menuClass} id="navbarCollapse2">
                        <div className="navbar-nav">
                            <Link
                                href={'/'}
                                className={`nav-item nav-link ${pathname === '/' ? 'active' : ''}`}
                                onClick={handleHamburgerMenuButtonClick}>
                                Home
                            </Link>
                            <Link
                                href={'/about'}
                                className={`nav-item nav-link ${pathname === '/about' ? 'active' : ''}`}
                                onClick={handleHamburgerMenuButtonClick}>
                                About
                            </Link>
                        </div>
                        {/*<form className="d-flex ms-auto">*/}
                        {/*    <input type="text" className="form-control me-2" placeholder="Search"/>*/}
                        {/*    <button type="submit" className="btn btn-outline-light">Search</button>*/}
                        {/*</form>*/}
                    </div>
                </div>
            </nav>
        </>
    )
}