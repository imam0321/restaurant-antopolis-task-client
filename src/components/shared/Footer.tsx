import { Clock, MailOpen, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const images = [
  { id: 1, src: "/hero/g-1.jpg" },
  { id: 2, src: "/hero/g-2.jpg" },
  { id: 3, src: "/hero/g-3.jpg" },
  { id: 4, src: "/hero/g-4.jpg" },
  { id: 5, src: "/hero/g-5.jpg" },
  { id: 6, src: "/hero/g-6.jpg" },
];
const icons = [
  { id: 1, src: "/icons/p-icon.png" },
  { id: 2, src: "/icons/t-icon.png" },
  { id: 3, src: "/icons/f-icon.png" },
  { id: 4, src: "/icons/i-icon.png" },
  { id: 5, src: "/icons/u-icon.png" },
];

export default function Footer() {
  return (
    <footer className="bg-[#880808] text-white pt-12">
      <div className="lg:max-w-4xl lg:mx-auto md:mx-10 mx-4 grid grid-cols-1 lg:grid-cols-8 md:grid-cols-2 gap-8">
        <div className="lg:col-span-2 md:col-span-1">
          <h2 className="lg:text-[2rem] text-[1.5rem] font-bold mb-1">
            RESTAURANT
          </h2>
          <p className="text-lg">
            Subscribe our newsletter and get discount 25%off
          </p>

          <div className="flex mt-2 max-w-[300px]">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-2 rounded-l-md text-black w-full bg-white focus:outline-none"
            />
            <button className="bg-[#A52A2A] h-8 px-4 rounded-r-md">➤</button>
          </div>

          <div className="flex justify-start items-center gap-2 mt-3 ml-2">
            {icons.map((icon) => (
              <div key={icon.id} className="relative h-6 w-6">
                <Image
                  src={icon.src}
                  fill
                  alt="icon"
                  className="object-cover"
                  sizes="(max-width: 768px) 438px, (max-width: 1024px) 538px, 750px"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-1">
          <h2 className="text-lg font-bold mb-4">Contact us</h2>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-x-2">
              <MapPin size={16} /> 3517 W. Gray St. Utica, Pennsylvania 57867
            </p>
            <p className="flex items-center gap-x-2">
              <Phone size={16} /> 00965 - 96659986
            </p>
            <p className="flex items-center gap-x-2">
              <MailOpen size={16} /> M.Alyaqout@4house.Co
            </p>
            <p className="flex items-center gap-x-2">
              <Clock size={16} /> Sun - Sat / 10:00 AM - 8:00 PM
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-1">
          <h2 className="text-lg font-bold mb-4">Links</h2>
          <ul className="lg:block md:block flex justify-between flex-wrap gap-x-6 gap-y-4 lg:space-y-2 md:space-y-2 text-sm">
            <li>About us</li>
            <li>Contact Us</li>
            <li>Our Menu</li>
            <li>Team</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="lg:col-span-2 md:col-span-1 hidden md:block">
          <h2 className="text-lg font-bold mb-4">Instagram Gallery</h2>
          <div className="grid grid-cols-3 gap-1">
            {images.map((image) => (
              <div key={image.id} className="relative w-[70px] h-[70px]">
                <Image
                  src={image.src}
                  alt="Instagram image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 438px, (max-width: 1024px) 538px, 750px"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#A52A2A] mt-12">
        <div className="max-w-4xl lg:mx-auto md:mx-10 mx-auto py-4 flex flex-col md:flex-row items-center justify-between text-sm text-white/80">
          <p>Copyright © 2025. All rights reserved</p>

          <div className="lg:flex md:flex hidden space-x-4">
            <p>Privacy Policy</p>
            <p>Term of Use</p>
            <p>Partner</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
