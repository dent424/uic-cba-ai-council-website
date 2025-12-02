import { BrownbagEvent, formatDate } from "@/data/events";

interface EventCardProps {
  event: BrownbagEvent;
  showVideo?: boolean;
}

export default function EventCard({ event, showVideo = false }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="text-uic-light-blue font-semibold text-sm uppercase tracking-wide mb-2">
            {formatDate(event.date)}
          </div>
          <h3 className="text-xl font-bold text-uic-navy mb-2">
            {event.topic}
          </h3>
          <div className="text-gray-700">
            <span className="font-medium">{event.speaker}</span>
            <span className="text-gray-500 mx-2">|</span>
            <span className="text-gray-600">{event.speakerInfo}</span>
          </div>
        </div>
        {showVideo && event.videoUrl && (
          <a
            href={event.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-uic-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
            Watch Recording
          </a>
        )}
      </div>
    </div>
  );
}
