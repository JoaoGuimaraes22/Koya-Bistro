"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FadeIn from "../FadeIn/FadeIn";
import Reservation, { type ReservationDict } from "../Reservation/Reservation";

type ContactDict = {
  label: string;
  title: string;
  hours: {
    title: string;
    weekdays: string;
    weekdaysTime: string;
    saturday: string;
    saturdayTime: string;
    sunday: string;
    sundayTime: string;
  };
  location: {
    title: string;
    line1: string;
    line2: string;
  };
  details: {
    title: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
  };
  mapPlaceholder: string;
  form: {
    title: string;
    firstName: string;
    firstNamePlaceholder: string;
    lastName: string;
    lastNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    date: string;
    time: string;
    timePlaceholder: string;
    guests: string;
    guestsPlaceholder: string;
    guestOptions: string[];
    specialRequests: string;
    specialRequestsPlaceholder: string;
    submit: string;
    thankYouTitle: string;
    thankYouMessage: string;
  };
};

type Props = {
  dict: ContactDict;
  reservationDict: ReservationDict;
};

export default function Contact({ dict, reservationDict }: Props) {
  const [reservationOpen, setReservationOpen] = useState(false);

  // Listen for navbar "open-reservation" custom event
  useEffect(() => {
    const handler = () => setReservationOpen(true);
    window.addEventListener("open-reservation", handler);
    return () => window.removeEventListener("open-reservation", handler);
  }, []);

  return (
    <>
      <section id="contact" className="py-16 sm:py-24 px-5 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-10 sm:mb-16">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-amber-500 mb-3 sm:mb-4">
                {dict.label}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-zinc-900">
                {dict.title}
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-10 sm:gap-16">
            {/* Left Column — Info */}
            <FadeIn direction="left">
              <div className="space-y-8 sm:space-y-10">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-3 sm:mb-4">
                    {dict.hours.title}
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base text-zinc-600">
                    <div className="flex justify-between gap-4">
                      <span>{dict.hours.weekdays}</span>
                      <span className="shrink-0">
                        {dict.hours.weekdaysTime}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>{dict.hours.saturday}</span>
                      <span className="shrink-0">
                        {dict.hours.saturdayTime}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>{dict.hours.sunday}</span>
                      <span className="shrink-0">{dict.hours.sundayTime}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-3 sm:mb-4">
                    {dict.location.title}
                  </h3>
                  <div className="space-y-1 text-sm sm:text-base text-zinc-600">
                    <p>{dict.location.line1}</p>
                    <p>{dict.location.line2}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-3 sm:mb-4">
                    {dict.details.title}
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base text-zinc-600">
                    <p className="flex flex-wrap gap-x-2">
                      <span className="text-zinc-400">
                        {dict.details.phoneLabel}
                      </span>
                      <a
                        href={`tel:${dict.details.phone.replace(/\s/g, "")}`}
                        className="hover:text-amber-500 transition-colors"
                      >
                        {dict.details.phone}
                      </a>
                    </p>
                    <p className="flex flex-wrap gap-x-2">
                      <span className="text-zinc-400">
                        {dict.details.emailLabel}
                      </span>
                      <a
                        href="https://www.instagram.com/koyas_bistro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-500 transition-colors"
                      >
                        {dict.details.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=Mercado+de+Carcavelos,+Praça+Dr.+Manuel+Rebello+de+Andrade,+Carcavelos,+Portugal&output=embed"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Koya's location — Mercado de Carcavelos"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Right Column — Book a Table CTA */}
            <FadeIn direction="right" delay={150}>
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-full min-h-80">
                <Image
                  src="/img/reserve.jpg"
                  alt="Book a table at Koya's"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative flex flex-col items-center justify-center text-center h-full p-8 sm:p-10 md:p-12">
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-3">
                    {reservationDict.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 mb-8 max-w-xs">
                    {reservationDict.specialRequestsPlaceholder}
                  </p>
                  <button
                    onClick={() => setReservationOpen(true)}
                    className="rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-zinc-900 uppercase tracking-wide hover:bg-amber-400 active:bg-amber-600 transition-colors"
                  >
                    {reservationDict.title}
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Reservation
        dict={reservationDict}
        open={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </>
  );
}
