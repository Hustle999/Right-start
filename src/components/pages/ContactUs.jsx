export default function ContactUs() {
  return (
    <div className="flex mx-auto w-[895px] h-[895px] gap-5">
      <div className="flex flex-col mx-auto gap-5 px-50">
        <div className="font-bold text-4xl">Contact us</div>
        <div className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </div>
        <div className="flex gap-[50px]">
          <div className=" flex flex-col border-2 rounded-lg p-4 gap-[10px]">
            <div className="text-[24px] font-bold">Address</div>
            <div className="text-gray-500">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </div>
          </div>
          <div className=" flex flex-col  border-2 rounded-lg p-4 gap-[10px]">
            <div className="text-[24px] font-bold">Contact</div>
            <div>
              <div className="text-gray-500">313-332-8662</div>
              <div className="text-gray-500">info@email.com</div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
