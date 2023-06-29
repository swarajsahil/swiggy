// import { restaurantList } from '../config';
import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { swiggy_api } from "../config";


function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) => {
    return restaurant?.info?.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  async function fetchData() {
    const data = await fetch(swiggy_api);
    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurants(
      jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setAllRestaurants(
      jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <>
      <Skeleton width={200} height={20} />
      <div className="flex flex-wrap ">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    </>
  ) : (
    <>
      <div className="flex justify-center m-2">
        <input
          className="border-2 mx-2 focus:bg-slate-50"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setRestaurants(data);
            setSearchText("");
          }}
          className="bg-red-600 text-white p-1 rounded-2xl"
        >
          Search
        </button>
        
      </div>
      <div className="flex flex-wrap gap-1">
        {restaurants?.length === 0
          ? "Not Found"
          : restaurants?.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}
                >
                  <Card {...restaurant.info} />
                </Link>
              );
            })}
      </div>
    </>
  );
};

export default Body;
