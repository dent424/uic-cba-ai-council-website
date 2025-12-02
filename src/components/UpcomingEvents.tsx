"use client";

import { getUpcomingEvents } from "@/data/events";
import EventCard from "./EventCard";

export default function UpcomingEvents() {
  const events = getUpcomingEvents();

  return (
    <section id="upcoming" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-uic-navy mb-2">
          Upcoming Brownbag Sessions
        </h2>
        <p className="text-gray-600 mb-8">
          Join us for our weekly brownbag sessions exploring AI in business education.
          All sessions are held on Wednesdays.
        </p>

        {events.length > 0 ? (
          <div className="space-y-4">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600">
              No upcoming events scheduled. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
