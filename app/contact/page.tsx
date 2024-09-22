import { ContactForm } from "@/components/layout/contact-form";
import RecaptchaProvider from "@/components/providers/recaptcha-provider";
import { IconLocation, IconMail, IconPhoneCall } from "@tabler/icons-react";
import Image from "next/image";

function ContactPage() {
  return (
    <div className="h-full flex flex-col-reverse lg:flex-row justify-center gap-10 md:gap-36 py-10 md:p-10 w-full mx-auto">
      <div className="flex flex-col gap-2 text-sm w-96 items-center">
        <Image src="/contact.png" height={975} width={1000} alt="Contact Form" className="w-60 md:w-72 h-auto" />
        <div className="text-xs flex space-x-2 items-center justify-between px-4 w-3/4 md:w-full rounded-md h-10 font-medium shadow-input bg-white dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
          <div className="flex gap-2 items-center">
            <IconPhoneCall className="w-4 h-4" />
            <span>Call Me</span>
          </div>
          <div className="ml-5">+1-201-238-8847</div>
        </div>
        <div className="text-xs flex space-x-2 items-center justify-between px-4 w-3/4 md:w-full rounded-md h-10 font-medium shadow-input bg-white dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
          <div className="flex gap-2 items-center">
            <IconMail className="w-4 h-4" />
            <span>Email Me</span>
          </div>
          <div className="ml-5">mabhishek0221@gmail.com</div>
        </div>
        <div className="text-xs flex space-x-2 items-center justify-between px-4 w-3/4 md:w-full rounded-md h-10 font-medium shadow-input bg-white dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
          <div className="flex gap-2 items-center">
            <IconLocation className="w-4 h-4" />
            <span>Location</span>
          </div>
          <div className="ml-5">United States</div>
        </div>
      </div>
      <RecaptchaProvider>
        <ContactForm />
      </RecaptchaProvider>
    </div>
  );
}
export default ContactPage;
