import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { contactFormSchema, type ContactForm } from "@shared/schema";
import { personalInfo } from "@/config/portfolio-data";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
              Get In Touch
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan to-neon-green blur-sm" />
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-md p-8 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-neon-cyan/10 rounded-md border border-neon-cyan/30 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-cyan/20 transition-all">
                    <Mail className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-foreground hover:text-neon-cyan transition-colors"
                      data-testid="contact-email"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-neon-blue/10 rounded-md border border-neon-blue/30 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-blue/20 transition-all">
                    <Phone className="w-5 h-5 text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-foreground hover:text-neon-blue transition-colors"
                      data-testid="contact-phone"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-neon-teal/10 rounded-md border border-neon-teal/30 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-teal/20 transition-all">
                    <MapPin className="w-5 h-5 text-neon-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-foreground">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Decoration */}
            <div className="hidden lg:block relative h-64 bg-gradient-to-br from-neon-cyan/10 via-neon-blue/10 to-neon-teal/10 rounded-md overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-cyan/20 rounded-full blur-2xl animate-float" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-neon-blue/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-md p-8 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your name"
                          className="bg-white/5 border-white/10 focus:border-neon-cyan/50 focus:ring-neon-cyan/20 transition-all"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-white/5 border-white/10 focus:border-neon-cyan/50 focus:ring-neon-cyan/20 transition-all"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Your message..."
                          rows={5}
                          className="bg-white/5 border-white/10 focus:border-neon-cyan/50 focus:ring-neon-cyan/20 transition-all resize-none"
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={contactMutation.isPending}
                  className="w-full bg-neon-cyan text-background hover:bg-neon-cyan/90 shadow-[0_0_20px_rgba(34,211,238,0.3)] border border-neon-cyan/50"
                  data-testid="button-submit-contact"
                >
                  {contactMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
