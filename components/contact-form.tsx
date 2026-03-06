"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Send, X } from "lucide-react";
import { Input } from "@/components/ui/input";

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Ensure portal works properly
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setSubmitted(false);
          setIsOpen(false);
        }, 2500);
      } else {
        console.error("Failed to send email:", result.error);
        alert(result.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full sm:w-auto rounded-xl border border-primary bg-primary/10 px-6 py-3 text-sm font-mono text-primary transition-all hover:bg-primary hover:text-primary-foreground"
      >
        Get In Touch →
      </button>

      {/* Modal via Portal */}
      {mounted &&
        isOpen &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-10 overflow-y-auto">
              <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl">

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground hover:bg-secondary"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Header */}
                <div className="border-b border-border/50 px-6 py-6">
                  <h2 className="text-xl font-bold">Get In Touch</h2>
                  <p className="text-sm text-muted-foreground">
                    Send me a message and I’ll respond quickly.
                  </p>
                </div>

                {/* Body */}
                <div className="px-6 py-6">
                  {submitted ? (
                    <div className="text-center space-y-4">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Send className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Message sent successfully
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm mb-1">Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm mb-1">Email</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm mb-1">Subject</label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm mb-1">Message</label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
}