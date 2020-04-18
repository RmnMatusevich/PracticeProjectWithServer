import React from "react";
import CollageItem from "./CollageItem";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCollageThunk,
  setDescriptionThunk,
  setUserInputThunk,
  setImageThunk,
  setTittleThunk,
} from "../redux/actions/collageActions";
import obj from "./collageObject";
import getCollageAPI from "../requests/getCollageAPI";

import axios from "axios";

function Collage() {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.collage.collageImage);
  const tittle = useSelector((state) => state.collage.collageTittle);
  const description = useSelector((state) => state.collage.collageDescription);
  const collage = useSelector((state) => state.collage.collageCollage);

  useEffect(() => {
    getCollageAPI().then((res) => dispatch(setCollageThunk(res.collage)));
  }, []);

  const handleChange = (input) => {
    dispatch(setUserInputThunk(input));
    axios.post("/searchCollage", { input }).then((res) => {
      dispatch(setCollageThunk(res.data));
    });
  };

  const btnClick = () => {
    axios.post("/addCollage", { image, tittle, description }).then((res) => {
      dispatch(setCollageThunk(res.data.collage));
    });
  };
  return (
    <React.Fragment>
      <form id="search">
        <label id="search-label">Search</label>
        <input
          type="search"
          id="search-input"
          onChange={(event) => handleChange(event.target.value)}
        />
      </form>
      <form id="adding-collage">
        <label>Upload photo</label>
        <input
          id="photo-src"
          onChange={(event) => dispatch(setImageThunk(event.target.value))}
        ></input>
        <label>Tittle</label>
        <input
          id="title-input"
          onChange={(event) => dispatch(setTittleThunk(event.target.value))}
        ></input>
        <label>Description</label>
        <input
          id="description-input"
          onChange={(event) =>
            dispatch(setDescriptionThunk(event.target.value))
          }
        ></input>
        <button
          id="submit-button"
          type="button"
          onClick={() => {
            btnClick();
          }}
        >
          Submit
        </button>
      </form>{" "}
      <div className="collage">
        {collage.map((i) => {
          return (
            <CollageItem
              src={i.src}
              tittle={i.tittle}
              description={i.description}
              key={obj.collage.indexOf(i) * Math.random()}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Collage;
