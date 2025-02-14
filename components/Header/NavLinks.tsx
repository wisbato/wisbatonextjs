"use client"

import { useEffect, useState } from 'react';
// import './Header.css';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useFetchMetaTags, useFetchNavLinks } from '@/Hooks/useFetchMetaTags';
import Skeleton from 'react-loading-skeleton';
// import { Link, useLocation } from 'react-router-dom';

const NavLinks = () => {
  const params = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { navLinks: fetchedNavLinks, isLoading, error } = useFetchNavLinks() as any

  console.log("navlink: ", fetchedNavLinks)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition >= 77);

      if (scrollPosition !== 77) {
        setIsOpen(false)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    setScrolled(false)
  };

  // const navLinks = [
  //   { href: "/about", text: "about" },
  //   { href: "/works", text: "works" },
  //   { href: "/services", text: "services" },
  //   { href: "/team", text: "team" },
  //   { href: "/careers", text: "careers" },
  //   { href: "/blogs", text: "blogs" },
  // ];

  // const renderLinks = (isDropdown = false) =>
  //   navLinks.map(({ href, text }, index) => {
  //     const isActive = params?.startsWith(href);
  //     return (
  //       <Link onClick={() => window.scrollTo(0, 0)} key={index} href={href} className={`nav-link${isDropdown ? "-res" : ""}`} style={{ color: isActive ? "#f7931e" : "" }}>{text}</Link>
  //     );
  //   });

  const renderLinks = (isDropdown = false) =>
    fetchedNavLinks.filter((item: { name: string; status: boolean }) => item.name !== "Home" && item.name !== "Contact" && item.status === true).map(({ name }, index) => {
      const isActive = params?.startsWith(name?.toLowerCase());

      return (
        <Link onClick={() => window.scrollTo(0, 0)} key={index} href={name.toLowerCase()} className={`nav-link${isDropdown ? "-res" : ""}`} style={{ color: isActive ? "#f7931e" : "" }}>{name}</Link>
      );
    });

  return (
    <div className='header-nav-links-section'>
      <div className='header-nav-links' >
        <div className={`header-rest-links ${scrolled ? "hide" : "show"}`}>
          {renderLinks()}
          {/* {isLoading ? Array.from({ length: 5 }).map((_, i) => <Link href={""} onClick={() => window.scrollTo(0, 0)} key={i} className={`nav-link${true ? "-res" : ""}`} ><Skeleton width={70} /></Link>) : renderLinks()} */}
        </div>
        <div style={{ display: scrolled ? "unset" : "unset" }} className={`header-menu-icon ${isOpen ? "active" : ""} ${scrolled ? "show" : "hide"}`} >
          <svg onClick={toggleDropdown} width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12H19.5" className="showBurger" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4.5 17.7692H19.5" className="showBurger" strokeLinecap="round" />
            <path d="M4.5 6.23077H19.5" className="showBurger" strokeLinecap="round" />
          </svg>
        </div>
        <div className={`header-contact-link ${isOpen || isLoading ? "active" : ""}`}>
          <Link href="/contact" onClick={() => window.scrollTo(0, 0)} className={`nav-link`} >contact</Link>
        </div>
      </div>

      <div className={`header-drop-down ${isOpen || isLoading ? "active" : ""}`}>
        <div className='dropdown-nav-links'>
          {renderLinks(true)}
        </div>
      </div>
    </div>
  );
};

export default NavLinks;