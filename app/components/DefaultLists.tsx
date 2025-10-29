import sun from "../../public/sun_icon.svg";
import star from "../../public/star_icon.svg";
import plan from "../../public/calendar_schedule_icon.svg";
import user from "../../public/user_icon.svg";
import flag from "../../public/flag_location_icon.svg";
import home from "../../public/home_checkmark_regular_icon.svg";

import Image from "next/image";
const ICON_DIMENSION = 30;
const MARGINBOTTOM = "20px";
const FONTSIZE = "1.2rem";
const defaultListArray = [
  {
    id: 1,
    icon: sun,
    alt: "an sun icon",
    name: "My Day",
    count: 4,
  },
  { id: 2, icon: star, alt: "a star icon", name: "Important", count: 1 },
  { id: 3, icon: plan, alt: "a planner icon", name: "Planned", count: 1 },
  { id: 4, icon: user, alt: "a user icon", name: "Assigned to Me", count: 1 },
  { id: 5, icon: flag, alt: "a flag icon", name: "Flagged Email", count: 1 },
  { id: 6, icon: home, alt: "home Icon", name: "Tasks", count: 1 },
];
function DefaultLists() {
  return (
    <div
      style={{
        borderBottom: "1px solid #555",
      }}
    >
      {defaultListArray.map((list) => (
        <div
          key={list.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: MARGINBOTTOM,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src={list.icon}
              alt="icon"
              width={ICON_DIMENSION}
              height={ICON_DIMENSION}
            />
            <p style={{ marginLeft: "10px", fontSize: FONTSIZE }}>
              {list.name}
            </p>
          </div>
          <p
            style={{
              marginRight: "10px",
            }}
          >
            1
          </p>
        </div>
      ))}
    </div>
  );
}

export default DefaultLists;
