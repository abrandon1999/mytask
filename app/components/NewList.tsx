import Image from "next/image";
import Link from "next/link";
import plus from "../../public/plus_add_icon.svg";
const ICON_DIMENSION = 30;
function NewList() {
  return (
    <Link href={"/newlist"}>
      <div
        style={{
          position: "fixed",
          bottom: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={plus}
            alt="icon"
            width={ICON_DIMENSION}
            height={ICON_DIMENSION}
          />

          <p style={{ fontSize: "1.2rem", marginLeft: "5px" }}>New List</p>
        </div>
      </div>
    </Link>
  );
}

export default NewList;
