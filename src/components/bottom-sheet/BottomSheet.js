import React, { useEffect } from 'react';

const BottomSheet = ({ open, setOpen, children }) => {
    useEffect(() => {
        const dragIcon = document.querySelector(".drag-icon");
        const sheetContent = document.querySelector(".content");

        let isDragging = false;
        let startY = 0;

        const handleMouseDown = (e) => {
            isDragging = true;
            startY = e.clientY;
        };

        const handleMouseMove = (e) => {
            if (isDragging) {
                const newHeight = (e.pageY / window.innerHeight) * 100;
                sheetContent.style.height = `${newHeight}vh`;
            }
        };

        const handleMouseUp = () => {
            isDragging = false;
        };

        dragIcon.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            dragIcon.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div className={`bottom-sheet ${open && "show"}`}>
            <div className="sheet-overlay" onClick={() => setOpen(false)}></div>
            <div className="content">
                <div className="header">
                    <div className="drag-icon" >
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
