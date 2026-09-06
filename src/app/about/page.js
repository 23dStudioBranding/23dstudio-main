"use client";
import React from "react";
import {
  FaLightbulb,
  FaUsers,
  FaStar,
  FaSearch,
  FaDraftingCompass,
  FaCheckCircle,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

import Brands from "@/components/Home/Brands";
import Image from "next/image";
import ButtonN from "@/components/ButtonN";
import Loader from "@/components/Utils/Loader";
import { motion } from "framer-motion";

export default function AboutUs() {
  const router = useRouter();

  const cardData = [
    {
      title: "Our Philosophy",
      desc: "At 23D Studio, design is more than aesthetics — it's the bridge between ideas and impact. Every project is a chance to shape perception, simplify complexity, and create meaningful connections.",
      icon: "✦",
      theme: "light",
    },
    {
      title: "Our Journey",
      desc: "Founded in 2025 in Nashik, Maharashtra, we started with a mission: uniting branding, environment, and digital into seamless experiences. Our story is fueled by curiosity, integrity, and attention to detail.",
      icon: "∞",
      theme: "dark",
    },
    {
      title: "Future Ahead",
      desc: "We’re building a future where design and technology merge seamlessly, creating experiences that last. Our vision is to empower businesses and inspire communities.",
      icon: "⚡",
      theme: "light",
    },
  ];


  return (
    <div className="font-[bituml] text-gray-800">
      <Loader logo="/images/Logob.png" />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/aboutus.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/40" />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-lg leading-relaxed">
            We craft stories through design, turning concepts into experiences
            and visions into realities.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Founded with the belief that design should inspire, we have grown
            into a multidisciplinary studio creating spaces, visuals, and
            identities that leave lasting impressions. Every project is an
            opportunity to shape how people interact with environments, brands,
            and experiences.
          </p>
        </div>
      </section>

      <section className="relative py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Story in Motion
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            A timeline of philosophy, journey & vision that defines us.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-20">
            {cardData.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center md:items-start ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
              >
                <div
                  className={`w-full md:w-1/2 p-6 md:p-8 rounded-2xl shadow-xl relative ${card.theme === "dark"
                    ? "bg-gradient-to-r from-gray-900 to-black text-white"
                    : "bg-white"
                    }`}
                >
                  {/* Floating Icon */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-md">
                    <span className="text-xl">{card.icon}</span>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
                  <p className="text-lg leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Workflow */}
      <section
        className="relative py-20 px-6 md:px-20 text-white"

      >
        <div className="absolute inset-0 bg-gray-900" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Workflow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                Icon: FaSearch,
                title: "Research",
                desc: "Understanding client vision, context, and goals.",
              },
              {
                Icon: FaDraftingCompass,
                title: "Design",
                desc: "Translating insights into creative and practical solutions.",
              },
              {
                Icon: FaCheckCircle,
                title: "Execution",
                desc: "Delivering with precision, detail, and collaboration.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-4"
              >
                <step.Icon className="text-5xl text-white" />
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-gray-200">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              Icon: FaLightbulb,
              title: "Creative Thinking",
              desc: "Ideation and concept development from scratch.",
            },
            {
              Icon: FaUsers,
              title: "Collaborative Process",
              desc: "Working closely with clients & partners.",
            },
            {
              Icon: FaStar,
              title: "Quality Execution",
              desc: "Precision in design and attention to detail.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-4 bg-white shadow-md p-8 rounded-lg hover:shadow-xl transition"
            >
              <item.Icon className="text-5xl text-black" />
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              name: "Gaurav Duse",
              role: "Founder And Principal Designer",
              image: "/images/team/1.png",
            },
            {
              name: "Bhushan Bhavsar",
              role: "Product Designer",
              image: "/images/team/2.png",
            },
            {
              name: "Sarthak Jejurkar ",
              role: "UI UX Designer",
              image: "/images/team/3.png",
            },
            {
              name: "Ritika Yeole ",
              role: "Interior Designer",
              image: "/images/team/8.png",
            },
            {
              name: "Vickey Yadav  ",
              role: "Graphic Designer",
              image: "/images/team/9.png",
            },
            {
              name: "Vishal Patil  ",
              role: "Web Developer",
              image: "/images/team/5.png",
            },
            {
              name: "Pratiksha Duse",
              role: "2D Artist",
              image: "/images/team/6.png",
            },
            {
              name: "Yash duse",
              role: "Social Media Manager",
              image: "/images/team/7.png",
            },
            {
              name: "Yash Godbole",
              role: "Accounts",
              image: "/images/team/4.png",
            }

          ].map((person, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-1"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={172}
                height={172}
                className="w-43 h-43 rounded-full grayscale object-cover object-center shadow-md"
              />
              <h4 className="text-xl font-semibold">{person.name}</h4>
              <p className="text-gray-600">{person.role}</p>
            </div>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 px-6 md:px-20 bg-zinc-800 text-center">
        <h2 className="text-2xl md:text-3xl text-white font-semibold mb-6">
          Let’s Build Something Together !
        </h2>
        <ButtonN
          onClick={() => router.push("/contact")}
          text="Get In Touch"
          color="white"
          variant="primary"
        />
      </section>
    </div>
  );
}
