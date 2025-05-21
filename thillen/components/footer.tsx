import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex items-center justify-center">
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          © {currentYear} Thomas Hillenmeyer. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
