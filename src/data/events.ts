export interface BrownbagEvent {
  date: string;
  speaker: string;
  speakerInfo: string;
  topic: string;
  status: "upcoming" | "past";
  videoUrl?: string;
}

export const brownbagEvents: BrownbagEvent[] = [
  {
    date: "2025-07-09",
    speaker: "Alex Moore",
    speakerInfo: "UIC Marketing",
    topic: "Current and near future capabilities of Generative AI with applications to business courses",
    status: "past",
    videoUrl: "https://uic.zoom.us/rec/share/Nx3XvY6drjGwvz_3XHSbfBUsl8r0wt53Ge4oRimzzR0GuwkUJF-zud8hW5LVL48.GhDEYrK1lei8i1in",
  },
  {
    date: "2025-07-16",
    speaker: "Brad Stuart",
    speakerInfo: "UIC IDS",
    topic: "Assignment and assessment styles and structures in the age of AI",
    status: "past",
    videoUrl: "https://uic.zoom.us/rec/share/K_KORp_pkM26W0JYgXqWp1cz7l4lpo6fqOKiB8F_-wtYfWpGONzQXzIP6ZJCaite.1sNfYIW534gcHvgE",
  },
  {
    date: "2025-07-23",
    speaker: "Alex Moore",
    speakerInfo: "UIC Marketing",
    topic: "Creating Custom GPTs - specialized versions of ChatGPT tailored for your classroom needs",
    status: "past",
    videoUrl: "https://uic.zoom.us/rec/share/FhahYvltTW7v4vHBeUyUp8vdbghry8V_N349TXFhd_a7jdtxR7D2Jn_1kNt-W61F.bYPuR8OngNMTzX0d",
  },
  {
    date: "2025-07-30",
    speaker: "Yingda Lu",
    speakerInfo: "UIC IDS",
    topic: "Using AI-assisted Programming Tools in our Curriculum",
    status: "past",
    videoUrl: "https://uic.zoom.us/rec/share/_6vGMABfNaIbKMv0NxRYVcpOqSWx7CsvJWq9_jHXC2LiUHfXR7l5e7ucJsRP64ar.XI36ZYA_05NEWklb",
  },
  {
    date: "2025-08-06",
    speaker: "Özgür Arslan Ayaydin and Sayna Razi",
    speakerInfo: "UIC Finance & Marketing",
    topic: "CBA AI statement and guidance on CBA syllabus policies",
    status: "past",
    videoUrl: "https://uic.zoom.us/rec/share/qkkkI43cPS4CYKPphTjI76IbzEtF-cRmQ0JkWxj1ncoQf84Pid4kDVN_L4m8hXsI.N2xC9I_HGeTZk3mS",
  },
  {
    date: "2025-08-13",
    speaker: "AI Council Members",
    speakerInfo: "UIC AI Council",
    topic: "Open Q&A session",
    status: "past",
    videoUrl: "https://uic.zoom.us/rec/share/knDGEZyqAkZFJ9YkP5saNlWGblwIr0IAzlpZhdxjd9ZvB2eGm9OC9zOjLhOe9QhN.nCHbAXAICATbak6F",
  },
  {
    date: "2025-08-20",
    speaker: "Doug Lundquist",
    speakerInfo: "UIC IDS",
    topic: "Summer 2025 pilot effort in IDS 200 to introduce AI fundamentals to students and using AI to assist with course grading",
    status: "past",
    videoUrl: "https://uic.zoom.us/rec/share/RjS7rcvJmcP5fco-3cwSk4iRxG5ie7MncM3sVTAAfIi8XeinmwvIgZyhATT5ztpZ.aa0azs5L5u-ehf-B",
  },
  {
    date: "2025-09-24",
    speaker: "Dominique Badoer",
    speakerInfo: "UIC Finance",
    topic: "Custom GPTs for classroom use",
    status: "past",
    videoUrl: "https://uic.zoom.us/rec/share/JIaxAYQL3RzCQqynSPIoqtssxER5ygDH81I86TsAGSFXKXbNHZLPHw2bb5KhLL9o.ayM7BxFzyD0o1zIe",
  },
  {
    date: "2025-10-22",
    speaker: "Danny Katz",
    speakerInfo: "Northeastern Marketing",
    topic: "Creating custom AI textbooks",
    status: "past",
    videoUrl: "https://uic.zoom.us/rec/share/OqfIc1Q1YDuJ-oDpMKFjRUyEo2vm9raUlHZhFfNF5H913dHeTWjhNx9V8jdfyRaE.JhtfeVeJSrGke7xL?from=hub",
  },
  {
    date: "2025-11-12",
    speaker: "Patrick Horton",
    speakerInfo: "UIC CATE",
    topic: "Refreshing Your Assignments for the Age of AI",
    status: "past",
    videoUrl: "https://uic.zoom.us/rec/share/9gOyFkdEoqculo_UXkmyqv8MBExTddRUM2CqrQya3lUVfTEUyjG9qTJr3uSEpClX.s076u8ScK3El4YNB?from=hub",
  },
  {
    date: "2026-01-21",
    speaker: "Barb Barney-McNamara",
    speakerInfo: "UIC Marketing",
    topic: "TBD",
    status: "upcoming",
  },
];

export function getUpcomingEvents(): BrownbagEvent[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return brownbagEvents.filter(event => {
    if (event.date === "TBD") return true;
    const eventDate = new Date(event.date);
    return eventDate >= today && event.status === "upcoming";
  });
}

export function getPastEvents(): BrownbagEvent[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return brownbagEvents.filter(event => {
    if (event.date === "TBD") return false;
    const eventDate = new Date(event.date);
    return eventDate < today || event.status === "past";
  });
}

export function formatDate(dateString: string): string {
  if (dateString === "TBD") return "TBD";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
