import Image from "next/image";

const images = [
  { id: 1, src: "/hero/g-1.jpg" },
  { id: 2, src: "/hero/g-2.jpg" },
  { id: 3, src: "/hero/g-3.jpg" },
  { id: 4, src: "/hero/g-4.jpg" },
  { id: 5, src: "/hero/g-5.jpg" },
  { id: 6, src: "/hero/g-6.jpg" },
];

export default function Footer() {
  return (
    <footer className="bg-[#880808] text-white pt-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:px-20">
        {/* Column 1 */}
        <div>
          <h2 className="text-[32px] font-bold mb-4">RESTAURANT</h2>
          <p className="text-lg">
            Subscribe our newsletter and get discount 25% off
          </p>

          <div className="flex mt-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded-l-md text-black w-full bg-white"
            />
            <button className="bg-[#A52A2A] h-10 px-4 py-2 rounded-r-md">
              ➤
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact us</h2>
          <div className="space-y-3 text-sm">
            <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
            <p>(480) 555-0103</p>
            <p>M.Alyaqout@4house.Co</p>
            <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-bold mb-4">Links</h2>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Contact Us</li>
            <li>Our Menu</li>
            <li>Team</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Column 4 – Instagram Gallery */}
        <div>
          <h2 className="text-xl font-bold mb-4">Instagram Gallery</h2>
          <div className="grid grid-cols-3 gap-2">
            {images.map((image) => (
              <div key={image.id} className="relative w-20 h-20 ">
                <Image
                  src={image.src}
                  alt="Instagram image"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#A52A2A] mt-12">
        <div className="max-w-4xl mx-auto py-4 flex flex-col md:flex-row items-center justify-between text-sm text-white/80">
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
