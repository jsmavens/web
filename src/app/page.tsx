import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { UpcomingEvents } from "@/components/upcoming-events";
import { PastEvents } from "@/components/past-events";
import { PhotoGallery } from "@/components/photo-gallery";
import { Sponsors } from "@/components/sponsors";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UpcomingEvents />
        <PastEvents />
        <PhotoGallery />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
