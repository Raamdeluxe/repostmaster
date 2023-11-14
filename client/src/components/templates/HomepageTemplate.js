import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import KeyFeatures from "../sections/KeyFeatures";
import Testimonials from "../sections/Testimonials";
import Announcement from "../sections/Announcement";
import Pricing from "../sections/Pricing";
import Waitlist from "../sections/Waitlist";
import Footer from "../sections/Footer";

export default function HomepageTemplate() {
  return (
    <div>
      <Navbar />
      <Hero />
      <KeyFeatures />
      <Testimonials />
      <Announcement />
      <Pricing />
      <Waitlist />
      <Footer />
    </div>
  );
}
