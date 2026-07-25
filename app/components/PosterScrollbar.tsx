"use client";

import {
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const SCROLL_MARKS = [
  { id: "top", label: "Home", shortLabel: "01" },
  { id: "work", label: "Work", shortLabel: "02" },
  { id: "about", label: "About", shortLabel: "03" },
  { id: "stack", label: "Stack", shortLabel: "04" },
  { id: "contact", label: "Contact", shortLabel: "05" },
];

type ScrollMark = (typeof SCROLL_MARKS)[number] & { progress: number };

const clamp = (value: number) => Math.min(1, Math.max(0, value));

function getMaxScroll() {
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function instantScrollTo(top: number) {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  window.scrollTo({ top, behavior: "auto" });

  window.requestAnimationFrame(() => {
    root.style.scrollBehavior = previousScrollBehavior;
  });
}

function getDocumentTop(id: string) {
  if (id === "top") {
    return 0;
  }

  const element = document.getElementById(id);

  return element ? element.getBoundingClientRect().top + window.scrollY : 0;
}

export function PosterScrollbar() {
  const railRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const [activeLabel, setActiveLabel] = useState("Home");
  const [marks, setMarks] = useState<ScrollMark[]>(
    SCROLL_MARKS.map((mark) => ({ ...mark, progress: 0 })),
  );

  const updateScrollState = useCallback(() => {
    const maxScroll = getMaxScroll();
    const nextProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    const currentAnchor = window.scrollY + window.innerHeight * 0.34;
    let nextActiveLabel = "Home";

    const nextMarks = SCROLL_MARKS.map((mark) => {
      const top = getDocumentTop(mark.id);

      if (currentAnchor >= top) {
        nextActiveLabel = mark.label;
      }

      return {
        ...mark,
        progress: maxScroll > 0 ? clamp(top / maxScroll) : 0,
      };
    });

    setCanScroll(maxScroll > 24);
    setProgress(clamp(nextProgress));
    setActiveLabel(nextActiveLabel);
    setMarks(nextMarks);
  }, []);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current !== null) {
      return;
    }

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      updateScrollState();
    });
  }, [updateScrollState]);

  useEffect(() => {
    document.documentElement.classList.add("has-poster-scrollbar");
    scheduleUpdate();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("orientationchange", scheduleUpdate);

    return () => {
      document.documentElement.classList.remove("has-poster-scrollbar");
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("orientationchange", scheduleUpdate);

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [scheduleUpdate]);

  const scrollToProgress = useCallback((nextProgress: number) => {
    instantScrollTo(getMaxScroll() * clamp(nextProgress));
  }, []);

  const scrollFromPointer = useCallback(
    (clientY: number) => {
      const rail = railRef.current;

      if (!rail) {
        return;
      }

      const rect = rail.getBoundingClientRect();
      scrollToProgress((clientY - rect.top) / rect.height);
    },
    [scrollToProgress],
  );

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || !event.isPrimary) {
      return;
    }

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    draggingRef.current = true;
    setIsDragging(true);
    scrollFromPointer(event.clientY);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) {
      return;
    }

    event.preventDefault();
    scrollFromPointer(event.clientY);
  };

  const stopDragging = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) {
      return;
    }

    draggingRef.current = false;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const scrollByAmount = useCallback((amount: number) => {
    instantScrollTo(window.scrollY + amount);
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const viewportStep = window.innerHeight * 0.78;
    const lineStep = 96;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        scrollByAmount(lineStep);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        scrollByAmount(-lineStep);
        break;
      case "PageDown":
        event.preventDefault();
        scrollByAmount(viewportStep);
        break;
      case "PageUp":
        event.preventDefault();
        scrollByAmount(-viewportStep);
        break;
      case "Home":
        event.preventDefault();
        instantScrollTo(0);
        break;
      case "End":
        event.preventDefault();
        instantScrollTo(getMaxScroll());
        break;
      default:
        break;
    }
  };

  const jumpToMark = (id: string) => {
    window.scrollTo({
      top: getDocumentTop(id),
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  const style = useMemo(
    () =>
      ({
        "--poster-scroll-progress": progress,
        "--poster-scroll-progress-percent": `${progress * 100}%`,
      }) as CSSProperties,
    [progress],
  );

  return (
    <aside
      className={`poster-scrollbar${isDragging ? " is-dragging" : ""}${
        canScroll ? "" : " is-hidden"
      }`}
      aria-label="Page section scrollbar"
      style={style}
    >
      <div
        ref={railRef}
        className="poster-scrollbar__rail"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        <div className="poster-scrollbar__fill" aria-hidden="true" />

        {marks.map((mark) => (
          <button
            key={mark.id}
            type="button"
            className={`poster-scrollbar__mark${
              mark.label === activeLabel ? " is-active" : ""
            }`}
            style={
              {
                "--poster-mark-progress-percent": `${mark.progress * 100}%`,
              } as CSSProperties
            }
            aria-label={`Jump to ${mark.label}`}
            data-label={mark.label}
            onClick={(event) => {
              event.stopPropagation();
              jumpToMark(mark.id);
            }}
          >
            <span aria-hidden="true">{mark.shortLabel}</span>
          </button>
        ))}

        <button
          type="button"
          className="poster-scrollbar__thumb"
          role="scrollbar"
          aria-label={`Page scroll, currently ${Math.round(progress * 100)}% through ${activeLabel}`}
          aria-controls="page-scroll-root"
          aria-orientation="vertical"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
          onKeyDown={handleKeyDown}
          onPointerDown={(event) => {
            event.currentTarget.focus();
          }}
        />
      </div>
    </aside>
  );
}
