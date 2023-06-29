import { useDispatch, useSelector } from "react-redux";
import { img_url } from "../config";
// import { addItems,removeitems} from "../utils/cartSlice";
const Cart=()=>{
    const cardItems=useSelector(store=>store.cart.items);
    // console.log(cardItems);
    // const dispatch=useDispatch();
    return (
        <div className="flex flex-wrap m-1 gap-5 flex-col">
        {
            cardItems.map((item)=>{
                return <div className='w-80 h-16 flex border-solid border-2 text-center items-center justify-between' key={item.id}>
                <img src={img_url + item.cloudinaryImageId} alt="" className="w-20 h-16 object-cover" />
                <div className="flex flex-col">
                <p className='font-bold text-sm'>{item.name}</p>
                <div className="flex justify-center items-center h-10">
                {/* <button className="mx-1 px-1 bg-green-400 text-white h-6 rounded-sm" onClick={()=>dispatch(addItems(item.id))}>+</button>
                <button className="mx-1 px-1 bg-green-400 text-white h-6 rounded-sm" onClick={()=>dispatch(removeitems(item.id))}>-</button> */}
                </div>
                </div>
        </div>
    })
}
</div>
    )
}


export default Cart;