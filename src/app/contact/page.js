import ContactForm from "@/components/ContactForm";
import Loader from "@/components/Utils/Loader";



export default function Contact() {
  return (
    <>
      <Loader logo="/images/Logob.png" />
      <div className="w-full min-h-screen bg-gray-50 pt-28 px-6 md:px-20 font-[bituml] pb-5 md:pb-10">
        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            We’d love to hear from you. Whether it’s a project, a collaboration, or
            just a quick hello — let’s create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Section - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold uppercase tracking-wide">
              Let’s Work Together
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Have a project in mind? Reach out to us through the form, or get in
              touch directly via our contact details below.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase text-gray-500">Email</p>
                <p className="text-lg font-medium">23dstudiodesign@gmail.com</p>
              </div>

              <div>
                <p className="text-sm uppercase text-gray-500">Phone</p>
                <p className="text-lg font-medium">
                  +91 7620703298 &nbsp; | &nbsp; +91 9021507499
                </p>
              </div>

              <div>
                <p className="text-sm uppercase text-gray-500">Address</p>
                <p className="text-lg font-medium leading-relaxed">
                  23D Studio <br />
                  Shop no,1, Sahnivas co-op. sociaty, Sharanpur Rd, Adwait Colony, P&T Colony, Nashik, Maharashtra 422005
                </p>
                <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14997.417501156704!2d73.75258179282592!3d19.99363621712053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebcd724d1617%3A0x6570aa2f48904b4b!2sShop%20No.1!5e0!3m2!1sen!2sin!4v1756624717605!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm/>
        </div>
      </div>
    </>
  );
}
