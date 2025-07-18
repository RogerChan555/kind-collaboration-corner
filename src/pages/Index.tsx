import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Globe, Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Simple Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium text-blue-600">Collaboration Proposal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            I hope you are lucky in everything you do.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Building successful partnerships through reliable collaboration and shared expertise.
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">About Me & Collaboration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              My name is <span className="font-semibold text-blue-600">Roger Chan</span> and I am a web & AI developer in Hong Kong.
            </p>
            
            <p>
              I recently came across your profile on Braintrust and GitHub and was really impressed with your work background and skills.
            </p>
            
            <p>
              Until now I have worked as a full-stack developer in several companies and freelancing platforms, but in these days it is really hard to get jobs as a freelancer.
            </p>

            <div className="border-l-4 border-blue-200 pl-4 bg-blue-50 p-4 rounded-r">
              <p className="font-medium text-gray-800 mb-2">The Challenge & Solution</p>
              <p className="mb-3">
                I have decided to collaborate with European senior developers because my job interview skill is not so good. 
                Every time I tried the interview, I failed because of my verbal English and Asian accent. 
                But I can perfectly understand English and I'm really good at coding.
              </p>
              <p>
                Through strategic collaboration, we can combine your communication strengths with my technical expertise. 
                I'll handle development work while you manage client communications, creating a win-win partnership.
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-800 mb-2">Recent Previous Works:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li><strong>crop.photo</strong> - Image cropping and editing platform</li>
                <li><strong>supermind.bot</strong> - AI-powered automation bot</li>
                <li><strong>lovedbymen.com</strong> - Community platform with full-stack development</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <p className="font-medium text-gray-800 mb-2">How We'll Work Together:</p>
              <p className="mb-3">
                You may have no project or you can't forward your current work for some privacy reasons, then we can try to get new jobs from Upwork.
              </p>
              <p className="mb-3">
                Actually in Upwork, the most boring and time-taking process is to send proposals. 
                I can handle the proposal submissions, and if we land a job, I'll take care of the development work and you'd just need to have a call with the client when it is necessary.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Share the profit fairly between us</li>
                <li>Get more jobs through strategic collaboration</li>
                <li>I handle all development work</li>
                <li>You manage client communications when needed</li>
                <li>I'm familiar with Upwork bidding strategy for quick results</li>
              </ul>
            </div>

            <div className="text-center pt-6">
              <p className="text-lg mb-6">I am looking forward to hearing from you.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="https://roger.lovedbymen.com" target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4 mr-2" />
                    View Portfolio
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://github.com/RogerChan555" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub Profile
                  </a>
                </Button>
              </div>

              <p className="mt-6 text-gray-600">
                Best Regards,<br />
                <span className="text-blue-600 font-semibold">Roger</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;