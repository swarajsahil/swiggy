import { useEffect,useState,useContext} from "react";
import { useParams } from "react-router-dom";
import { img_url } from "../config";
import Shimmer from "./Shimmer";
import Skeleton from "react-loading-skeleton";
// import { menu_url } from "../config";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addItems, removeitems } from "../utils/cartSlice";
import UseRestaurantApi from "../utils/UseRestaurantApi";
// import { useSelector } from "react-redux";
const RestaurantMenu=()=>{
    const {user}=useContext(UserContext);
    const {resId}=useParams();
    // const cardItems=useSelector(store=>store.cart.items);
    
    // const [restaurantMenuData,setRestaurantMenuData]=useState(null);
    // useEffect(()=>{
    //     getRestaurantInfo();
    // },[])
    

    // async function getRestaurantInfo(){
    //     const data=await fetch(menu_url+resId );
    //     const jsonData=await data.json();
    //     // console.log(jsonData);
    //     setRestaurantMenuData(jsonData.data.cards[0].card.card.info);
    // }
    const restaurantMenuData=UseRestaurantApi(resId);
    const dispatch=useDispatch();
    const handleAdditem=(restaurantMenuData)=>{
        dispatch(addItems(restaurantMenuData));
    }
    const handleRemoveItem=(restaurantMenuData)=>{
        dispatch(removeitems(restaurantMenuData));
    }
    
    return (!restaurantMenuData)?
  <>
    <Skeleton width={200} height={20}/>
  <div className="flex flex-wrap m-2 ">
  <Shimmer/>
  </div></>: (
        <>
        <div className="w-60 text-center m-2 border-solid border-2 border-slate-950">
            <img className="w-full h-32" src={img_url+restaurantMenuData.cloudinaryImageId} alt="" />
            <p>{restaurantMenuData.name}</p>
            <p>{user.name}-{user.email}</p>
            <button className="bg-green-400 m-1 px-2 text-white" onClick={()=>handleAdditem(restaurantMenuData)}>Add To Cart</button>
        </div>
        </>
    )
}
export default RestaurantMenu;