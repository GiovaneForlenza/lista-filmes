"use client";
import { createContext, useEffect, useState,  useContext } from "react";
import React from "react";
// import { MovieContext } from "@/app/contexts/MovieContext";

// Create the context
export const ModalContext = createContext();

// Create a provider component
export const ModalContextProvider = (props) => {
  const dialogRef = React.createRef();

  
  // const { selectedMovie, setSelectedMovie } = useContext(MovieContext);

  // useEffect(() => {
  //   if (selectedMovie === undefined) return;
  //   alert(selectedMovie.title);

  //   dialogRef.current?.showModal();
  //   dialogRef.current?.addEventListener("close", closeModal);
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     dialogRef.current?.removeEventListener("close", closeModal);
  //   };
  // }, [selectedMovie]);

  function closeModal() {
    dialogRef.current?.close();
    setSelectedMovie(undefined);
    document.body.style.overflow = "";
  }
  function openModal(selectedMovie) {
    if (selectedMovie) {
      console.log(selectedMovie);

      dialogRef.current?.showModal();
    }
  }

  return (
    <ModalContext.Provider value={{ dialogRef, closeModal, openModal }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
