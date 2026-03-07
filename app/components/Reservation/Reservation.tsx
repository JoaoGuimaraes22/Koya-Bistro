"use client";

import { useState, useMemo, useEffect } from "react";

const FORMSPREE_ID = "mykdkndo";

export type ReservationDict = {
  title: string;
  guests: string;
  guestOptions: string[];
  selectDate: string;
  monthNames: string[];
  dayNames: string[];
  availableTimes: string;
  timeSlots: string[];
  specialRequests: string;
  specialRequestsPlaceholder: string;
  submit: string;
  thankYouTitle: string;
  thankYouMessage: string;
  errorMessage: string;
};

type Props = {
  dict: ReservationDict;
  open: boolean;
  onClose: () => void;
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function Reservation({ dict, open, onClose }: Props) {
  const today = new Date();
  const [selectedGuests, setSelectedGuests] = useState("2");
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [specialRequests, setSpecialRequests] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const daysInMonth = useMemo(
    () => getDaysInMonth(currentYear, currentMonth),
    [currentYear, currentMonth],
  );
  const firstDay = useMemo(
    () => getFirstDayOfWeek(currentYear, currentMonth),
    [currentYear, currentMonth],
  );

  const isCurrentMonth =
    currentMonth === today.getMonth() && currentYear === today.getFullYear();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const prevMonth = () => {
    if (isCurrentMonth) return;
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDay(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDay(null);
  };

  const handleSubmit = async () => {
    if (!selectedDay || !selectedTime) return;
    setSubmitting(true);
    setError(false);

    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;

    const data = new FormData();
    data.append("_subject", "New Reservation");
    data.append("guests", selectedGuests);
    data.append("date", dateStr);
    data.append("time", selectedTime);
    data.append("message", specialRequests || "(none)");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-start justify-center overflow-y-auto bg-zinc-950/95 backdrop-blur-sm">
      <div className="w-full max-w-lg min-h-full flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800/50">
          <button
            onClick={onClose}
            className="p-2 -ml-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <h2 className="text-lg font-bold font-serif text-white">
            {dict.title}
          </h2>
          <div className="w-9" />
        </div>

        {submitted ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-5 py-16">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-amber-400"
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
            <h3 className="text-2xl font-bold font-serif text-white mb-2">
              {dict.thankYouTitle}
            </h3>
            <p className="text-zinc-400 mb-8">{dict.thankYouMessage}</p>
            <button
              onClick={onClose}
              className="rounded-full border border-zinc-700 px-8 py-3 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Body */}
            <div className="flex-1 px-5 py-6">
              <div className="rounded-2xl border border-zinc-800 p-6 sm:p-8 space-y-8">
                {/* Number of Guests */}
                <div>
                  <h3 className="text-base font-semibold text-white mb-4">
                    {dict.guests}
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {dict.guestOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedGuests(option)}
                        className={`min-w-13 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                          selectedGuests === option
                            ? "border-white bg-white text-zinc-900"
                            : "border-zinc-700 text-zinc-300 hover:border-zinc-500"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Select Date — Calendar */}
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {dict.selectDate}
                  </h3>
                  <div className="border-t border-zinc-800 pt-4 mt-2">
                    {/* Month nav */}
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={prevMonth}
                        disabled={isCurrentMonth}
                        className="p-1 text-zinc-400 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Previous month"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                          />
                        </svg>
                      </button>
                      <span className="text-sm font-medium text-white">
                        {dict.monthNames[currentMonth]} {currentYear}
                      </span>
                      <button
                        onClick={nextMonth}
                        className="p-1 text-zinc-400 hover:text-white transition-colors"
                        aria-label="Next month"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Day names */}
                    <div className="grid grid-cols-7 mb-2">
                      {dict.dayNames.map((day) => (
                        <div
                          key={day}
                          className="text-center text-xs font-medium text-zinc-500 py-1"
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Days grid */}
                    <div className="grid grid-cols-7 gap-y-1">
                      {Array.from({ length: firstDay }).map((_, i) => (
                        <div key={`empty-${i}`} />
                      ))}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const isPast = isCurrentMonth && day < today.getDate();
                        const isSelected = selectedDay === day;

                        return (
                          <button
                            key={day}
                            disabled={isPast}
                            onClick={() => setSelectedDay(day)}
                            className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm transition-all ${
                              isSelected
                                ? "bg-white text-zinc-900 font-semibold"
                                : isPast
                                  ? "text-zinc-700 cursor-not-allowed"
                                  : "text-zinc-300 hover:bg-zinc-800"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Available Times */}
                <div>
                  <h3 className="text-base font-semibold text-white mb-4">
                    {dict.availableTimes}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {dict.timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                          selectedTime === time
                            ? "border-amber-400 bg-amber-50 text-zinc-900"
                            : "border-zinc-700 text-zinc-300 hover:border-zinc-500"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <h3 className="text-base font-semibold text-white mb-3">
                    {dict.specialRequests}
                  </h3>
                  <textarea
                    rows={3}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder={dict.specialRequestsPlaceholder}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none resize-y"
                  />
                </div>

                {error && (
                  <div className="rounded-lg bg-red-900/30 border border-red-800 px-4 py-3 text-sm text-red-400">
                    {dict.errorMessage}
                  </div>
                )}
              </div>
            </div>

            {/* Sticky Confirm Button */}
            <div className="sticky bottom-0 px-5 py-4 bg-zinc-950/95 backdrop-blur-sm border-t border-zinc-800/50">
              <button
                onClick={handleSubmit}
                disabled={!selectedDay || !selectedTime || submitting}
                className="w-full rounded-full bg-amber-50 py-4 text-base font-semibold text-zinc-900 uppercase tracking-wide hover:bg-white active:bg-amber-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {submitting ? "..." : dict.submit}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
