import Link from "next/link";
import ProductFeatureBlock from "./product_feature_block";
export default function ProductFeatureSection() {
  const features = [
    {
      displayOption: "description-media",
      id: 0,
      description: {
        title: "Subtitling Assistant",
        description: [
          "EZTitles uses the power of AI to create subtitles automatically.\n" +
            "The Assistant recognizes characters' speech and generates\n" +
            "captions in accordance with your criteria.",
          "<strong>Accurate. Secure. Effective.</strong>",
        ],
        actions: [
          { name: "learn more", href: "#" },
          { name: "watch demo", href: "" },
        ],
      },
      media: {
        image: "/images/software/eztitles/subassi.png",
        video: "/images/software/eztitles/subassi.png",
        alt: "subtitling assistant",
      },
    },
    {
      displayOption: "media-description",
      id: 1,
      description: {
        title: "Production scripts import",
        description: [
          "<strong>Import CCSL, CDSL, Dialogue Lists and other tabular formats without effort.</strong>",
          "EZTtitles has a new solution for easy handling of production scripts. Import them through the facilitated form with an option to Auto-detect the columns. You could also identify the columns manually and choose the filter criteria for the imported text to skip the parts that doesn't belong to the subtitles.",
        ],
        actions: [
          { name: "how to use", href: "#" },
          { name: "watch demo", href: "" },
        ],
      },
      media: {
        image: "/images/software/eztitles/subassi.png",
        video: "/images/software/eztitles/subassi.png",
        alt: "Production scripts import alt",
      },
    },
    {
      displayOption: "description-description",
      id: 3,
      description: {
        title: "Macros",
        description: [
          "Record frequently repeated operations or code-in little\n" +
            "programs which will<strong> save you tons of time.</strong>",
          "Execute them anytime with a quick shortcut.",
        ],
        actions: [
          { name: "watch demo", href: "#" },
          { name: "how to use", href: "" },
        ],
      },
      media: {
        title: "Backup & Recovery",
        description: [
          "Never lose the work you have put into your projects, no matter the circumstances.",
          "EZTitles has a complete and comprehensive" +
            "<strong> file backup and recovery solution.</strong>",
        ],
        actions: [
          { name: "watch demo", href: "#" },
          { name: "how to use", href: "" },
        ],
      },
    },
    {
      displayOption: "description-media",
      id: 4,
      description: {
        title: "Dragon Integration",
        description: [
          "EZTitles now works with Dragon Speech Recognition.",
          "Rest your wrists and<strong> type captions with your voice.</strong> Fix mistakes and execute commands hands-free.",
        ],
        actions: [{ name: "how to use", href: "" }],
      },
      media: {
        image: "/images/software/eztitles/subassi.png",
        video: "/images/software/eztitles/subassi.png",
        alt: "dragon alt",
      },
    },
    {
      displayOption: "media-description",
      id: 5,
      description: {
        title: "Split text to subtitles",
        description: [
          "Split any block of text into perfect subtitles which comply with all your requirements.",
        ],
        actions: [
          { name: "learn more", href: "#" },
          { name: "how to use", href: "" },
        ],
      },
      media: {
        image: "/images/software/eztitles/subassi.png",
        video: "/images/software/eztitles/subassi.png",
        alt: "split alt",
      },
    },
    {
      displayOption: "description-media",
      id: 6,
      description: {
        title: "East Asian Scripts",
        description: [
          "With EZTitles you can input <strong> Vertical text</strong> common\n" +
            "for the Chinese, Japanese and Korean language scripts.\n" +
            "<strong> Horizontal groups, Rubies and Bouten </strong>are also\n" +
            "an easy task for our subtitling software.",
        ],
        actions: [
          { name: "learn more", href: "#" },
          { name: "how to use", href: "" },
        ],
      },
      media: {
        image: "/images/software/eztitles/subassi.png",
        video: "/images/software/eztitles/subassi.png",
        alt: "east asian script alt",
      },
    },
    {
      displayOption: "media-description",
      id: 7,
      description: {
        title: "Subtitles and Captions Conversion",
        description: [
          "EZTitles is a powerful subtitles and captions conversion tool.\n" +
            "It allows you to convert a single file between different <a href='#'>file formats</a>\n" +
            "and also to perform an accurate <a href='#'>Frame Rate and Timecode conversions.</a>\n" +
            "If you do a large scale bulk conversions and look for an automated tool,\n" +
            "then you need <a href='/convert'>EZConvert</a>. It’s a separate professional conversion software\n" +
            "that provides an arsenal of automations like Quality Control, Watch Folders,\n" +
            "Workflows and Command Line execution.",
        ],
        actions: [
          { name: "learn more", href: "#" },
          { name: "how to use", href: "" },
        ],
      },
      media: {
        image: "/images/software/eztitles/subassi.png",
        video: "/images/software/eztitles/subassi.png",
        alt: "conversion alt",
      },
    },
    {
      displayOption: "description-media",
      id: 8,
      description: {
        title: "Adobe Premiere Compliant",
        description: [
          "You could easily use your professinally created subtitles in Adobe Premiere\n" +
            "without using any plug-ins. EZTitles allows you to export the captions\n" +
            "as images and preview them in Premiere the exact way they were created\n" +
            "in EZTitles. This great feature is part of the EZTitles Ultimate edition.\n" +
            "You cold check and compare the different <a href='#'>EZTitles editions here.</a>",
        ],
        actions: [
          { name: "learn more", href: "#" },
          { name: "how to use", href: "" },
        ],
      },
      media: {
        image: "/images/software/eztitles/subassi.png",
        video: "/images/software/eztitles/subassi.png",
        alt: "premiere alt",
      },
    },
  ];

  const features_jsx = features.map((feature) => {
    return <ProductFeatureBlock feature={feature} />;
  });

  return (
    <section className="section flex-center-center flex-col gap-l">
      <style jsx>{``}</style>
      {features_jsx}
    </section>
  );
}
