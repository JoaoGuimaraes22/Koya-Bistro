"use client";

import { useState } from "react";
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
              <div className="bg-zinc-950 rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 flex flex-col items-center justify-center text-center h-full min-h-80">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-500/15 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-3">
                  {reservationDict.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 mb-8 max-w-xs">
                  {reservationDict.specialRequestsPlaceholder}
                </p>
                <button
                  onClick={() => setReservationOpen(true)}
                  className="rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-zinc-900 uppercase tracking-wide hover:bg-amber-400 active:bg-amber-600 transition-colors"
                >
                  {reservationDict.title}
                </button>
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
