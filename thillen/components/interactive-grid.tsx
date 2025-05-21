"use client";

import React, { useState, useEffect, useRef } from 'react';

const NUM_ROWS = 20;
const NUM_COLS = 30;
const CELL_SIZE = 30;
const INFLUENCE_RADIUS = 150;
const MAX_DISPLACEMENT = CELL_SIZE / 2;

export function InteractiveGridAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    // Add listener to window as the SVG might not fill the whole window
    // and we want to react even if the mouse is outside the SVG initially
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const lines = [];

  // Generate horizontal lines
  for (let i = 0; i <= NUM_ROWS; i++) {
    const y = i * CELL_SIZE;
    let p1 = { x: 0, y };
    let p2 = { x: NUM_COLS * CELL_SIZE, y };

    const distToMouse = Math.abs(y - mousePosition.y);

    if (distToMouse < INFLUENCE_RADIUS) {
      // Perturb points along the line based on mouse X position
      // This is a simplified example; a more complex perturbation would involve iterating points along the line
      // For horizontal lines, we primarily perturb based on mouse Y and affect points based on mouse X
      const displacementFactor = (INFLUENCE_RADIUS - distToMouse) / INFLUENCE_RADIUS;
      
      // Midpoint of the line segment
      const midX = (p1.x + p2.x) / 2;
      
      // Distance from mouse's X to the line's midpoint
      const dxToMid = mousePosition.x - midX;

      if (Math.abs(dxToMid) < INFLUENCE_RADIUS * 2) { // consider wider influence on X for horizontal lines
        const verticalDisplacement = Math.sin(dxToMid / (INFLUENCE_RADIUS * 2) * Math.PI) * MAX_DISPLACEMENT * displacementFactor;
        
        // Create a curve effect by adding a control point
        // For simplicity, we'll just shift the y-coordinate of a new midpoint for a quadratic bezier
        // A true "bend" would be more like: M p1.x p1.y Q midX+dx_offset p1.y+verticalDisplacement p2.x p2.y
        // However, SVG <line> elements don't support curves. We'd need <path>.
        // For now, let's just shift the original line's y for simplicity, acknowledging this isn't a "bend".
        // This simplistic shift will make the line "jump" rather than bend.
        // A proper bend requires converting <line> to <path> elements.
        // Given the constraint of using <line>, we will make a simpler effect:
        // shift the entire line slightly.
        const shift = Math.min(MAX_DISPLACEMENT, displacementFactor * MAX_DISPLACEMENT) * (mousePosition.y > y ? -1 : 1);

        // This will shift the entire line, not bend it.
        // To create a bend, we'd need to segment the line or use path elements.
        // For this iteration, we'll stick to shifting, which is not ideal.
        // A better approach for <line> elements would be to perturb the end points.
        // Let's try perturbing endpoints slightly.
        const yShift = verticalDisplacement;

        // Perturbing endpoints for horizontal lines - this will make them slant
         p1 = { x: p1.x - yShift/2, y: p1.y + yShift/2 }; // Example: make it slant
         p2 = { x: p2.x + yShift/2, y: p2.y - yShift/2 };
      }
    }
    lines.push(<line key={`h-${i}`} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="rgba(100, 100, 100, 0.2)" strokeWidth="1" />);
  }

  // Generate vertical lines
  for (let j = 0; j <= NUM_COLS; j++) {
    const x = j * CELL_SIZE;
    let p1 = { x, y: 0 };
    let p2 = { x, y: NUM_ROWS * CELL_SIZE };
    
    const distToMouse = Math.abs(x - mousePosition.x);

    if (distToMouse < INFLUENCE_RADIUS) {
      const displacementFactor = (INFLUENCE_RADIUS - distToMouse) / INFLUENCE_RADIUS;
      const midY = (p1.y + p2.y) / 2;
      const dyToMid = mousePosition.y - midY;

      if (Math.abs(dyToMid) < INFLUENCE_RADIUS * 2) {
        const horizontalDisplacement = Math.sin(dyToMid / (INFLUENCE_RADIUS*2) * Math.PI) * MAX_DISPLACEMENT * displacementFactor;
        // Perturbing endpoints for vertical lines
        p1 = { x: p1.x + horizontalDisplacement/2, y: p1.y - horizontalDisplacement/2 }; // Example: make it slant
        p2 = { x: p2.x - horizontalDisplacement/2, y: p2.y + horizontalDisplacement/2 };
      }
    }
    lines.push(<line key={`v-${j}`} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="rgba(100, 100, 100, 0.2)" strokeWidth="1" />);
  }

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="300px" // Can be a prop
      viewBox={`0 0 ${NUM_COLS * CELL_SIZE} ${NUM_ROWS * CELL_SIZE}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {lines}
    </svg>
  );
}
