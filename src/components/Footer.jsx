
function Footer() {
  return (
    <div className="w-full h-fit bg-[#212121] text-white ">
      {/* upper footer */}
      <div className="flex flex-wrap text-sm font-semibold py-9 px-14">

        <div className="flex flex-col w-[280px]">
          <h3 className="mb-2 text-gray-500">ABOUT</h3>
          <span className="hover:underline cursor-pointer">Contact Us</span>
          <span className="hover:underline cursor-pointer">About Us</span>
          <span className="hover:underline cursor-pointer">Careers</span>
          <span className="hover:underline cursor-pointer">Flipkart Stories</span>
          <span className="hover:underline cursor-pointer">Press</span>
          <span className="hover:underline cursor-pointer">Flipkart Wholsale</span>
          <span className="hover:underline cursor-pointer">Cleartrip</span>
          <span className="hover:underline cursor-pointer">Corporate Information</span>
        </div>

        <div className="flex flex-col w-[280px]">
          <h3 className="mb-2 text-gray-500">HELP</h3>
          <span className="hover:underline cursor-pointer">Payment</span>
          <span className="hover:underline cursor-pointer">Shipping</span>
          <span className="hover:underline cursor-pointer">Cancellation & Returns</span>
          <span className="hover:underline cursor-pointer">FAQ</span>
          <span className="hover:underline cursor-pointer">Report infringment</span>
        </div>

        <div className="flex flex-col w-[280px]">
          <h3 className="mb-2 text-gray-500">CONSUMER POLICY</h3>
          <span className="hover:underline cursor-pointer">Cancellation & Returns</span>
          <span className="hover:underline cursor-pointer">Terms of use</span>
          <span className="hover:underline cursor-pointer">Security</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span className="hover:underline cursor-pointer">Sitemap</span>
          <span className="hover:underline cursor-pointer">Grievance Redressal</span>
          <span className="hover:underline cursor-pointer">EPR Compliance</span>
          <span className="hover:underline cursor-pointer">Corporate Information</span>
        </div>

        <div className="flex flex-col w-[280px]">
          <h3 className="mb-2 text-gray-500">SOCIAL</h3>
          <span className="hover:underline cursor-pointer">Facebook</span>
          <span className="hover:underline cursor-pointer">Twitter</span>
          <span className="hover:underline cursor-pointer">YouTube</span>
        </div>

        <div className="flex flex-col w-[280px]">
          <h3 className="mb-2 text-gray-500">Mail Us</h3>
          <p>Flipkart Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia &amp; </p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
        </div>

        <div className="flex flex-col w-[280px]">
          <h3 className="mb-2 text-gray-500">Registered Office Address</h3>
          <p>Karnataka, India</p>
          <p>Buildings Alyssa, Begonia &amp;</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
          <p>CIN : U51109KA2012PTC066107</p>
        </div>

      </div>

      {/* Lower footer */}
      <div className="border-t-[0.5px] border-gray-600 w-full"/>
      <div className="flex justify-between px-28 text-sm py-5">
        <div className="flex space-x-2">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg" alt="" />
          <span>Become a seller</span>
        </div>

        <div className="flex space-x-2">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg" alt="" />
          <span>Advertise</span>
        </div>

        <div className="flex space-x-2">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg" alt="" />
          <span>Gift Cards</span>
        </div>

        <div className="flex space-x-2">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg" alt="" />
          <span>Help Center</span>
        </div>

        <div className="flex space-x-2">
          <span>&#169; 2007-2023 Flipkart.com</span>
        </div>

        <div className="flex space-x-2">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="payment-logo" />
        </div>

      </div>
    </div>
  )
}

export default Footer
