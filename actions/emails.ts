"use server";

import resend from "@/resend";
import { ContactEmailTemplate } from "@/resend/contact-email-template";

export async function contactUsMessageEmail(message: string, senderEmail: string, senderName: string) {
  const { data, error } = await resend.emails.send({
    from: "portfolio@resend.dev",
    to: process.env.ADMIN_EMAIL!,
    subject: "Portfolio Enquiry",
    react: ContactEmailTemplate({ message, senderEmail, senderName }),
  });

  return { data, error };
}
