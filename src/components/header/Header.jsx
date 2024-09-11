import Link from "next/link";
import { MetaLogo } from "./components/MetaLogo";

export const Header = () => {
  return (
    <div className="flex px-[350px] py-8 justify-between items-center">
      <MetaLogo />
      <div className="flex gap-10">
        <Link href={"/"}>
          <div>Home</div>
        </Link>
        <Link href={"/blog-list"}>
          <div>Blog</div>
        </Link>
        <Link href={"/contact-us"}>
          <div>Contact</div>
        </Link>
      </div>
      <input
        placeholder="Search"
        className="p-1 rounded-lg bg-gray-200"
        type="text"
      />
    </div>
  );
};
