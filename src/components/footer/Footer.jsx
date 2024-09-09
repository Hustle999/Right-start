import { Blogo } from "./components/Blogo";

export const Footer = () => {
  return (
    <div className="bg-gray-200 flex flex-col px-[350px] py-16 gap-[25px]">
      <div className="grid grid-cols-4 gap-5 jus">
        {/* Zuun bosoo */}
        <div className="flex flex-col gap-6">
          <div>
            <div>About</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
          </div>
          <div>
            <div>Email : info@jstemplate.net</div>
            <div>Phone : 880 123 456 789</div>
          </div>
        </div>
        {/* dund bosoo */}
        <div className="col-span-2 flex flex-col items-center">
          <div>Home</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
        {/* baruun bosoo */}
        <div>logo</div>
      </div>
      <div className="flex justify-between py-8">
        <div className="flex gap-[10px]">
          <Blogo />
          <div className="flex flex-col">
            <div>MetaBlog</div>
            <div>© All Rights Reserved.</div>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};
