import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Globe,
  Github,
  Users,
  Code,
  Briefcase,
  Mail,
} from "lucide-react";

const Index = () => {
  // Carousel images and state
  const carouselImages = [
    "/1.png",
    "/2.png",
    "/3.webp",
    "/4.webp",
    "/5.webp",
    "/6.png",
    "/7.png",
    "/8.png",
  ];
  const [carouselCurrent, setCarouselCurrent] = React.useState(0);

  // Auto-advance carousel every 2 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCarouselCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);
  const projects = [
    {
      name: "crop.photo",
      description: "Image cropping and editing platform",
    },
    {
      name: "supermind.bot",
      description: "AI-powered automation bot",
    },
    {
      name: "lovedbymen.com",
      description: "Community platform with full-stack development",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Upwork Image Banner */}
      <div className="w-full flex justify-center bg-gradient-to-b from-green-200/30 to-transparent pt-8 pb-4">
        <img
          src="/1_uPc0XtLTVs-cjVhKFPgdRQ.webp"
          alt="Upwork Banner"
          className="rounded-xl shadow-lg max-w-3xl w-full object-cover border border-green-200/40"
          style={{ maxHeight: "260px" }}
        />
      </div>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-blue-400" />
            <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
              Collaboration Proposal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            I would like to collaborate with you on{" "}
            <a
              href="https://www.upwork.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="align-middle inline-block"
              style={{ verticalAlign: "middle" }}
            >
              <img
                src="/upwork.png"
                alt="Upwork"
                style={{
                  display: "inline",
                  height: "1.5em",
                  marginBottom: "0.2em",
                }}
              />
            </a>
          </h1>
        </div>

        {/* Introduction */}
        {/* Why I'm Reaching Out & The Challenge (Merged) */}
        <Card className="max-w-4xl mx-auto mb-8 bg-gray-800/50 border-gray-700">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
              <Mail className="h-6 w-6 text-blue-400" />
              Why I'm Reaching Out
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="flex flex-col md:flex-row gap-8 items-start text-gray-300 leading-relaxed">
              {/* Carousel on the left */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="relative w-full max-w-md mx-auto aspect-[4/3] rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center shadow-md border border-gray-600">
                  {carouselImages.map((img, idx) => (
                    <img
                      key={img}
                      src={img}
                      alt={`carousel-img-${idx}`}
                      className={`object-cover w-full h-full bg-gray-800 absolute top-0 left-0 transition-opacity duration-700 ${
                        idx === carouselCurrent
                          ? "opacity-100 z-10"
                          : "opacity-0 z-0"
                      }`}
                      style={{ width: "100%", height: "100%" }}
                    />
                  ))}
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900/60 text-white rounded-full p-1 hover:bg-gray-800"
                    onClick={() =>
                      setCarouselCurrent(
                        (carouselCurrent - 1 + carouselImages.length) %
                          carouselImages.length
                      )
                    }
                    aria-label="Previous"
                    type="button"
                  >
                    &#8592;
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/60 text-white rounded-full p-1 hover:bg-gray-800"
                    onClick={() =>
                      setCarouselCurrent(
                        (carouselCurrent + 1) % carouselImages.length
                      )
                    }
                    aria-label="Next"
                    type="button"
                  >
                    &#8594;
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {carouselImages.map((_, idx) => (
                      <span
                        key={idx}
                        className={`inline-block w-2 h-2 rounded-full ${
                          idx === carouselCurrent
                            ? "bg-green-400"
                            : "bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Description on the right, vertically centered with carousel */}
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                <p className="text-left text-lg">
                  My name is{" "}
                  <a
                    href="https://roger.lovedbymen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    Roger Chan
                  </a>{" "}
                  and I am a web & AI developer in Hong Kong.
                </p>
                <p className="text-left">
                  I recently came across your profile on
                  <a
                    href="https://app.usebraintrust.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-400 transition-colors mx-1"
                  >
                    Braintrust
                  </a>
                  and
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-400 transition-colors mx-1"
                  >
                    GitHub
                  </a>
                  and was really impressed with your work background and skills.
                </p>
                <p className="text-left">
                  Until now I have worked as a full-stack developer in several
                  companies and freelancing platforms, but in these days it is
                  really hard to get jobs as a freelancer.
                </p>
              </div>
            </div>
            <Separator className="bg-gray-600" />
            <h3 className="text-xl font-semibold text-white">
              The Challenge I'm facing
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Some high-paying opportunities are restricted to candidates based
              in Europe or the U.S., likely because clients prefer developers in
              similar time zones. That said, I'm very comfortable working in
              U.S. and European time zones — I've done it before without any
              issues. So I have decided to collaborate with European senior
              developers because my job interview skill is not so good. Every
              time I tried the interview, I failed because of my verbal English
              and Asian accent. But I can perfectly understand English and I'm
              really good at coding.
            </p>
            <Separator className="bg-gray-600" />
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                The Solution I think
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Through strategic collaboration, we can combine your
                communication strengths with my technical expertise. I'll handle
                development work while you manage client communications,
                creating a win-win partnership.
              </p>
            </div>
            <Separator className="bg-gray-600" />
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                {" "}
                How We'll Work Together
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Share the profit fairly between us</li>
                <li>• Get more jobs through strategic collaboration</li>
                <li>• I handle all development work</li>
                <li>• You manage client communications when needed</li>
                <li>
                  • I'm familiar with Upwork bidding strategy for quick results
                </li>
              </ul>
            </div>
            <Separator className="my-6 bg-gray-600" />
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 border border-green-600"
              >
                <a
                  href="https://roger.lovedbymen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Portfolio
                </a>
              </Button>
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 border border-green-600"
              >
                <a
                  href="https://github.com/RogerChan555"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub Profile
                </a>
              </Button>
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 border border-green-600"
              >
                <a
                  href="https://t.me/rchan072"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
                  Telegram
                </a>
              </Button>
              <Button
                asChild
                className="bg-green-600 text-white px-6 py-3 border border-green-600 opacity-70 cursor-not-allowed"
                disabled
              >
                <span className="flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-1.528 0-2.764-1.236-2.764-2.764s1.236-2.764 2.764-2.764 2.764 1.236 2.764 2.764-1.236 2.764-2.764 2.764zm-10.944 0c-1.528 0-2.764-1.236-2.764-2.764s1.236-2.764 2.764-2.764 2.764 1.236 2.764 2.764-1.236 2.764-2.764 2.764zm5.472 4.618c-2.485 0-7.5 1.243-7.5 3.729V22h15v-.271c0-2.486-5.015-3.729-7.5-3.729z"/></svg>
                  Discord: <span className="ml-1 font-mono">rc_01_03</span>
                </span>
              </Button>
            </div>
            <Separator className="my-6 bg-gray-600" />
            <p className="text-gray-300 font-medium">
              Best Regards,
              <br />
              <span className="text-blue-400 font-semibold">Roger</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
