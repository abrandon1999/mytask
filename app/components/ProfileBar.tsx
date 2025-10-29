import Image from "next/image";
import profilePic from "../../public/user_photo_account_icon.svg";
import searchIcon from "../../public/search_sharp_icon.svg";
const ICON_DIMENSION = 30;
const FONTSIZE = "1.2rem";
export default function ProfileBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src={profilePic}
          alt="placeholder icon for profile picture"
          width={ICON_DIMENSION}
          height={ICON_DIMENSION}
        />
        <p style={{ marginLeft: "10px", fontSize: FONTSIZE }}>Your Name Here</p>
      </div>
      <Image
        src={searchIcon}
        alt="search icon"
        width={ICON_DIMENSION}
        height={ICON_DIMENSION}
      />
    </div>
  );
}
