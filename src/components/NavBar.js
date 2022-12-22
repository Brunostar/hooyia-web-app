export default function NavBar() {
    return(
        <nav className="nav">
            <div className="logo">Hooyia</div>
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="#" className="nav__link">Sell</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Products</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">About</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Contact</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Login</a>
                </li>
                {/*<li className="nav__item">*/}
                    {/*<a href="#" className="nav__link"></a>*/}
                    {/*<ul className="nav__asides nav__list">*/}
                    {/*    <li className="nav__aside_item">*/}
                    {/*        <a href="#" className="nav__aside_link nav__link">Cart</a>*/}
                    {/*    </li>*/}
                    {/*    <li className="nav__aside_item">*/}
                    {/*        <a href="#" className="nav__aside_link nav__link">Account</a>*/}
                    {/*    </li>*/}
                    {/*    <li className="nav__aside_item">*/}
                    {/*        <a href="#" className="nav__aside_link nav__link">Lang</a>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                {/*</li>*/}
            </ul>
        </nav>
    )
}