import { Button } from "@/components/ui/button"
import { Github, Heart, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to build something amazing?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              create-next-base
            </span>{" "}
            to kickstart their Next.js projects with professional standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
            >
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3"
            >
              <Star className="mr-2 h-5 w-5" />
              Star on GitHub
            </Button>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  create-next-base
                </span>
                <span className="ml-2 text-gray-400">
                  - Professional Next.js CLI
                </span>
              </div>

              <div className="flex items-center space-x-4 text-gray-400">
                <span className="flex items-center">
                  Made with <Heart className="mx-1 h-4 w-4 text-red-500" /> by
                  Ontonim team
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
