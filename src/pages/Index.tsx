
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Globe, Github, ExternalLink, Users, Code, Briefcase } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
              Collaboration Proposal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            I hope you are lucky in everything you do.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Building successful partnerships through reliable collaboration and shared expertise.
          </p>
        </div>

        {/* Introduction Card */}
        <Card className="max-w-4xl mx-auto mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-900 flex items-center justify-center gap-2">
              <Users className="h-6 w-6 text-blue-600" />
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
              <p className="text-center text-lg">
                My name is <span className="font-semibold text-blue-600">Roger Chan</span> and I am a web & AI developer in Hong Kong.
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

        {/* Challenge & Solution */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">The Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">
                I have decided to collaborate with European senior developers because my job interview skill is not so good. 
                Every time I tried the interview, I failed because of my verbal English and Asian accent. 
                But I can perfectly understand English and I'm really good at coding.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">The Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">
                Through strategic collaboration, we can combine your communication strengths with my technical expertise. 
                I'll handle development work while you manage client communications, creating a win-win partnership.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Work */}
        <Card className="max-w-4xl mx-auto mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-900 flex items-center justify-center gap-2">
              <Code className="h-6 w-6 text-blue-600" />
              Recent Previous Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-4 text-center hover:bg-slate-100 transition-colors duration-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{project.name}</h3>
                  <p className="text-sm text-slate-600">{project.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Collaboration Proposal */}
        <Card className="max-w-4xl mx-auto mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-500">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-900 flex items-center justify-center gap-2">
              <Briefcase className="h-6 w-6 text-blue-600" />
              Collaboration Proposal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
              <p>
                You may have no project or you can't forward your current work for some privacy reasons, then we can try to get new jobs from Upwork.
              </p>
              <p>
                Actually in Upwork, the most boring and time-taking process is to send proposals. 
                I can handle the proposal submissions, and if we land a job, I'll take care of the development work and you'd just need to have a call with the client when it is necessary.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-2">How We'll Work Together:</h4>
                <ul className="space-y-2 text-blue-800">
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
        <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-900">Let's Connect</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-slate-700 text-lg">
              I am looking forward to hearing from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <a href="https://roger.lovedbymen.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-2" />
                  View Portfolio
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <a href="https://github.com/RogerChan555" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub Profile
                </a>
              </Button>
            </div>
            <Separator className="my-6" />
            <p className="text-slate-600 font-medium">
              Best Regards,<br />
              <span className="text-blue-600 font-semibold">Roger</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
