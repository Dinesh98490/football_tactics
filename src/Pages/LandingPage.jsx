import { Link } from "react-router-dom";
import {
  Activity,
  Video,
  Target,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

// Default React components with Tailwind
const Button = ({ children, className = "", variant, size, ...props }) => {
  let baseClasses = "rounded-lg font-medium transition flex items-center justify-center gap-2";
  let variantClasses =
    variant === "outline"
      ? "border border-primary text-primary hover:bg-primary/10"
      : "bg-primary text-white hover:bg-primary/90";
  let sizeClasses =
    size === "lg"
      ? "px-8 py-3 text-lg"
      : "px-4 py-2 text-base";
  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow rounded-lg ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EFF6FF" }}>
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">TactiCoach AI</span>
          </div>
          <Link to="/dashboard">
            <Button className="bg-blue-500 text-white hover:bg-blue-600">
              Sign In
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            AI-Powered Football Training
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Elevate Your Game with <span className="text-primary">AI-Powered</span> Tactical Training
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Advanced performance analytics, video analysis, and personalized feedback to help youth players and coaches
            reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/dashboard">
              <Button size="lg">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Improve</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive tools designed for modern football training and player development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[{
            icon: Video,
            title: "Video Analysis",
            desc: "Upload training and match videos for AI-powered analysis and instant feedback on performance"
          },{
            icon: Activity,
            title: "Heatmaps & Tracking",
            desc: "Visualize player positions, movement patterns, and tactical positioning with interactive heatmaps"
          },{
            icon: Target,
            title: "Tactical Feedback",
            desc: "Get actionable insights on positioning, movement quality, and decision-making with AI analysis"
          },{
            icon: TrendingUp,
            title: "Progress Tracking",
            desc: "Monitor improvement over time with detailed charts showing skill development and performance trends"
          },{
            icon: Users,
            title: "Team Management",
            desc: "Manage your entire squad with team overviews and individual player analysis in one place"
          },{
            icon: Zap,
            title: "AI-Powered Insights",
            desc: "Leverage cutting-edge AI to get personalized recommendations and training plans"
          }].map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto bg-white border-2 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Built for Players & Coaches</h2>
              <p className="text-lg text-gray-700">
                Whether you're a youth player looking to improve or a coach managing a team, TactiCoach AI provides the
                tools you need to succeed.
              </p>
              <ul className="space-y-4">
                {["Professional-grade analytics made simple","Track individual and team progress over time","Actionable feedback to improve faster","Light and dark mode for any environment"].map((text, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-8 flex items-center justify-center min-h-[300px]">
              <Activity className="h-32 w-32 text-primary/40" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 bg-primary text-white rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Training?</h2>
          <p className="text-lg opacity-90">Join thousands of players and coaches using AI to reach their goals</p>
          <Link to="/dashboard">
            <Button size="lg">
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold">TactiCoach AI</span>
            </div>
            <p className="text-sm text-gray-600">© 2025 TactiCoach AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
