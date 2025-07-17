
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Globe, Github, ExternalLink, Users, Code, Briefcase, Sparkles } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-1/4 left-1/4 w-4 h-4 text-blue-400/30 animate-pulse" />
        <Sparkles className="absolute top-1/3 right-1/3 w-3 h-3 text-purple-400/30 animate-pulse delay-500" />
        <Sparkles className="absolute bottom-1/4 left-1/2 w-5 h-5 text-cyan-400/30 animate-pulse delay-1000" />
        <Sparkles className="absolute top-2/3 right-1/4 w-3 h-3 text-indigo-400/30 animate-pulse delay-1500" />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-blue-400" />
            <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
              Collaboration Proposal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            I hope you are lucky in everything you do.
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Building successful partnerships through reliable collaboration and shared expertise.
          </p>
        </div>

        {/* Introduction Card */}
        <Card className="max-w-4xl mx-auto mb-8 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
              <Users className="h-6 w-6 text-blue-400" />
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop" 
                alt="Developer workspace" 
                className="rounded-lg shadow-lg w-full max-w-md h-48 object-cover"
              />
            </div>
            <div className="prose prose-lg max-w-none text-slate-300 leading-relaxed">
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

        {/* Challenge & Solution */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-2xl hover:shadow-3xl transition-all duration-300 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-white">The Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=200&fit=crop" 
                  alt="Challenging mountain path" 
                  className="rounded-lg shadow-lg w-full h-32 object-cover"
                />
              </div>
              <p className="text-slate-300 leading-relaxed">
                I have decided to collaborate with European senior developers because my job interview skill is not so good. 
                Every time I tried the interview, I failed because of my verbal English and Asian accent. 
                But I can perfectly understand English and I'm really good at coding.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-2xl hover:shadow-3xl transition-all duration-300 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-white">The Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=200&fit=crop" 
                  alt="Collaborative workspace" 
                  className="rounded-lg shadow-lg w-full h-32 object-cover"
                />
              </div>
              <p className="text-slate-300 leading-relaxed">
                Through strategic collaboration, we can combine your communication strengths with my technical expertise. 
                I'll handle development work while you manage client communications, creating a win-win partnership.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Work */}
        <Card className="max-w-4xl mx-auto mb-8 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
              <Code className="h-6 w-6 text-blue-400" />
              Recent Previous Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=300&fit=crop" 
                alt="Code development" 
                className="rounded-lg shadow-lg w-full max-w-2xl h-48 object-cover"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <div key={index} className="bg-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-700/70 transition-colors duration-200 border border-slate-600">
                  <h3 className="font-semibold text-white mb-2">{project.name}</h3>
                  <p className="text-sm text-slate-300">{project.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Collaboration Proposal */}
        <Card className="max-w-4xl mx-auto mb-8 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
              <Briefcase className="h-6 w-6 text-blue-400" />
              Collaboration Proposal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="mb-6 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=300&fit=crop" 
                alt="Starry night collaboration" 
                className="rounded-lg shadow-lg w-full max-w-2xl h-48 object-cover"
              />
            </div>
            <div className="prose prose-lg max-w-none text-slate-300 leading-relaxed">
              <p>
                You may have no project or you can't forward your current work for some privacy reasons, then we can try to get new jobs from Upwork.
              </p>
              <p>
                Actually in Upwork, the most boring and time-taking process is to send proposals. 
                I can handle the proposal submissions, and if we land a job, I'll take care of the development work and you'd just need to have a call with the client when it is necessary.
              </p>
              <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-700/50">
                <h4 className="font-semibold text-blue-300 mb-2">How We'll Work Together:</h4>
                <ul className="space-y-2 text-blue-200">
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
        <Card className="max-w-4xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-300 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Let's Connect</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-slate-300 text-lg">
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
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <a href="https://github.com/RogerChan555" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub Profile
                </a>
              </Button>
            </div>
            <Separator className="my-6 bg-slate-600" />
            <p className="text-slate-300 font-medium">
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
