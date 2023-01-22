import { useState } from "react";

//components
import { Section, FeaturesTabs, AntTabs, StyledTab, Panels } from "./styles";
import TitleAndSubtitle from "../titleAndSubtitle";
import { Container } from "@mui/material";
import Panel from "./panel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabs = [
  {
    title: "Bookmark in one click",
    subtitle: `Organize your bookmarks however you like. Our
            simple drag-and-drop interface gives you complete
            control over how you manage your favourite sites.`,
    src: "./images/illustration-features-tab-1.svg",
  },
  {
    title: "Intelligent search",
    subtitle: `Our powerful search feature will help you find saved
    sites in no time at all. No need to trawl through all of
    your bookmarks.`,
    src: "./images/illustration-features-tab-2.svg",
  },
  {
    title: "Share your bookmarks",
    subtitle: `Easily share your bookmarks and collections with
    others. Create a shareable link that you can send at
    the click of a button.`,
    src: "./images/illustration-features-tab-3.svg",
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section>
      <Container>
        <TitleAndSubtitle
          title="Features"
          subtitle="Our aim is to make it quick and easy for you to access your
        favorite websites. Your bookmarks sync between your devices
        so you can access them on the go."
          sx={{ marginTop: "70px" }}
        />
        <FeaturesTabs>
          <AntTabs
            aria-label="features tabs"
            value={activeTab}
            onChange={(_, value) => {
              setActiveTab(value);
            }}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <StyledTab label="Simple Bookmarking" {...a11yProps(0)} />
            <StyledTab label="Speedy Searching" {...a11yProps(1)} />
            <StyledTab label="Easy Sharing" {...a11yProps(2)} />
          </AntTabs>
          <Panels>
            {tabs.map((tab, idx) => (
              <Panel {...tab} tabNumber={idx} activeTab={activeTab} key={idx} />
            ))}
          </Panels>
        </FeaturesTabs>
      </Container>
      <div className="background"></div>
    </Section>
  );
}
