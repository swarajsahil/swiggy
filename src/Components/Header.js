import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header=()=>{
    const cartItems=useSelector(store=>store.cart.items);
    return (
        <nav className="flex justify-between bg-green-200">
            <div className="w-16">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYjK_Ldo_9ZEviXhr3l0TyCS5aOnzprGSmA&usqp=CAU" alt="" />
            </div>
        <ul className="flex items-center">
            <li className="mx-2 px-2"><Link to="/">Home</Link></li>
            <li className="mx-2 px-2"><Link to="/about">About</Link></li>
            <li className="mx-2 px-2"><Link to="/contact">Contact</Link></li>
            <li className="mx-2 px-2"><Link to="/cart">Cart-{cartItems.length}</Link></li>
        </ul>
        </nav>
    )
}

export default Header;