import { useState,useEffect } from "react";
import {menu_url} from "../config"
const UseRestaurantApi=(resId)=>{
    const [restaurant, setRestauraunt] = useState(null);

    async function getRestaurantInfo() {
      const data = await fetch(menu_url + resId);
      const json = await data.json();
    //   console.log(json);
      setRestauraunt(json.data.cards[0].card.card.info);
    }
    useEffect(() => {
        getRestaurantInfo();
      }, []);
  
    return restaurant;
}
export default UseRestaurantApi;