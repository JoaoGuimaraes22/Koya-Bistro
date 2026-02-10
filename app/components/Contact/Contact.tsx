"use client";

import { useState } from "react";
import FadeIn from "../FadeIn/FadeIn";

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
};

export default function Contact({ dict }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
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
                    <span className="shrink-0">{dict.hours.weekdaysTime}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>{dict.hours.saturday}</span>
                    <span className="shrink-0">{dict.hours.saturdayTime}</span>
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

          {/* Right Column — Form */}
          <FadeIn direction="right" delay={150}>
            <div className="bg-zinc-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12 sm:py-16">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-zinc-900 mb-2">
                    {dict.form.thankYouTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-500">
                    {dict.form.thankYouMessage}
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-zinc-900 mb-5 sm:mb-6">
                    {dict.form.title}
                  </h3>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1.5">
                          {dict.form.firstName}
                        </label>
                        <input
                          type="text"
                          placeholder={dict.form.firstNamePlaceholder}
                          className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-base sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1.5">
                          {dict.form.lastName}
                        </label>
                        <input
                          type="text"
                          placeholder={dict.form.lastNamePlaceholder}
                          className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-base sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1.5">
                        {dict.form.email}
                      </label>
                      <input
                        type="email"
                        placeholder={dict.form.emailPlaceholder}
                        className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-base sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1.5">
                          {dict.form.date}
                        </label>
                        <input
                          type="date"
                          className="w-full rounded-lg border border-zinc-200 bg-white px-3 sm:px-4 py-3 text-base sm:text-sm text-zinc-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1.5">
                          {dict.form.time}
                        </label>
                        <select className="w-full rounded-lg border border-zinc-200 bg-white px-3 sm:px-4 py-3 text-base sm:text-sm text-zinc-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500">
                          <option value="">{dict.form.timePlaceholder}</option>
                          <option>9:00</option>
                          <option>10:00</option>
                          <option>11:00</option>
                          <option>12:00</option>
                          <option>13:00</option>
                          <option>14:00</option>
                          <option>18:00</option>
                          <option>19:00</option>
                          <option>20:00</option>
                          <option>21:00</option>
                          <option>22:00</option>
                          <option>23:00</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1.5">
                        {dict.form.guests}
                      </label>
                      <select className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-base sm:text-sm text-zinc-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500">
                        <option value="">{dict.form.guestsPlaceholder}</option>
                        {dict.form.guestOptions.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1.5">
                        {dict.form.specialRequests}
                      </label>
                      <textarea
                        rows={3}
                        placeholder={dict.form.specialRequestsPlaceholder}
                        className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-base sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full rounded-full bg-amber-500 py-3.5 text-sm font-semibold text-zinc-900 uppercase tracking-wide hover:bg-amber-400 active:bg-amber-600 transition-colors"
                    >
                      {dict.form.submit}
                    </button>
                  </div>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
