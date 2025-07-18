import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Globe, Github, Users, Code, Briefcase } from "lucide-react";

const Index = () => {
  const projects = [
    {
      name: "crop.photo",
      description: "Image cropping and editing platform"
    },
    {
      name: "supermind.bot",
      description: "AI-powered automation bot"
    },
    {
      name: "lovedbymen.com",
      description: "Community platform with full-stack development"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
            I would like to collaborate with you On Upwork
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Building successful partnerships through reliable collaboration and shared expertise.
          </p>
        </div>

        {/* Introduction */}
        <Card className="max-w-4xl mx-auto mb-8 bg-gray-800/50 border-gray-700">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
              <Users className="h-6 w-6 text-blue-400" />
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p className="text-center text-lg">
                My name is <span className="font-semibold text-blue-400">Roger Chan</span> and I am a web & AI developer in Hong Kong.
              </p>
              <p>
                I recently came across your profile on Braintrust and GitHub and was really impressed with your work background and skills.
              </p>
              <p>
                Until now I have worked as a full-stack developer in several companies and freelancing platforms, but in these days it is really hard to get jobs as a freelancer.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* The Challenge & Solution */}
        <Card className="max-w-4xl mx-auto mb-8 bg-gray-800/50 border-gray-700">
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">The Challenge</h3>
              <p className="text-gray-300 leading-relaxed">
                I have decided to collaborate with European senior developers because my job interview skill is not so good. 
                Every time I tried the interview, I failed because of my verbal English and Asian accent. 
                But I can perfectly understand English and I'm really good at coding.
              </p>
            </div>
            
            <Separator className="bg-gray-600" />
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">The Solution</h3>
              <p className="text-gray-300 leading-relaxed">
                Through strategic collaboration, we can combine your communication strengths with my technical expertise. 
                I'll handle development work while you manage client communications, creating a win-win partnership.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Work */}
        <Card className="max-w-4xl mx-auto mb-8 bg-gray-800/50 border-gray-700">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
              <Code className="h-6 w-6 text-blue-400" />
              Recent Previous Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-4 text-center border border-gray-600">
                  <h3 className="font-semibold text-white mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Collaboration Proposal */}
        <Card className="max-w-4xl mx-auto mb-8 bg-gray-800/50 border-gray-700">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
              <Briefcase className="h-6 w-6 text-blue-400" />
              Collaboration Proposal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                You may have no project or you can't forward your current work for some privacy reasons, then we can try to get new jobs from Upwork.
              </p>
              <p>
                Actually in Upwork, the most boring and time-taking process is to send proposals. 
                I can handle the proposal submissions, and if we land a job, I'll take care of the development work and you'd just need to have a call with the client when it is necessary.
              </p>
              <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h4 className="font-semibold text-blue-300 mb-3">How We'll Work Together:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Share the profit fairly between us</li>
                  <li>• Get more jobs through strategic collaboration</li>
                  <li>• I handle all development work</li>
                  <li>• You manage client communications when needed</li>
                  <li>• I'm familiar with Upwork bidding strategy for quick results</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="max-w-4xl mx-auto bg-gray-800/50 border-gray-700">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Let's Connect</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-gray-300 text-lg">
              I am looking forward to hearing from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
              >
                <a href="https://roger.lovedbymen.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-2" />
                  View Portfolio
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-6 py-3"
              >
                <a href="https://github.com/RogerChan555" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub Profile
                </a>
              </Button>
            </div>
            <Separator className="my-6 bg-gray-600" />
            <p className="text-gray-300 font-medium">
              Best Regards,<br />
              <span className="text-blue-400 font-semibold">Roger</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;