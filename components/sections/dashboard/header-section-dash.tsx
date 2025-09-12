import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2, Sparkles } from "lucide-react";

// Header Section Component
const HeaderSection = () => (
  <div className="relative mb-16 pt-8">
    {/* Background Effects */}
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/50 to-secondary/80 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/50 to-primary/50 rounded-full blur-3xl animate-float"
        // style={{ animationDelay: "2s" }}
        style={{
            background: `
                radial-gradient(circle at 10% 20%, rgba(24, 48, 54, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(26, 92, 125, 0.3) 0%, transparent 70%),
                linear-gradient(125deg, rgba(15, 23, 42, 0.7) 0%, transparent 70%)
              `,
          }}
      ></div>
    </div>
    {/* bg-gradient-to-br from-gray-900 via-teal-900 to-indigo-900 */}
    {/* <div 
      className="absolute inset-0 z-0 opacity-90"
      style={{
        background: `
            radial-gradient(circle at 10% 20%, rgba(24, 48, 54, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(26, 92, 125, 0.3) 0%, transparent 70%),
            linear-gradient(125deg, rgba(15, 23, 42, 0.7) 0%, transparent 70%)
          `,
      }}
    ></div> */}

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-3xl">
          <Badge
            variant="outline"
            className="mb-4 bg-background/50 backdrop-blur-md border-border/50 px-4 py-1.5 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            Professional Animation Library
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 mb-6 leading-tight">
            Animation Dashboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Explore our comprehensive collection of professional Tailwind CSS
            animations. Each animation is optimized for performance and ready to
            copy-paste into your projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 py-2">
              <Code2 className="w-4 h-4 mr-2" />
              View Documentation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <Card className="bg-primary backdrop-blur-md border border-border/30 p-6 text-center transition-all hover:shadow-lg hover:border-primary/30">
            <div className="text-3xl font-bold bg-clip-text text-gray-100 bg-gradient-to-r from-primary to-secondary mb-2">
              120+
            </div>
            <div className="text-sm text-gray-100 font-medium">
              Animations
            </div>
          </Card>
          <Card className="bg-primary/50 backdrop-blur-md border border-border/30 p-6 text-center transition-all hover:shadow-lg hover:border-primary/30">
            <div className="text-3xl font-bold bg-clip-text text-primary bg-gradient-to-r from-secondary to-primary mb-2">
              5
            </div>
            <div className="text-sm text-muted text-bold font-medium">
              Categories
            </div>
          </Card>
          <Card className="bg-primary/50 backdrop-blur-md border border-border/30 p-6 text-center transition-all hover:shadow-lg hover:border-primary/30">
            <div className="text-3xl font-bold bg-clip-text text-primary bg-gradient-to-r from-secondary to-primary mb-2">
              100%
            </div>
            <div className="text-sm text-muted text-bold font-medium">
              Responsive
            </div>
          </Card>
          <Card className="bg-primary backdrop-blur-md border border-border/30 p-6 text-center transition-all hover:shadow-lg hover:border-primary/30">
            <div className="text-3xl font-bold bg-clip-text text-gray-100 bg-gradient-to-r from-secondary to-primary mb-2">
              0%
            </div>
            <div className="text-sm text-gray-100 font-medium">
              JavaScript
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderSection;
