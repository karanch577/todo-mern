import { useState } from "react";
import SearchContext from "./SearchContext";

function SearchProvider(props) {
    const [showSearch, setShowSearch] = useState(false)
    const [result, setResult] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [showError, setShowError] = useState(false)
    return (
        <SearchContext.Provider value={{
            showSearch,
            setShowSearch,
            showResult,
            setShowResult,
            result,
            setResult,
            showError,
            setShowError
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchProvider