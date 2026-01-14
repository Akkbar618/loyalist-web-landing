
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  const toggleChat = () => {
    if (!isOpen) {
      toast({
        title: "Support Chat",
        description: "Our support team will be with you shortly.",
      });
    }
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <Button
        onClick={toggleChat}
        size="icon"
        variant="secondary"
        className="fixed bottom-12 right-6 rounded-full shadow-lg z-40"
        aria-label="Chat support"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </Button>
      
      {isOpen && (
        <div className="fixed bottom-28 right-6 w-72 bg-background rounded-lg shadow-lg z-40 border border-border/20 animate-fade-in">
          <div className="p-4 border-b border-border/10">
            <h3 className="font-medium">Loyalist Support</h3>
            <p className="text-sm text-muted-foreground">How can we help you today?</p>
          </div>
          <div className="p-4">
            <p className="text-sm mb-4">Our support team is currently offline. Leave a message and we'll get back to you.</p>
            <Button 
              className="w-full" 
              onClick={() => {
                toast({
                  title: "Message Sent",
                  description: "We'll respond to your inquiry soon.",
                });
                setIsOpen(false);
              }}
            >
              Send Message
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
