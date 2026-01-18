import AboutTabsSection from "@/components/AboutTabsSection";
import ExperienceGridSection from "@/components/ExperienceGridSection";
import Footer from "@/components/Footer";
import GlimpseSection from "@/components/GlimpseSection";
import { Header } from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import LaunchingConnectivity from "@/components/LaunchingConnectivity";
import Professionals from "@/components/Professionals";
import ProgramsSection from "@/components/ProgramsSection";
import TextMarquee from "@/components/TextMarquee";
import TwoPromoBanner from "@/components/TwoPromoBanner";

export default function Home() {
  return (
    <main>
      <Header/>
      <HeroBanner
        bgImage="/banner.gif"
        topText="SSA HUNTER VALLEY"
        title="GROW YOUR GAME WITH THE"
        highlightTitle="PROFESSIONALS"
        tags={["ADOPT", "NURTURE", "DELIVER"]}
        buttonText="Register Now"
        onButtonClick="#"
        weather={{
          label: "WEATHER",
          location: "Hunter Valley",
          temp: "19°C",
          status: "Weather",
          time: "Saturday, 8 pm",
          buttons: [
            { text: "Ongoing Matches", onClick: () => alert("Matches Clicked") },
            { text: "Score", onClick: () => alert("Score Clicked") },
          ],
        }}
      />
      <AboutTabsSection />
      <GlimpseSection
        title="A Glimpse of Excellence"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        pointsLeft={[
          {
            text: "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium, 5 Star Hunter Valley resort and airport all in 500 meters radius",
          },
          { text: "First one stop tennis academy in Asia Pacific" },
        ]}
        pointsRight={[
          {
            text: "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium, 5 Star Hunter Valley resort and airport all in 500 meters radius",
          },
          { text: "First one stop tennis academy in Asia Pacific" },
        ]}
        buttonText="Register Now"
        onButtonClick="#"
        leftImage={{
          src: "https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg?auto=compress&cs=tinysrgb&w=1200",
          alt: "Tennis player",
        }}
        rightImage={{
          src: "https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=1400",
          alt: "Tennis courts",
        }}
        backgroundImage="/bgglimp.webp"
      />
      <ProgramsSection
        heading="Programs"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        buttonText="Register Now"
        onButtonClick={"#"}
        cards={[
          {
            title: "Academy",
            subtitle: "Live and train with us",
            image:
              "https://images.pexels.com/photos/573922/pexels-photo-573922.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
          {
            title: "Camps",
            subtitle: "Train like a pro with us",
            image:
              "https://images.pexels.com/photos/8224069/pexels-photo-8224069.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
          {
            title: "Performance",
            subtitle: "Elevate your game with us",
            image:
              "https://images.pexels.com/photos/573866/pexels-photo-573866.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
        ]}
      />
      <TextMarquee
        items={["ADOPT", "NURTURE", "DELIVER",]}
        outlineItems={["DELIVER", "ADOPT"]}
        speed={14}
        accentColor="#97B81B"
      />
      <LaunchingConnectivity
        launchingText="LAUNCHING"
        title={`Signature Slam Academy\nHunter Valley`}
        subtitle="SSA Connectivity"
        items={[
          { name: "Hunter Valley Golf And Country Club", distance: "220m" },
          { name: "Rydges Resort Hunter Valley", distance: "550m" },
          { name: "Cressnock Airport", distance: "1.7km" },
          { name: "Cressnock CBD", distance: "7km" },
          { name: "Nulkaba Public School", distance: "4.8km" },
          { name: "Cressnock Hospital", distance: "7.3km" },
          { name: "Mcdonalds, KFC, Oporto", distance: "7km" },
        ]}
        image={{
          src: "https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Academy view",
        }}
        panelGradient={{
          from: "#0B3D47",
          to: "#7FAE2A",
        }}
      />
      <Professionals
        heading="Meet our professionals"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        buttonText="View All"
        onButtonClick={"#"}
        cards={[
          {
            title: "Craig Tiley",
            subtitle: "CEO Tennis Australia & Australian Open",
            image:
              "https://images.pexels.com/photos/573922/pexels-photo-573922.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
          {
            title: "Stephen Farrow",
            subtitle: "Director - Tournament, Players & International Relations",
            image:
              "https://images.pexels.com/photos/8224069/pexels-photo-8224069.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
          {
            title: "Cameron Pearson",
            subtitle: "Head Major Events - Tennis Australia",
            image:
              "https://images.pexels.com/photos/573866/pexels-photo-573866.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
        ]}
      />
       <ExperienceGridSection
        bg={{ left: "#fff", right: "#000" }}
        watermark={{ enabled: true, text: "" }}
        cards={[
          {
            id: 1,
            title: "Tennis",
            description:
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image:
              "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1400",
            tags: ["9 Clay Courts", "4 Hard Courts"],
            onPlay: "() => alert()",
          },
          {
            id: 2,
            title: "Accommodation",
            description:
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image:
              "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1400",
            tags: ["5 Star Hotel"],
            onPlay: "() => alert()",
          },
          {
            id: 3,
            title: "Gym",
            description:
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image:
              "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1400",
            tags: [],
            onPlay: "() => alert()",
          },
          {
            id: 4,
            title: "Resort",
            description:
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image:
              "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1400",
            tags: [],
            onPlay: "() => alert()",
          },
        ]}
      />
      <TwoPromoBanner
        left={{
          title: "Our Coaches",
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          buttonText: "Read More",
          image:
            "https://images.pexels.com/photos/8224031/pexels-photo-8224031.jpeg?auto=compress&cs=tinysrgb&w=1400",
          onClick: "",
        }}
        right={{
          title: "Events",
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          buttonText: "Read More",
          bgColor: "#97B81B",
          onClick: "",
        }}
      />
      <Footer
        logoText="SSA"
        tagline="ADOPT NURTURE DELIVER"
        menuLinks={[
          { label: "About Us", href: "#" },
          { label: "Coaches", href: "#" },
          { label: "News", href: "#" },
          { label: "Matches", href: "#" },
          { label: "Events", href: "#" },
          { label: "FAQs", href: "#" },
        ]}
        programLinks={[
          { label: "Programs", href: "#" },
          { label: "Amenities", href: "#" },
          { label: "Blogs", href: "#" },
        ]}
        contactTitle="Signature Slam Academy"
        contactItems={[
          {
            type: "address",
            text: "30 Wills Hill Road, Lovedale, NSW",
          },
          {
            type: "phone",
            text: "+91 5642589752",
            href: "tel:+915642589752",
          },
          {
            type: "email",
            text: "info@ssagroup.com",
            href: "mailto:info@ssagroup.com",
          },
        ]}
        socialTitle="Connect with us"
        socialLinks={[
          { type: "facebook", href: "#" },
          { type: "x", href: "#" },
          { type: "instagram", href: "#" },
          { type: "youtube", href: "#" },
        ]}
        bottomLeftText="Terms And Condition"
        bottomCenterText="© 2023 All Rights Reserved www.signatureslamacademy.com"
        bottomRightText="Privacy Policy"
        bottomLeftHref="#"
        bottomRightHref="#"
        accentColor="#97B81B"
      />
    </main>
  );
}
