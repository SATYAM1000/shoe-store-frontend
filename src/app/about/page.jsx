import Wrapper from "@/components/Wrapper";
import React from "react";

const AboutPage = () => {
  return (
    <Wrapper>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="/assets/about-img.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Our Journey</h2>

              <p className="mt-4 text-gray-600">
                At Nike, our journey began with a simple idea: to provide
                athletes with the best equipment to help them reach their full
                potential. For decades, we have been committed to pushing the
                boundaries of innovation in sportswear and footwear. From the
                track to the court, our products have fueled the ambitions of
                athletes worldwide.
              </p>

              <p className="mt-4 text-gray-600">
                Our mission goes beyond just selling shoes; we strive to inspire
                and empower every athlete, from the elite to the everyday
                enthusiast. Whether you&apos;re a professional athlete chasing
                records or a weekend warrior chasing your personal best, Nike is
                here to support you on your journey.
              </p>

              <a
                href="/category"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Explore Our Products
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
              <img
                alt="Shoe"
                src="/assets/img2.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24 lg:pl-8">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Connect with Us
              </h2>

              <p className="mt-4 text-gray-600">
                We believe in fostering a community where every athlete feels
                supported and inspired. Connect with us on social media to stay
                updated on the latest releases, exclusive offers, and inspiring
                stories from athletes around the world.
              </p>

              <p className="mt-4 text-gray-600">
                Join the conversation and share your Nike experiences using
                #JustDoIt. Together, we can push boundaries, break records, and
                inspire greatness.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default AboutPage;
