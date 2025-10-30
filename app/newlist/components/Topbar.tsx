import Link from "next/link";
import Image from "next/image";
import arrow from "../../../public/arrow_right_icon.svg";
const ICON_DIMENSION = 30;
function Topbar() {
  return (
    <Link href={"/"}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          style={{ transform: "rotate(180deg)" }}
          src={arrow}
          alt="back arrow"
          width={ICON_DIMENSION}
        />
        <p style={{ textDecoration: "none", fontSize: "1.2rem" }}>Lists</p>
      </div>
    </Link>
  );
}

export default Topbar;
