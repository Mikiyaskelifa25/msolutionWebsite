"use clinet"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "./../ui/button";
import { useTheme } from "./../ThemeProvider";
import { useLanguage } from "./../LanguageProvider";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./../ui/dropdown-menu";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const flagEmojis = {
    en: "🇺🇸",
    sv: "🇸🇪",
    am: "🇪🇹",
  };
  
  const languageNames = {
    en: "English",
    sv: "Svenska",
    am: "አማርኛ",
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-background/80 backdrop-blur-lg border-b border-muted/20 shadow-sm' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-20 flex items-center space-x-2">
          <Image src="/logo.png" width={50} height={50} alt="Msolutions Logo" className="rounded-sm"/>
          <span className="text-xl font-semibold">Msolutions</span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out ${
                scrolled ? 'text-foreground hover:bg-muted/50 hover:text-primary' : 'text-primary-foreground hover:bg-white/10 hover:text-white'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
          
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={`ml-2 rounded-full p-2 transition-colors duration-200 ease-in-out ${
              scrolled ? 'text-foreground hover:bg-muted/60' : 'text-primary-foreground hover:bg-white/20'
            }`}
          >
            {theme === 'dark' ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className={`ml-2 rounded-full p-2 transition-colors duration-200 ease-in-out ${
                  scrolled ? 'text-foreground hover:bg-muted/60' : 'text-primary-foreground hover:bg-white/20'
                }`}
              >
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">{t('languageSwitch')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem onClick={() => setLanguage('en')} className="flex gap-2 cursor-pointer">
                <span>{flagEmojis.en}</span> {languageNames.en}
                {language === 'en' && <motion.div layoutId="activeCheck" className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('sv')} className="flex gap-2 cursor-pointer">
                <span>{flagEmojis.sv}</span> {languageNames.sv}
                {language === 'sv' && <motion.div layoutId="activeCheck" className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('am')} className="flex gap-2 cursor-pointer">
                <span>{flagEmojis.am}</span> {languageNames.am}
                {language === 'am' && <motion.div layoutId="activeCheck" className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Contact Button */}
   
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={`rounded-full p-2 transition-colors duration-200 ease-in-out ${scrolled ? 'text-foreground hover:bg-muted/60' : 'text-primary-foreground hover:bg-white/20'}`}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`rounded-full p-2 transition-colors duration-200 ease-in-out ${scrolled ? 'text-foreground hover:bg-muted/60' : 'text-primary-foreground hover:bg-white/20'}`}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/90 backdrop-blur-lg border-b border-muted/20 overflow-hidden"
          >
            <div className="container py-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 rounded-md text-base font-medium text-foreground hover:bg-muted/60 hover:text-primary transition-all duration-200 ease-in-out"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                
                {/* Language Options */}
                <div className="px-4 pt-3 pb-2 flex items-center gap-4 border-t border-muted/20 mt-2">
                  <span className="text-sm text-muted-foreground">{t('languageSwitch')}:</span>
                  <div className="flex gap-2">
                    <Button 
                      variant={language === 'en' ? "secondary" : "ghost"}
                      size="sm" 
                      onClick={() => setLanguage('en')}
                      className="flex items-center gap-1.5 h-8 px-2"
                    >
                      <span>{flagEmojis.en}</span>
                      <span className="text-xs font-normal">EN</span>
                    </Button>
                    <Button 
                      variant={language === 'sv' ? "secondary" : "ghost"}
                      size="sm" 
                      onClick={() => setLanguage('sv')}
                      className="flex items-center gap-1.5 h-8 px-2"
                    >
                      <span>{flagEmojis.sv}</span>
                      <span className="text-xs font-normal">SV</span>
                    </Button>
                    <Button 
                      variant={language === 'am' ? "secondary" : "ghost"}
                      size="sm" 
                      onClick={() => setLanguage('am')}
                      className="flex items-center gap-1.5 h-8 px-2"
                    >
                      <span>{flagEmojis.am}</span>
                      <span className="text-xs font-normal">AM</span>
                    </Button>
                  </div>
                </div>
                
              
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
