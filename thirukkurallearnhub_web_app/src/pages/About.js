import React from "react";
import Card from "../components/Card";

/**
 * About Page component: Presents Thirukkural and Thiruvalluvar info in engaging, styled sections.
 * PUBLIC_INTERFACE
 */
function About() {
  return (
    <div className="hero" style={{ paddingBottom: 32 }}>
      <div className="subtitle">About Thirukkural & Thiruvalluvar</div>
      <h1 className="title" style={{ marginBottom: 14 }}>Thirukkural</h1>
      <div className="description" style={{ marginBottom: 26 }}>
        ThirukkuralLearnHub brings you the timeless wisdom of Thirukkural, one of the most celebrated works of classical Tamil literature, with a special focus on mobile-friendly, accessible learning.
      </div>
      <div className="kural-card-list" style={{ marginTop: 0 }}>
        <Card>
          <div className="kural-card-title" style={{ fontSize: "1.18rem", marginBottom: 2 }}>
            What is Thirukkural?
          </div>
          <div className="kural-card-translation" style={{ marginBottom: 5 }}>
            Thirukkural (திருக்குறள்) is a classic Tamil text composed of 1330 succinct couplets (“Kurals”), authored by the great poet-philosopher Thiruvalluvar.
          </div>
          <div className="kural-card-explanation">
            Each Kural delivers profound truths on how to live a meaningful, ethical, and joyful life. Spanning universal themes, Thirukkural transcends time, geography, and faith to inspire all.
          </div>
        </Card>
        <Card>
          <div className="kural-card-title" style={{ fontSize: "1.15rem", marginBottom: 2 }}>
            Themes & Structure
          </div>
          <div className="kural-card-translation" style={{ marginBottom: 5 }}>
            Thirukkural is organized into three main sections:
          </div>
          <ul className="kural-card-explanation" style={{ marginLeft: 18, marginBottom: 3 }}>
            <li><b>Aram (Virtue)</b>: Moral values, ethics, and duties for an upright life.</li>
            <li><b>Porul (Wealth)</b>: Social order, governance, and prosperity through justice.</li>
            <li><b>Inbam (Love)</b>: The emotional world, love, and personal fulfillment.</li>
          </ul>
          <div className="kural-card-explanation">
            Each section, or <i>Athigaaram</i> (chapter), includes carefully crafted couplets that blend poetic beauty and practical wisdom.
          </div>
        </Card>
        <Card>
          <div className="kural-card-title" style={{ fontSize: "1.15rem", marginBottom: 2 }}>
            Historical Significance
          </div>
          <div className="kural-card-translation" style={{ marginBottom: 5 }}>
            Believed to be written over 2000 years ago (between 2nd century BCE and 5th century CE), Thirukkural stands as a pillar of humanistic thought, moral guidance, and literary excellence.
          </div>
          <div className="kural-card-explanation">
            Its concise verses have been translated into over 40 languages, and continue to guide leaders, thinkers, and families in India and worldwide.
          </div>
        </Card>
        <Card>
          <div className="kural-card-title" style={{ fontSize: "1.13rem", marginBottom: 2 }}>
            About Thiruvalluvar
          </div>
          <div className="kural-card-translation" style={{ marginBottom: 5 }}>
            Thiruvalluvar, revered as “Valluvar”, was a Tamil poet and philosopher from ancient South India.
          </div>
          <div className="kural-card-explanation">
            Known for his humility, compassion, and insight, Thiruvalluvar’s only surviving work is the Thirukkural — his universal message of kindness, justice, and love endures to this day. Statues and memorials celebrate him across Tamil Nadu and the world.
          </div>
        </Card>
        <Card>
          <div className="kural-card-title" style={{ fontSize: "1.12rem", marginBottom: 2 }}>
            Why Thirukkural Matters Today
          </div>
          <div className="kural-card-explanation">
            <ul style={{ marginLeft: 18, marginBottom: 2 }}>
              <li>Offers timeless ethical guidance.</li>
              <li>Encourages social harmony and respect among all people.</li>
              <li>Celebrates human love, learning, and the power of virtuous living.</li>
            </ul>
            Discover more as you explore the Kurals and test your knowledge!
          </div>
        </Card>
      </div>
      <div className="description" style={{ marginTop: 14, fontSize: "1rem", color: "var(--accent-color)" }}>
        <em>
          “All the world’s beings will draw near to him who abides by the truths in Thirukkural”<br /> — Ancient Tamil proverb
        </em>
      </div>
    </div>
  );
}

export default About;
