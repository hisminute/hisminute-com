"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

type FormStatus = "idle" | "loading" | "success" | "error" | "rate_limit";

const CATEGORY_OPTIONS = [
  { value: "", label: "Select a category" },
  { value: "healing", label: "Healing" },
  { value: "guidance", label: "Guidance" },
  { value: "family", label: "Family" },
  { value: "anxiety", label: "Anxiety" },
  { value: "salvation", label: "Salvation" },
  { value: "other", label: "Other" },
];

export default function Prayer() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [category, setCategory] = useState("");
  const [consentToContact, setConsentToContact] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [refCode, setRefCode] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/prayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || undefined,
          email: email.trim() || undefined,
          consentToContact: email.trim() ? consentToContact : false,
          request: request.trim(),
          category: category || undefined,
          website: honeypot, // honeypot field
        }),
      });

      const data = await response.json();

      if (response.status === 429 || data.error === "RATE_LIMIT") {
        setStatus("rate_limit");
      } else if (data.ok) {
        setStatus("success");
        setRefCode(data.ref || null);
        setRequest("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

  return (
    <Container className="!max-w-6xl py-12 md:py-20">
      {/* Header + hero image */}
      <section className="mb-10 md:mb-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-10 lg:gap-12">
          <div className="text-center md:text-left pl-6 pt-6">
            <h1 className="mb-4 font-heading text-3xl font-bold text-[var(--foreground)] md:text-4xl lg:text-5xl">
              You are not alone.
            </h1>
            <p className="mx-auto mb-6 max-w-prose text-xl leading-relaxed text-[var(--foreground)]/80 md:mx-0 md:text-2xl">
              Share your prayer request, and we will pray with you in faith and hope.
            </p>
          </div>
          <div className="relative aspect-[1376/768] w-full overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/prayer-hero-100.png"
              alt=""
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mb-8">
        <Card>
          {status === "success" ? (
            <div className="bg-[var(--accent)]/20 border border-[var(--accent)] rounded-lg p-6 text-center space-y-4">
              <p className="text-[var(--foreground)] font-medium leading-relaxed">
                Thank you for reaching out. Your request has been received, and we're praying for you.
              </p>
              <p className="text-[var(--foreground)]/80 leading-relaxed">
                May God strengthen you and steady your heart today.
              </p>
              <p className="text-[var(--foreground)]/90 italic leading-relaxed">
                "The Lord is near to the brokenhearted and saves the crushed in spirit." (Psalm 34:18, ESV)
              </p>
              {refCode && (
                <p className="text-[var(--foreground)]/60 text-sm pt-2">
                  Reference: {refCode}
                </p>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - visually hidden */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  opacity: 0,
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div>
                <p className="text-md text-[var(--foreground)]/60 mb-4">
                  All prayer requests are private and never shared.
                </p>  
                <label
                  htmlFor="request"
                  className="block text-sm font-medium text-[var(--foreground)]/80 mb-2"
                >
                  Prayer request <span className="text-[var(--accent)]">*</span>
                </label>
                <textarea
                  id="request"
                  name="request"
                  required
                  rows={5}
                  minLength={3}
                  maxLength={2000}
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:border-[var(--accent)] focus:bg-white/10 transition-colors resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] disabled:opacity-50"
                  placeholder="Share your prayer request..."
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-[var(--foreground)]/80 mb-2"
                >
                  Category (optional)
                </label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-[var(--foreground)] focus:border-[var(--accent)] focus:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] disabled:opacity-50"
                >
                  {CATEGORY_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[var(--background)] text-[var(--foreground)]">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--foreground)]/80 mb-2"
                >
                  Name (optional)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                  maxLength={100}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:border-[var(--accent)] focus:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--foreground)]/80 mb-2"
                >
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  maxLength={254}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:border-[var(--accent)] focus:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              {/* Consent checkbox - only show if email is provided */}
              {email.trim() !== "" && (
                <div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={consentToContact}
                      onChange={(e) => setConsentToContact(e.target.checked)}
                      disabled={isLoading}
                      className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[var(--accent)] focus:ring-[var(--accent)] focus:ring-offset-0"
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm text-[var(--foreground)]/70 leading-relaxed"
                    >
                      Yes, you may email me encouragement and updates from His Minute.
                    </label>
                  </div>
                  <p className="text-xs text-[var(--foreground)]/50 mt-2 ml-7">
                    We'll only email you if you check this box.
                  </p>
                </div>
              )}

              {/* Error messages */}
              {status === "rate_limit" && (
                <p className="text-[var(--accent)] text-sm">
                  Please wait a bit before sending another request.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}

              <Button type="submit" variant="primary" className={isLoading ? "opacity-70 cursor-not-allowed" : ""}>
                {isLoading ? "Sending..." : "Send request"}
              </Button>
            </form>
          )}
        </Card>
      </section>
    </Container>
  );
}
