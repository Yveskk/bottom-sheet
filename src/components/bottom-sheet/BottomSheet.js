import React, { useEffect, useState, useRef } from "react";

const BottomSheet = ({ open, setOpen, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const sheetContentRef = useRef(null);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartY(e.touches[0].pageY);
    setStartHeight(parseInt(sheetContentRef.current.style.height) || 0);
  };

  useEffect(() => {
    const sheetContent = sheetContentRef.current;

    const handleTouchMove = (e) => {
      if (isDragging) {
        const delta = startY - e.touches[0].pageY;
        const newHeight = startHeight + (delta / window.innerHeight) * 100;
        sheetContent.style.height = `${newHeight}vh`;
      }
    };

    const handleTouchEnd = () => {
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

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, startHeight, startY, setOpen]);

  return (
    <div className={`bottom-sheet ${open && "show"}`}>
      <div className="sheet-overlay" onClick={() => setOpen(false)}></div>
      <div className="content" ref={sheetContentRef}>
        <div className="header">
          <div className="drag-icon" onTouchStart={(e) => handleTouchStart(e)}>
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
