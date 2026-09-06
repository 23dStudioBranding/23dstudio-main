"use client";



import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaUsers, FaRocket, FaLaptopHouse, FaLightbulb } from "react-icons/fa";
import Loader from "@/components/Utils/Loader";
import ButtonN from "@/components/ButtonN";



export default function Careers() {
  const router = useRouter();

  return (
    <>
      <Loader logo="/images/Logob.png" />
      <div className="w-full font-[bituml]">
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center ">
          <div className="absolute inset-0">
            <Image
              src="/images/career.jpg"
              alt="Careers"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
          <div className="relative z-10 text-black text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold">Join Our Team</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              We’re looking for creative minds and problem solvers to shape the
              future with us.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 px-6 md:px-20">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Work With Us
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: <FaUsers size={28} />,
                title: "Collaborative Culture",
                desc: "Work with a team that values your voice and ideas.",
              },
              {
                icon: <FaRocket size={28} />,
                title: "Career Growth",
                desc: "We invest in your learning and professional journey.",
              },
              {
                icon: <FaLaptopHouse size={28} />,
                title: "Flexibility",
                desc: "Hybrid/remote opportunities with work-life balance.",
              },
              {
                icon: <FaLightbulb size={28} />,
                title: "Innovation",
                desc: "Be part of projects that challenge and inspire.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition group"
              >
                <div className="p-4 bg-gray-100 rounded-full w-fit mx-auto mb-4 transform transition-transform duration-300 group-hover:rotate-10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Culture */}
        <section className="py-16 px-6 md:px-20 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Life at Our Studio
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Image src="/images/showcase8.jpg" alt="Culture" width={500} height={300} className="shadow-md" />
            <Image src="/images/showcase7.jpg" alt="Culture" width={500} height={300} className="shadow-md" />
            <Image src="/images/showcase9.jpg" alt="Culture" width={500} height={300} className="shadow-md" />
          </div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mt-8">
            We believe in balance, creativity, and collaboration. Our culture is
            built on mutual respect and the freedom to innovate.
          </p>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-900 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your journey with us?
          </h2>
          
            <ButtonN
              onClick={() => router.push("/contact")}
              text="Contact Now"
              color="white"
              variant="primary"
            />
        
        </section>
      </div>
    </>
  );
}
