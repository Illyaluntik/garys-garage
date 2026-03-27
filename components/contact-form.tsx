"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"
import { phoneFormatted, phoneRaw } from "@/constants/contact-info.const"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-lg border border-primary bg-primary/5 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <CheckCircle className="h-8 w-8" />
          </div>
        </div>
        <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-2">
          Message Sent!
        </h3>
        <p className="text-muted-foreground font-[family-name:var(--font-inter)]">
          Thank you for contacting Gary&apos;s Garage. We&apos;ll get back to you as soon as possible.
        </p>
        <p className="mt-4 text-sm text-primary font-semibold font-[family-name:var(--font-inter)]">
          For immediate assistance, call {phoneFormatted}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold uppercase tracking-wide text-foreground mb-2"
        >
          Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="bg-card border-border text-foreground placeholder:text-muted-foreground font-[family-name:var(--font-inter)]"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold uppercase tracking-wide text-foreground mb-2"
        >
          Phone
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="(555) 555-5555"
          className="bg-card border-border text-foreground placeholder:text-muted-foreground font-[family-name:var(--font-inter)]"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold uppercase tracking-wide text-foreground mb-2"
        >
          Email <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="bg-card border-border text-foreground placeholder:text-muted-foreground font-[family-name:var(--font-inter)]"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold uppercase tracking-wide text-foreground mb-2"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help you?"
          className="bg-card border-border text-foreground placeholder:text-muted-foreground font-[family-name:var(--font-inter)] resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide py-6"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            <Send className="h-5 w-5 mr-2" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center font-[family-name:var(--font-inter)]">
        For emergency service, please call us directly at{" "}
        <a href={`tel:${phoneRaw}`} className="text-primary hover:underline">
          {phoneFormatted}
        </a>
      </p>
    </form>
  )
}
