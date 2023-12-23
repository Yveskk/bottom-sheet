import React, { useEffect, useState, useRef } from "react";

const BottomSheet = ({ open, setOpen, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const sheetContentRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.pageY);
    setStartHeight(parseInt(sheetContentRef.current.style.height) || 0);
  };

  useEffect(() => {
    const sheetContent = sheetContentRef.current;

    const handleMouseMove = (e) => {
      if (isDragging) {
        const delta = startY - e.pageY;
        const newHeight = startHeight + (delta / window.innerHeight) * 100;
        sheetContent.style.height = `${newHeight}vh`;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      const sheetHeight = parseInt(sheetContent.style.height) || 0;

      if (sheetHeight < 25) {
        setOpen(false);
      }

      if (sheetHeight > 75) {
        sheetContent.style.height = "100vh";
      } else {
        sheetContent.style.height = "50vh";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startHeight, startY, setOpen]);

  return (
    <div className={`bottom-sheet ${open && "show"}`}>
      <div className="sheet-overlay" onClick={() => setOpen(false)}></div>
      <div className="content" ref={sheetContentRef}>
        <div className="header">
          <div className="drag-icon" onMouseDown={(e) => handleMouseDown(e)}>
            <span></span>
          </div>
        </div>
        <div className="body">
          <h2>Bottom Sheet Modal</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
