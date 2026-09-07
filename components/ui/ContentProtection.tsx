"use client";

import { useEffect } from "react";

/**
 * ContentProtection
 * - Prevents copying, cutting, and dragging of text and images.
 * - Prevents right-click context menu (inspect / save / copy).
 * - Disables developer tools shortcuts (F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S, Ctrl+P, etc.).
 * - Traps devtools inspection with dynamic debugger pause when opened.
 * - Preserves legitimate user interactions inside form inputs and textareas.
 */
export default function ContentProtection() {
  useEffect(() => {
    // 1. Disable Right-Click Context Menu (except on form inputs)
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }
      e.preventDefault();
      return false;
    };

    // 2. Disable Copy and Cut actions
    const handleCopyCut = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }
      e.preventDefault();
      return false;
    };

    // 3. Disable Selection Start
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }
      e.preventDefault();
      return false;
    };

    // 4. Disable Dragging of images and content
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }
      e.preventDefault();
      return false;
    };

    // 5. Block DevTools and Source-Inspection Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = typeof navigator !== "undefined" && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      const isCmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;
      const target = e.target as HTMLElement | null;
      const isFormInput =
        target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

      // F12 (DevTools)
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+Shift+I / Cmd+Opt+I (Developer Tools)
      // Ctrl+Shift+J / Cmd+Opt+J (Console)
      // Ctrl+Shift+C / Cmd+Opt+C (Inspect Element)
      // Ctrl+Shift+K (Firefox Web Console)
      if (
        (isCmdOrCtrl && e.shiftKey && ["I", "i", "J", "j", "C", "c", "K", "k"].includes(e.key)) ||
        (isMac && e.metaKey && e.altKey && ["I", "i", "J", "j", "C", "c"].includes(e.key))
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+U / Cmd+U (View Page Source)
      if (isCmdOrCtrl && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+S / Cmd+S (Save Page)
      if (isCmdOrCtrl && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+P / Cmd+P (Print Page / Save to PDF)
      if (isCmdOrCtrl && (e.key === "p" || e.key === "P")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Block Ctrl+C (Copy), Ctrl+X (Cut), Ctrl+A (Select All) outside form fields
      if (
        !isFormInput &&
        isCmdOrCtrl &&
        ["c", "C", "x", "X", "a", "A"].includes(e.key)
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // 6. Active DevTools Trap (triggers debugger pause when DevTools is opened)
    const devToolsInterval = setInterval(() => {
      // If devtools window opened, pause on debugger statement
      try {
        const check = Function("debugger");
        check();
      } catch {}
    }, 1000);

    // Attach listeners
    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    document.addEventListener("copy", handleCopyCut, { capture: true });
    document.addEventListener("cut", handleCopyCut, { capture: true });
    document.addEventListener("dragstart", handleDragStart, { capture: true });
    document.addEventListener("selectstart", handleSelectStart, { capture: true });
    window.addEventListener("keydown", handleKeyDown, { capture: true });

    return () => {
      clearInterval(devToolsInterval);
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      document.removeEventListener("copy", handleCopyCut, { capture: true });
      document.removeEventListener("cut", handleCopyCut, { capture: true });
      document.removeEventListener("dragstart", handleDragStart, { capture: true });
      document.removeEventListener("selectstart", handleSelectStart, { capture: true });
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
    };
  }, []);

  return null;
}
