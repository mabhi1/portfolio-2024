import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { IconAddressBook, IconBrandGithub, IconBrandLinkedin, IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const words = ["Full Stack Engineer", "Software Developer", "Enthusiastic programmer"];
  return (
    <BackgroundBeamsWithCollision>
      <div className="mx-auto w-fit flex gap-20 items-center">
        <div>
          <div className="flex gap-2 items-center">
            <div className="flex flex-col gap-2">
              <a href="https://github.com/mabhi1">
                <IconBrandGithub className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/mabhishek0221/">
                <IconBrandLinkedin className="w-7 h-7" />
              </a>
            </div>
            <div>
              <div className="px-2 text-xl">Hello, my name is</div>
              <div className="text-5xl px-2">Abhishek Mishra</div>
              <FlipWords words={words} />
            </div>
          </div>
          <div className="flex gap-2 items-center mt-10">
            <Link href="/contact" passHref legacyBehavior>
              <Button>
                <IconAddressBook className="w-5 h-5 mr-1" />
                Contact Me
              </Button>
            </Link>
            <Button>
              <IconDownload className="w-5 h-5 mr-1" />
              Download Resume
            </Button>
          </div>
        </div>
        <Image src="/profile.png" height={270} width={270} alt="Abhishek Mishra" />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
