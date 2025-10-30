"use client";
import Image from "next/image";
import { useRef } from "react";
import { createList } from "../actions/createList";
import edit from "../../public/edit_icon.svg";
import plus from "../../public/plus_add_icon.svg";
const ICON_DIMENSION = 30;
function NewList() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <form
        action={createList}
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            onClick={handleClick}
          >
            <Image
              src={plus}
              alt="an icon"
              width={ICON_DIMENSION}
              height={ICON_DIMENSION}
            />
            <p style={{ fontSize: "1.2rem", marginLeft: "5px" }}>New List</p>
            <button
              ref={buttonRef}
              type={"submit"}
              style={{
                display: "none",
              }}
            >
              submit
            </button>
          </div>
          <Image
            style={{
              marginRight: "15px",
            }}
            src={edit}
            alt="an icon"
            width={ICON_DIMENSION}
            height={ICON_DIMENSION}
          />
        </div>
      </form>
    </>
  );
  function handleClick() {
    if (!buttonRef.current) return;
    buttonRef.current.click();
  }
}
export default NewList;
