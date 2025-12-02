"use client";

import { getPastEvents } from "@/data/events";
import EventCard from "./EventCard";

export default function PastEvents() {
  const events = getPastEvents();

  if (events.length === 0) {
    return null;
  }

  return (
    <section id="past" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-uic-navy mb-2">
          Past Brownbag Sessions
        </h2>
        <p className="text-gray-600 mb-8">
          Catch up on previous sessions. Recordings are available for select presentations.
        </p>

        <div className="space-y-4">
          {events.map((event, index) => (
            <EventCard key={index} event={event} showVideo={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
