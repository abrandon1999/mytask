import Topbar from "./components/Topbar";

function NewList() {
  return (
    <div
      style={{
        padding: "5px",
      }}
    >
      <Topbar />
      <input
        autoFocus
        type="text"
        defaultValue={"Untitled list"}
        style={{
          width: "100%",
          padding: "12px",
          border: "2px solid #e0e0e0",
          outline: "none",
          borderRadius: "6px",
          fontSize: "1.2rem",
          color: "#333333",
        }}
      />
    </div>
  );
}

export default NewList;
