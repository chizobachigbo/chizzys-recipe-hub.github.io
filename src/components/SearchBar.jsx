import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState} from "react";
import { useNavigate } from "react-router-dom";



export default function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate(); 

  const submitSearch = () => {
    navigate("/searched/" + input)
  }

  const keyDownHandler = (e) => {
    if(e.key === 'Enter'){
      submitSearch();
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="search for recipe"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={keyDownHandler}
        value={input}
      ></input>
      <button className="btn" onClick={submitSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}
