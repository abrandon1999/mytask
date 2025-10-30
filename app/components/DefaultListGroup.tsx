import sun from "../../public/sun_icon.svg";
import star from "../../public/star_icon.svg";
import plan from "../../public/calendar_schedule_icon.svg";
import user from "../../public/user_icon.svg";
import flag from "../../public/flag_location_icon.svg";
import home from "../../public/home_checkmark_regular_icon.svg";
import TaskList from "./TaskList";

const defaultList = [
  {
    id: 1,
    icon: sun,
    alt: "an sun icon",
    title: "My Day",
    count: 4,
  },
  { id: 2, icon: star, alt: "a star icon", title: "Important", count: 1 },
  { id: 3, icon: plan, alt: "a planner icon", title: "Planned", count: 1 },
  { id: 4, icon: user, alt: "a user icon", title: "Assigned to Me", count: 1 },
  { id: 5, icon: flag, alt: "a flag icon", title: "Flagged Email", count: 1 },
  { id: 6, icon: home, alt: "home Icon", title: "Tasks", count: 1 },
];
function DefaultListGroup() {
  return (
    <div
      style={{
        borderBottom: "1px solid #555",
      }}
    >
      {defaultList.map((list) => (
        <TaskList
          key={list.id}
          title={list.title}
          icon={list.icon}
          count={list.count}
        />
      ))}
    </div>
  );
}

export default DefaultListGroup;
