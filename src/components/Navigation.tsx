'use client';

import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import DropdownMenu from './DropdownMenu';
import { NAVIGATION_MENU_ITEMS, APP_URL } from './constants/navigation';

// Define proper types for navigation items
type NavigationItem = typeof NAVIGATION_MENU_ITEMS[number];
type DropdownItem = NonNullable<Extract<NavigationItem, { hasDropdown: true }>['dropdownItems']>[number];

interface NavigationProps {
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

export default function Navigation({ 
  mobileMenuOpen, 
  onMobileMenuToggle 
}: NavigationProps) {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedLabel, setMobileExpandedLabel] = useState<string | null>(null);

  // Reusable function to handle hash navigation
  const handleHashNavigation = (href: string, closeMenu: boolean = false) => {
    if (!href.includes('#')) return;

    const [path, hash] = href.split('#');
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const onSamePage = !path || currentPath === path;

    if (onSamePage) {
      const targetElement = document.querySelector(`#${hash}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        if (closeMenu) setTimeout(() => onMobileMenuToggle(), 300);
      }
    } else {
      router.push(href);
      if (closeMenu) setTimeout(() => onMobileMenuToggle(), 100);
    }
  };

  // Reusable function to render navigation item
  const renderNavigationItem = (item: NavigationItem, isMobile: boolean = false) => {
    if (item.hasDropdown) {
      const realHref = item.href;
      return (
        <DropdownMenu
          key={item.label}
          trigger={item.label}
          items={(item as Extract<NavigationItem, { hasDropdown: true }>).dropdownItems || []}
          isOpen={activeDropdown === item.label}
          onToggle={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
          onClose={() => setActiveDropdown(null)}
          className="text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer whitespace-nowrap flex-shrink-0"
          anchorPosition="bottom-left"
          offset={{ x: 0, y: 8 }}
          usePortal={true}
          triggerHref={realHref}
        />
      );
    }

    if (item.href.startsWith('#') || item.href.startsWith('/#')) {
      const commonClasses = isMobile 
        ? "block w-full text-left py-3 px-4 text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
        : "text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer whitespace-nowrap flex-shrink-0";

      return (
        <a 
          key={item.href}
          href={item.href}
          className={commonClasses}
          onClick={(e) => {
            e.preventDefault();
            handleHashNavigation(item.href, isMobile);
          }}
        >
          {item.label}
        </a>
      );
    }

    const commonClasses = isMobile 
      ? "block w-full text-left py-3 px-4 text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
      : "text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer whitespace-nowrap flex-shrink-0";

    return (
      <Link 
        key={item.href}
        href={item.href}
        className={commonClasses}
        onClick={isMobile ? () => onMobileMenuToggle() : undefined}
      >
        {item.label}
      </Link>
    );
  };

  // Reusable function to render dropdown section items for mobile
  const renderDropdownSectionItems = (item: NavigationItem) => {
    if (!item.hasDropdown || !item.dropdownItems) return null;
    const isExpanded = mobileExpandedLabel === item.label;
    
    return (
      <div key={item.label} className="border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between py-2 px-4">
          <Link
            href={item.href}
            className="flex-1 text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            onClick={() => onMobileMenuToggle()}
          >
            {item.label}
          </Link>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMobileExpandedLabel(isExpanded ? null : item.label);
            }}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            aria-expanded={isExpanded}
            aria-label={`Toggle ${item.label} sections`}
          >
            <ChevronDown 
              className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            />
          </button>
        </div>
        
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden bg-gray-50/50 dark:bg-gray-800/30"
            >
              <div className="pl-4 pb-4 space-y-1 mt-1">
                {item.dropdownItems.map((subItem: DropdownItem) => (
                  <a 
                    key={subItem.href}
                    href={subItem.href}
                    className="block w-full text-left py-2 px-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleHashNavigation(subItem.href, true);
                    }}
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      {/* Backdrop Overlay - Blur and Dim Effect */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={onMobileMenuToggle}
          />
        )}
      </AnimatePresence>

      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex justify-between items-center h-16 gap-8">
            {/* Logo and Navigation Links */}
            <div className="flex items-center space-x-8 flex-1 min-w-0">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0">
                <span className="text-xl font-brand bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  COLLAB
                </span>
              </Link>
              
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-8 overflow-x-auto scrollbar-hide flex-1 min-w-0">
                {NAVIGATION_MENU_ITEMS.map((item) => renderNavigationItem(item))}
              </div>
            </div>
            
            {/* CTA Button and Theme Toggle */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* CTA Button (Hidden on Mobile) */}
              <a 
                href={APP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hidden md:inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Start Jamming
              </a>
              
              {/* Mobile Menu Button (Hamburger) */}
              <button 
                onClick={onMobileMenuToggle}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" 
                aria-label="Toggle mobile menu" 
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900 dark:text-gray-100" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900 dark:text-gray-100" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden relative z-50"
              >
                <div className="py-4 space-y-4">
                  {NAVIGATION_MENU_ITEMS.map((item) => 
                    item.hasDropdown 
                      ? renderDropdownSectionItems(item)
                      : renderNavigationItem(item, true)
                  )}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a 
                      href={APP_URL} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full text-center py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Start Jamming
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
