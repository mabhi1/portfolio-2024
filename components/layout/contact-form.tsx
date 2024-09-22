"use client";

import React, { useState, useTransition } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { IconArrowRight } from "@tabler/icons-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { contactUsMessageEmail } from "@/actions/emails";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const { executeRecaptcha } = useGoogleReCaptcha();

  const invalidInputs = () => {
    let inputs = [firstName, lastName, email, message];
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i] || !inputs[i].trim().length) return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (invalidInputs()) return;
    startTransition(async () => {
      try {
        if (!executeRecaptcha) throw new Error();
        const gReCaptchaToken = await executeRecaptcha("enquiryFormSubmit");
        const api = await fetch("/api/captcha", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gRecaptchaToken: gReCaptchaToken,
          }),
        });
        const response = await api.json();
        if (!response?.success) throw new Error();
        const { data, error } = await contactUsMessageEmail(
          message.trim(),
          email.trim(),
          `${firstName.trim()} ${lastName.trim()}`
        );
        if (error || !data) throw new Error();
        toast.success("Email sent successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } catch (error) {
        toast.error("Error in sending email");
      }
    });
  };

  return (
    <div className="rounded-none md:rounded-2xl">
      <div className="text-xl uppercase">Contact Me</div>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Fill and send the form below to send an email
      </p>

      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">
              First name<span className="text-destructive text-xs ml-[2px]">*</span>
            </Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              value={firstName}
              autoFocus
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">
              Last name<span className="text-destructive text-xs ml-[2px]">*</span>
            </Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">
            Email Address<span className="text-destructive text-xs ml-[2px]">*</span>
          </Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">
            Message<span className="text-destructive text-xs ml-[2px]">*</span>
          </Label>
          <Textarea
            id="message"
            rows={4}
            placeholder="I have a project idea."
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </LabelInputContainer>
        {isPending ? (
          <Button className="w-full h-10" disabled>
            Please wait
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          </Button>
        ) : (
          <button
            className="group flex gap-1 items-center justify-center bg-primary text-white dark:text-black relative group/btn w-full rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            <span>Send</span>
            <IconArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-200" />
            <BottomGradient />
          </button>
        )}
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
