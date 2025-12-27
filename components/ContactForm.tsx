"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";
import { ZodError } from "zod";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: keyof ContactFormData, value: string) => {
    try {
      contactFormSchema.shape[field].parse(value);
      setErrors(prev => ({ ...prev, [field]: undefined }));
    } catch (error) {
      if (error instanceof ZodError) {
        setErrors(prev => ({
          ...prev,
          [field]: error.issues[0]?.message
        }));
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));

    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const validation = contactFormSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: FormErrors = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as keyof FormErrors] = issue.message;
        }
      });
      setErrors(fieldErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          toast.error("Too many requests", {
            description: "Please wait a while before sending another message.",
          });
        } else if (response.status === 400 && data.fields) {
          setErrors(data.fields);
          toast.error("Please fix the errors in the form");
        } else {
          throw new Error(data.error || "Failed to send message");
        }
        return;
      }

      toast.success("Message sent successfully!", {
        description: "We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message", {
        description: "Please try again later or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-black dark:text-white"
        >
          Name
        </label>
        <Input
          id="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          onBlur={(e) => validateField("name", e.target.value)}
          aria-invalid={!!errors.name}
          disabled={isSubmitting}
          className={errors.name ? "border-destructive" : ""}
        />
        {errors.name && (
          <p className="text-sm text-destructive" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-black dark:text-white"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={(e) => validateField("email", e.target.value)}
          aria-invalid={!!errors.email}
          disabled={isSubmitting}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && (
          <p className="text-sm text-destructive" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-black dark:text-white"
        >
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Your message..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={(e) => validateField("message", e.target.value)}
          aria-invalid={!!errors.message}
          disabled={isSubmitting}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && (
          <p className="text-sm text-destructive" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Mail className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
