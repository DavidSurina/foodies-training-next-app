"use client";

import classes from "./image-picker.module.css";
import { useRef } from "react";

export default function ImagePicker({ label, name }) {
  const inputRef = useRef(null);
  function handlePickClick() {
    inputRef.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          ref={inputRef}
        />
        <button
          className={classes.button}
          onClick={handlePickClick}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
