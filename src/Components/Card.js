import { img_url } from "../config";
// import { restaurantsList } from "../config";
const Card=({cloudinaryImageId,name,cuisines,costForTwo})=>{
    // {console.log({restaurants});}
    return(
      <div className='w-52 h-64 border-solid border-2 text-center'>
      <img src={img_url + cloudinaryImageId} alt="" className="w-full h-28" />
      <p className='font-bold text-sm'>{name}</p>
      <p className='desc'>{cuisines[0]+", " + cuisines[1]}</p>
      <p className='cost'>{costForTwo}</p>
    </div>
  )
}
export default Card;