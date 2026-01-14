
import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const ContactsDownloadsSection: React.FC = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: <Instagram className="w-5 h-5" />,
    },
  ];

  return (
    <div id="contacts-downloads" className="w-full h-full flex flex-col justify-center">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have questions about our platform? We'd love to hear from you and help you get started.
            </p>
            
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline hover:text-primary transition-colors flex items-center"
                >
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Download Our App</h2>
            <p className="text-muted-foreground mb-8">
              Get the full Loyalist experience on your mobile device. Available for iOS and Android.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-12"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsDownloadsSection;
