"use client";

import { useState } from "react";

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
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-500 mb-4">
            {dict.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-zinc-900">
            {dict.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column — Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                {dict.hours.title}
              </h3>
              <div className="space-y-2 text-zinc-600">
                <div className="flex justify-between">
                  <span>{dict.hours.weekdays}</span>
                  <span>{dict.hours.weekdaysTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>{dict.hours.saturday}</span>
                  <span>{dict.hours.saturdayTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>{dict.hours.sunday}</span>
                  <span>{dict.hours.sundayTime}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                {dict.location.title}
              </h3>
              <div className="space-y-1 text-zinc-600">
                <p>{dict.location.line1}</p>
                <p>{dict.location.line2}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                {dict.details.title}
              </h3>
              <div className="space-y-1 text-zinc-600">
                <p>
                  <span className="text-zinc-400 mr-2">
                    {dict.details.phoneLabel}
                  </span>
                  {dict.details.phone}
                </p>
                <p>
                  <span className="text-zinc-400 mr-2">
                    {dict.details.emailLabel}
                  </span>
                  {dict.details.email}
                </p>
              </div>
            </div>

            <div className="aspect-video bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-400">
              <div className="text-center">
                <svg
                  className="w-10 h-10 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p className="text-sm">{dict.mapPlaceholder}</p>
              </div>
            </div>
          </div>

          {/* Right Column — Reservation Form */}
          <div className="bg-zinc-50 rounded-2xl p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-amber-500"
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
                <h3 className="text-2xl font-bold font-serif text-zinc-900 mb-2">
                  {dict.form.thankYouTitle}
                </h3>
                <p className="text-zinc-500">{dict.form.thankYouMessage}</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold font-serif text-zinc-900 mb-6">
                  {dict.form.title}
                </h3>
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                        {dict.form.firstName}
                      </label>
                      <input
                        type="text"
                        placeholder={dict.form.firstNamePlaceholder}
                        className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                        {dict.form.lastName}
                      </label>
                      <input
                        type="text"
                        placeholder={dict.form.lastNamePlaceholder}
                        className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                      {dict.form.email}
                    </label>
                    <input
                      type="email"
                      placeholder={dict.form.emailPlaceholder}
                      className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                        {dict.form.date}
                      </label>
                      <input
                        type="date"
                        className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                        {dict.form.time}
                      </label>
                      <select className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500">
                        <option value="">{dict.form.timePlaceholder}</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                        <option>1:00 PM</option>
                        <option>5:00 PM</option>
                        <option>6:00 PM</option>
                        <option>7:00 PM</option>
                        <option>8:00 PM</option>
                        <option>9:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                      {dict.form.guests}
                    </label>
                    <select className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500">
                      <option value="">{dict.form.guestsPlaceholder}</option>
                      {dict.form.guestOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                      {dict.form.specialRequests}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={dict.form.specialRequestsPlaceholder}
                      className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full rounded-full bg-amber-500 py-3.5 text-sm font-semibold text-zinc-900 uppercase tracking-wide hover:bg-amber-400 transition-colors"
                  >
                    {dict.form.submit}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
