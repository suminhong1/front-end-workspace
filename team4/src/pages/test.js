import React, { useState, useEffect } from "react";

const App = () => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleContextMenu = (event) => {
    event.preventDefault();

    setContextMenuVisible(true);
    setContextMenuPosition({ x: event.clientX, y: event.clientY });
  };

  const closeContextMenu = (event) => {
    if (
      !document.getElementById("contextMenu").contains(event.target) &&
      event.target.id !== "leftClickButton"
    ) {
      setContextMenuVisible(false);
      document.removeEventListener("mousedown", closeContextMenu);
    }
  };

  const executeAction = (action) => {
    // Add your custom functionality here based on the selected action
    alert("Action: " + action);
  };

  useEffect(() => {
    if (contextMenuVisible) {
      document.addEventListener("mousedown", closeContextMenu);
    }

    return () => {
      document.removeEventListener("mousedown", closeContextMenu);
    };
  }, [contextMenuVisible]);

  return (
    <>
      <button id="leftClickButton" onMouseDown={handleContextMenu}>
        Left Click Me
      </button>

      {contextMenuVisible && (
        <div
          id="contextMenu"
          style={{
            display: "block",
            position: "absolute",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            padding: "10px",
            zIndex: 1000,
            left: contextMenuPosition.x + "px",
            top: contextMenuPosition.y + "px",
          }}
        >
          <p onClick={() => executeAction("save")}>Save</p>
          <p onClick={() => executeAction("delete")}>Delete</p>
        </div>
      )}
    </>
  );
};

export default App;
