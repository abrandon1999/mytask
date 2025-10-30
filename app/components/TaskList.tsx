import Image from "next/image";

const ICON_DIMENSION = 30;
const MARGIN_Y = "20px";
const FONTSIZE = "1.2rem";
interface Props {
  title: string;
  icon: any;
  count: number;
}
function TaskList({ title, icon, count }: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: MARGIN_Y,
        marginBottom: MARGIN_Y,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src={icon}
          alt={"task icon"}
          width={ICON_DIMENSION}
          height={ICON_DIMENSION}
        />
        <p style={{ marginLeft: "10px", fontSize: FONTSIZE }}>{title}</p>
      </div>
      <p
        style={{
          marginRight: "10px",
        }}
      >
        {count}
      </p>
    </div>
  );
}

export default TaskList;
