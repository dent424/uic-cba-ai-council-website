import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UpcomingEvents from "@/components/UpcomingEvents";
import PastEvents from "@/components/PastEvents";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <UpcomingEvents />
      <PastEvents />
      <About />
      <Footer />
    </main>
  );
}
