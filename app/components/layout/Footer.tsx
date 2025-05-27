
import React from "react";
import Image from 'next/image'; // Import Next.js Image component

// Assuming you have social icons, e.g., from lucide-react or custom SVGs
// import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { 
      title: "Company", 
      links: [
        { name: "About", href: "#about" },
        { name: "Team", href: "#team" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" }
      ] 
    },
    { 
      title: "Services", 
      links: [
        { name: "Web Development", href: "#services" },
        { name: "Mobile Apps", href: "#services" },
        { name: "UI/UX Design", href: "#services" },
        { name: "Consulting", href: "#services" }
      ] 
    },
    { 
      title: "Resources", 
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "FAQ", href: "#faq" },
        { name: "Privacy Policy", href: "#privacy" }
      ] 
    }
  ];
  
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and Description */} 
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <Image 
                src="/logo.png" 
                alt="Msolutions Logo" 
                width={150} // Adjust width as needed
                height={40} // Adjust height as needed
                className="h-auto" // Maintain aspect ratio
              />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Delivering cutting-edge software solutions and digital experiences that transform businesses.
            </p>
            <div className=" mt-6 space-x-4 hidden">
              {/* Social Media Icons */}
              {[
                {
                  name: "Instagram",
                  href: "#", // Replace with your Instagram link
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.27.058 2.15.294 2.91.598.81.32 1.49.742 2.18 1.43s.99 1.37 1.31 2.18c.304.76.54 1.64.598 2.91.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.27-.294 2.15-.598 2.91-.32.81-.742 1.49-1.43 2.18s-1.37.99-2.18 1.31c-.76.304-1.64.54-2.91.598-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.27-.058-2.15-.294-2.91-.598-.81-.32-1.49-.742-2.18-1.43s-.99-1.37-1.31-2.18c-.304-.76-.54-1.64-.598-2.91-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.27.294-2.15.598-2.91.32.81.742 1.49 1.43-2.18s1.37-.99 2.18-1.31c.76-.304 1.64-.54 2.91-.598C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.474.012-4.69.068-1.19.054-1.91.267-2.49.485-.65.24-1.12.56-1.62.96-.5.4-.83.87-.97 1.62-.22.58-.43 1.3-.48 2.49-.06 1.21-.07 1.57-.07 4.69s.01 3.48.07 4.69c.05 1.19.26 1.91.48 2.49.14.75.47 1.22.97 1.62.5.4.97.72 1.62.96.58.22 1.3.43 2.49.48 1.21.06 1.57.07 4.69.07s3.48-.01 4.69-.07c1.19-.05 1.91-.26 2.49-.48.75-.14 1.22-.47 1.62-.97.4-.5.72-.97.96-1.62.22-.58.43-1.3.48-2.49.06-1.21.07-1.57.07-4.69s-.01-3.48-.07-4.69c-.05-1.19-.26-1.91-.48-2.49-.14-.75-.47-1.22-.97-1.62-.4-.5-.87-.83-1.62-.97-.58-.22-1.3-.43-2.49-.48-1.21-.06-1.57-.07-4.69-.07zm0 3.678c-2.94 0-5.32 2.38-5.32 5.32s2.38 5.32 5.32 5.32 5.32-2.38 5.32-5.32-2.38-5.32-5.32-5.32zm0 8.84c-1.94 0-3.52-1.58-3.52-3.52s1.58-3.52 3.52-3.52 3.52 1.58 3.52 3.52-1.58 3.52-3.52 3.52zm4.908-8.21a1.21 1.21 0 110-2.418 1.21 1.21 0 010 2.418z"/>
                    </svg>
                  )
                },
                {
                  name: "Telegram",
                  href: "#", // Replace with your Telegram link
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M9.78 18.65l.28-4.23-7.68-2.62c-.77-.27-.77-1.43.05-1.72l16.34-6.35c.79-.31 1.59.38 1.33 1.26l-2.99 14.13c-.25.92-1.13 1.18-1.78.53l-4.1-3.71-1.93 1.83c-.26.26-.74.01-.82-.31z"/>
                    </svg>
                  )
                },
                {
                  name: "X",
                  href: "#", // Replace with your X link
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )
                },
                {
                  name: "TikTok",
                  href: "#", // Replace with your TikTok link
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-.81 1.19-1.97 2.03-3.35 2.43-1.35.39-2.78.46-4.16.19-.9-.17-1.77-.49-2.56-.93-.74-.41-1.39-.96-1.92-1.62-.57-.68-.96-1.47-1.15-2.33-.14-.63-.16-1.28-.16-1.93.02-2.65.01-5.3-.01-7.94-.01-1.06.28-2.13.83-3.06.54-.94 1.32-1.68 2.26-2.19.92-.49 1.94-.73 2.97-.73 1.05-.01 2.11.01 3.15.02Z"/>
                    </svg>
                  )
                }
              ].map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out p-2 bg-muted/30 hover:bg-muted/60 rounded-full flex items-center justify-center"
                  aria-label={social.name}
                >
                  {social.icon} 
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Links - Adjusted for better spacing and modern look */} 
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-5 text-base">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out text-sm hover:underline underline-offset-4"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Footer */} 
        <div className="pt-8 mt-10 border-t border-border/70 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Msolutions. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-4 sm:space-x-6">
            <a href="#terms" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out hover:underline underline-offset-2">
              Terms of Service
            </a>
            <a href="#privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out hover:underline underline-offset-2">
              Privacy Policy
            </a>
            <a href="#cookies" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out hover:underline underline-offset-2">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
