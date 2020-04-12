import React from "react";
import CollageItem from "./CollageItem";
import { useSelector, useDispatch } from "react-redux";
import {
  setCollageThunk,
  setDescriptionThunk,
  setUserInputThunk,
  setImageThunk,
  setTittleThunk,
} from "./redux/actions/collageActions";
import obj from "./collageObject";

function Collage() {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.collage.collageImage);
  const tittle = useSelector((state) => state.collage.collageTittle);
  const description = useSelector((state) => state.collage.collageDescription);
  const collage = useSelector((state) => state.collage.collageCollage);

  const handleChange = (input) => {
    dispatch(setUserInputThunk(input));
    const newCollageObj = [];
    for (let item of obj.collage) {
      if (item.description.toLocaleLowerCase().includes(input)) {
        newCollageObj.push(item);
      }
    }
    dispatch(setCollageThunk(newCollageObj));
  };

  const btnClick = () => {
    let newObj = [...collage];
    obj.collage.push({
      src: image,
      tittle: tittle,
      description: description,
    });
    newObj.push({
      src: image,
      tittle: tittle,
      description: description,
    });
    dispatch(setCollageThunk(newObj));
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
