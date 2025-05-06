import React from 'react';
import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  href, 
  variant = 'primary', 
  children,
  className = ''
}) => {
  const baseStyles = "inline-block px-6 py-3 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-4";
  
  const variantStyles = {
    primary: "bg-[#EBE8DB] hover:bg-[#dedbd0] text-[#3A0519] focus:ring-[#EBE8DB]/50",
    secondary: "bg-[#EBE8DB] hover:bg-[#dedbd0] text-[#3A0519] focus:ring-[#EBE8DB]/50"
  };

  // Use Next.js Link for internal navigation (starts with / or #)
  if (href.startsWith('/') || href.startsWith('#')) {
    return (
      <Link 
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        prefetch={true}
        passHref
      >
        {children}
      </Link>
    );
  }
  
  // Use regular anchor tag for external links
  return (
    <a 
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default CTAButton;
