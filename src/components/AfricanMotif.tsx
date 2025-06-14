
import React from "react";

export default function AfricanMotif() {
  // Subtle geometric pattern inspired by African fabrics
  return (
    <svg width="100%" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="motif" width="60" height="80" patternUnits="userSpaceOnUse">
          <rect width="60" height="80" fill="#FFD700" />
          <polygon points="30,10 50,70 10,70" fill="#0056b3" opacity="0.12" />
          <circle cx="30" cy="40" r="7" fill="#0056b3" opacity="0.10"/>
        </pattern>
      </defs>
      <rect width="1440" height="80" fill="url(#motif)" />
    </svg>
  );
}
