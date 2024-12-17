import Image from "next/image";

export default function ContactInfo() {
  return (
    <div className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-md">
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 text-white p-6 text-center">
          <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
          <p className="text-white/80">Let&apos;s create something amazing together</p>
        </div>
        <div className="p-3 sm:p-6 space-y-6">
          <div className="flex items-center space-x-1 md:space-x-4 bg-gray-100 p-2 md:p-3 rounded-lg ">
            <Image src="/gmail.svg" width={50} height={50} alt="" />
            <div>
              <p className="font-semibold text-gray-700">Email</p>
              <a
                href="mailto:towfiqueemrose@gmail.com"
                className="text-blue-500 hover:underline"
              >
                towfiqueemrose@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-1 md:space-x-4 bg-gray-100 p-2 md:p-3 rounded-lg">
            <Image src="/linkedin.svg" width={50} height={50} alt="" />
            <div>
              <p className="font-semibold text-gray-700">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/towfiqueemrose"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                www.linkedin.com/in/towfiqueemrose
              </a>
            </div>
          </div>

          <div className="flex items-center p-2 md:p-3 space-x-1 md:space-x-4 bg-gray-100 rounded-lg">
            <Image src="/facebook.svg" width={50} height={50} alt="" />
            <div>
              <p className="font-semibold text-gray-700">Facebook</p>
              <a
                href="https://www.facebook.com/me.towfiqueemrose"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                www.facebook.com/me.towfiqueemrose
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-1 md:space-x-4 bg-gray-100 p-2 md:p-3 rounded-lg">
            <Image src="/phone.svg" width={50} height={50} alt="" className="-rotate-90" />
            <div>
              <p className="font-semibold text-gray-700">Phone</p>
              <p

                className="text-blue-500 hover:underline "
              >
                +8801746850755
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600">
            📍 Rohanpur, Chapainawabganj
          </p>
        </div>
      </div>
  )
}
