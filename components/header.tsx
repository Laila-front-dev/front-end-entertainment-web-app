import Link from "next/link";
import Image from "next/image";

import Container from "./ui/container";
import Navigation from "./navigation";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/(movie-app)/api/auth/[...nextauth]/authOptions";

import avatar from "/app/images/user.png";

async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-primary-800 md:bg-transparent md:mt-[1.438rem]">
      <Container>
        <div className="flex lg:flex-col m-auto items-center justify-between md:bg-primary-800 py-4 md:px-4 md:py-[1.438rem] md:rounded-[0.625rem] lg:w-[96px] lg:h-[960px] ">
          <Navigation />

          <div>
            {session ? (
              <>
                <Image
                  className="m-auto"
                  src={avatar}
                  alt="user"
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <Link
                  className=" text-secondary-400"
                  href="/api/auth/signout?callbackUrl=/"
                >
                  Log out
                </Link>
              </>
            ) : (
              <Link href="/login">login</Link>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
