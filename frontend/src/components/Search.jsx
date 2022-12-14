import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import SearchContext from "../context/search/SearchContext";
import SearchResult from "./SearchResult";

function Search() {
  const [input, setInput] = useState("");
  
  const state = useContext(SearchContext)

  const searchTodos = async () => {
    try {
      const res = await axios.get(`/api/todo/search?q=${input}`);
    state.setResult(res.data.result)
    state.setShowError(false)
   
    } catch (error) {
      if(error.response.data.message === "No Todo found"){
        state.setShowError(true)
      }

    }
    
  };

  const handleclick = (e) => {
    e.preventDefault();
    if (input) {
      state.setShowResult(true)
      searchTodos();
    }
    setInput("")
  };

  return (
    <div>
      <div className="flex flex-col items-center bg-gray-100 absolute w-[85%] h-[80%] rounded opacity-[.97]">
        <p
          className="absolute top-4 right-6 font-bold cursor-pointer text-xl"
          onClick={() => {
            state.setShowSearch(false)
        }}
        >
          X
        </p>
        <h2 className="text-2xl mt-10">Search your Todo</h2>
        <input
          type="text"
          className=" p-3 m-3 w-1/3"
          placeholder="Enter here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-purple-700 text-white rounded px-6 py-1 text-xl"
          onClick={handleclick}
        >
          Search
        </button>
        {state.showError ? "No Todo found" : 
        state.showResult 
        ? <div className="self-start">
          <SearchResult />
          </div> : ""}
      </div>
      
    </div>
  );
}

export default Search;