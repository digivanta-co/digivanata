"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { cn } from "@/lib/utils";
import { ServiceIcon, ArrowRight } from "@/components/ui/Icons";
import Link from "next/link";

export interface NavItem {
    label: string;
    href: string;
    desc?: string;
    icon?: string;
    children?: NavItem[];
}

export interface SpotlightNavbarProps {
    items?: NavItem[];
    className?: string;
    onItemClick?: (item: NavItem, index: number) => void;
    defaultActiveIndex?: number;
}

export function SpotlightNavbar({
    items = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Events", href: "#events" },
        { label: "Sponsors", href: "#sponsors" },
        { label: "Pricing", href: "#pricing" },
    ],
    className,
    onItemClick,
    defaultActiveIndex = 0,
}: SpotlightNavbarProps) {
    const navRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
    const [hoverX, setHoverX] = useState<number | null>(null);
    const [isDark, setIsDark] = useState(false);
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    const [ddTop, setDdTop] = useState(0);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const openDropdown = (idx: number) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        const header = navRef.current?.closest(".nav") as HTMLElement | null;
        const rect = (header ?? navRef.current)?.getBoundingClientRect();
        if (rect) setDdTop(rect.bottom);
        setOpenIdx(idx);
    };
    const scheduleClose = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setOpenIdx(null), 150);
    };

    // Refs for the "light" positions so we can animate them imperatively
    const spotlightX = useRef(0);
    const ambienceX = useRef(0);

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = nav.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setHoverX(x);
            // Direct update for immediate feedback (no spring for the mouse itself, feels snappier)
            spotlightX.current = x;
            nav.style.setProperty("--spotlight-x", `${x}px`);
        };

        const handleMouseLeave = () => {
            setHoverX(null);
            // When mouse leaves, spring the spotlight back to the active item
            const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
            if (activeItem) {
                const navRect = nav.getBoundingClientRect();
                const itemRect = activeItem.getBoundingClientRect();
                const targetX = itemRect.left - navRect.left + itemRect.width / 2;

                animate(spotlightX.current, targetX, {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    onUpdate: (v) => {
                        spotlightX.current = v;
                        nav.style.setProperty("--spotlight-x", `${v}px`);
                    }
                });
            }
        };

        nav.addEventListener("mousemove", handleMouseMove);
        nav.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            nav.removeEventListener("mousemove", handleMouseMove);
            nav.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [activeIndex]);

    // Handle the "Ambience" (Active Item) Movement
    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;
        const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);

        if (activeItem) {
            const navRect = nav.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();
            const targetX = itemRect.left - navRect.left + itemRect.width / 2;

            animate(ambienceX.current, targetX, {
                type: "spring",
                stiffness: 200,
                damping: 20,
                onUpdate: (v) => {
                    ambienceX.current = v;
                    nav.style.setProperty("--ambience-x", `${v}px`);
                },
            });
        }
    }, [activeIndex]);

    const handleItemClick = (item: NavItem, index: number) => {
        setActiveIndex(index);
        onItemClick?.(item, index);
    };

    return (
        <div
            className={cn("relative flex justify-center pt-10", className)}
            onMouseLeave={scheduleClose}
        >
            <nav
                ref={navRef}
                className={cn(
                    "spotlight-nav spotlight-nav-bg glass-border spotlight-nav-shadow",
                    "relative h-11 rounded-full transition-all duration-300 overflow-hidden"
                )}
            >
                {/* Content */}
                <ul className="relative flex items-center h-full px-2 gap-0 z-[10]">
                    {items.map((item, idx) => (
                        <li
                            key={idx}
                            className="relative h-full flex items-center justify-center"
                            onMouseEnter={() => (item.children ? openDropdown(idx) : scheduleClose())}
                        >
                            <Link
                                href={item.href}
                                data-index={idx}
                                onClick={(e) => {
                                    if (item.href.startsWith("#")) {
                                        e.preventDefault();
                                    }
                                    handleItemClick(item, idx);
                                }}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full inline-flex items-center gap-1",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-white/30",
                                    // Active vs Inactive Text
                                    activeIndex === idx
                                        ? "text-black dark:text-white"
                                        : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                                )}
                            >
                                {item.label}
                                {item.children && (
                                    <svg
                                        width="9" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"
                                        className={cn("transition-transform duration-300", openIdx === idx && "rotate-180")}
                                    >
                                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                    </svg>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* LIGHTING LAYERS 
           We use CSS variables --spotlight-x and --ambience-x updated by JS
        */}

                {/* 1. The Moving Spotlight (Follows Mouse) */}
                <div
                    className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-[1] opacity-0 transition-opacity duration-300"
                    style={{
                        opacity: hoverX !== null ? 1 : 0,
                        background: `
              radial-gradient(
                120px circle at var(--spotlight-x) 100%, 
                var(--spotlight-color, rgba(0,0,0,0.1)) 0%, 
                transparent 50%
              )
            `
                    }}
                />

                {/* 2. The Active State Ambience (Stays on Active) */}
                <div
                    className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[2]"
                    style={{
                        background: `
                  radial-gradient(
                    60px circle at var(--ambience-x) 0%, 
                    var(--ambience-color, rgba(0,0,0,1)) 0%, 
                    transparent 100%
                  )
                `
                    }}
                />

            </nav>

            {/* Full-width mega panel (for items with children) */}
            {openIdx !== null && items[openIdx]?.children && (
                <>
                    <div
                        className="snav-scrim"
                        style={{ top: ddTop }}
                        onMouseEnter={scheduleClose}
                    />
                    <div
                        className="snav-page"
                        style={{ top: ddTop }}
                        onMouseEnter={() => openDropdown(openIdx)}
                        onMouseLeave={scheduleClose}
                    >
                        <div className="snav-page__inner">
                            <div className="snav-page__intro">
                                <span className="snav-page__eyebrow">Our Services</span>
                                <h3>End-to-end digital growth, under one roof.</h3>
                                <p>From visibility to conversions — pick a service or let us build a custom plan.</p>
                                <Link
                                    href="/contact"
                                    className="snav-page__cta"
                                    onClick={() => {
                                        setOpenIdx(null);
                                    }}
                                >
                                    Book a free call <ArrowRight />
                                </Link>
                            </div>

                            <div className="snav-page__grid">
                                {items[openIdx]!.children!.map((child, ci) => (
                                    <Link
                                        key={ci}
                                        href={child.href}
                                        onClick={(e) => {
                                            if (child.href.startsWith("#")) {
                                                e.preventDefault();
                                                onItemClick?.(child, ci);
                                            }
                                            setOpenIdx(null);
                                        }}
                                        className="snav-page__card"
                                        style={{ animationDelay: `${60 + ci * 45}ms` }}
                                    >
                                        {child.icon && (
                                            <span className="snav-page__ic">
                                                <ServiceIcon name={child.icon} />
                                            </span>
                                        )}
                                        <span className="snav-page__txt">
                                            <strong>{child.label}</strong>
                                            {child.desc && <small>{child.desc}</small>}
                                        </span>
                                        <span className="snav-page__arrow"><ArrowRight /></span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* STYLE BLOCK for Dynamic Colors 
        This allows us to switch the gradient colors cleanly using Tailwind classes 
        without messy inline conditionals.
      */}
            <style jsx>{`
        nav {
          /* Light Mode Colors: Dark Gray/Black lights */
          --spotlight-color: rgba(0,0,0,0.08);
          --ambience-color: rgba(0,0,0,0.8);
        }
        :global(.dark) nav {
          /* Dark Mode Colors: White lights */
          --spotlight-color: rgba(255,255,255,0.15);
          --ambience-color: rgba(255,255,255,1);
        }
      `}</style>
        </div>
    );
}
