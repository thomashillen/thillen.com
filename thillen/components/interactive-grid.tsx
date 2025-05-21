"use client";

import React, { useState, useEffect, useRef } from 'react';

const LINE_SPACING = 30;
const LINE_LENGTH = 15; // Length of the line segment

// Define viewBox dimensions
const VIEWBOX_WIDTH = 900; // e.g., 30 columns * 30 spacing
const VIEWBOX_HEIGHT = 300; // e.g., 10 rows * 30 spacing

interface LineData {
  id: string;
  x1: number;
  y1: number;
}

export function InteractiveGridAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [lines, setLines] = useState<LineData[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  // Effect to initialize line positions
  useEffect(() => {
    const newLines: LineData[] = [];
    const numCols = Math.floor(VIEWBOX_WIDTH / LINE_SPACING);
    const numRows = Math.floor(VIEWBOX_HEIGHT / LINE_SPACING);

    for (let i = 0; i <= numRows; i++) {
      for (let j = 0; j <= numCols; j++) {
        const x = j * LINE_SPACING;
        const y = i * LINE_SPACING;
        // Add a small offset to center lines within their "cells" if desired, or start from top-left
        newLines.push({
          id: `line-${i}-${j}`,
          x1: x,
          y1: y,
        });
      }
    }
    setLines(newLines);
  }, []); // Runs once on mount

  // Effect for mouse move
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        // Transform client coordinates to SVG viewBox coordinates
        const svgX = event.clientX - rect.left;
        const svgY = event.clientY - rect.top;
        
        // If viewBox is not 0,0, width,height, we need to scale
        const scaleX = VIEWBOX_WIDTH / rect.width;
        const scaleY = VIEWBOX_HEIGHT / rect.height;

        setMousePosition({
          x: svgX * scaleX,
          y: svgY * scaleY,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // svgRef.current might change if component re-renders, but rect dimensions are important

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="300px" // Fixed height as per original
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      preserveAspectRatio="xMidYMid meet"
      // style={{ border: "1px solid lightgray" }} // Removed temporary border
    >
      <g stroke="rgba(128, 128, 128, 0.6)" strokeWidth="1.5">
        {lines.map((line) => {
          const angleRad = Math.atan2(mousePosition.y - line.y1, mousePosition.x - line.x1);
          const angleDeg = angleRad * (180 / Math.PI);

          return (
            <line
              key={line.id}
              x1={line.x1}
              y1={line.y1}
              x2={line.x1 + LINE_LENGTH} // Line initially points to the right
              y2={line.y1}
              transform={`rotate(${angleDeg} ${line.x1} ${line.y1})`}
            />
          );
        })}
      </g>
    </svg>
  );
}
