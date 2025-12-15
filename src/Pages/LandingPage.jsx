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

/* -------------------- UI COMPONENTS -------------------- */

const Button = ({ children, className = "", variant, size, ...props }) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition";

  const variants = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const sizes = {
    md: "px-4 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant || "solid"]} ${
        sizes[size || "md"]
      } ${className}`}
    >
      {children}
    </button>
  );
};

const Card = ({ children }) => (
  <div className="bg-white rounded-xl shadow-sm border">{children}</div>
);

const CardContent = ({ children }) => (
  <div className="p-6 space-y-4">{children}</div>
);

/* -------------------- PAGE -------------------- */

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#EFF6FF]">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              TacticsCoach AI
            </span>
          </div>

          {/* Auth buttons (TOP RIGHT) */}
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="inline-block px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            AI-Powered Football Training
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Elevate Your Game with{" "}
            <span className="text-blue-600">AI-Powered</span> Training
          </h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Advanced analytics, video intelligence, and personalized feedback
            designed for modern players and coaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg">
                Get Started <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>

            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Everything You Need to Improve
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mt-4">
            Powerful tools built for professional-level football development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Video, title: "Video Analysis" },
            { icon: Activity, title: "Heatmaps & Tracking" },
            { icon: Target, title: "Tactical Feedback" },
            { icon: TrendingUp, title: "Progress Tracking" },
            { icon: Users, title: "Team Management" },
            { icon: Zap, title: "AI Insights" },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <item.icon className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700">
                  Smart AI tools designed to enhance performance and
                  decision-making.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl p-10 border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Built for Players & Coaches
              </h2>

              <ul className="space-y-4">
                {[
                  "Professional-grade analytics",
                  "Track player & team progress",
                  "Actionable AI feedback",
                  "Modern & clean UI",
                ].map((text, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="text-blue-600" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <Activity className="h-40 w-40 text-blue-200" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 rounded-2xl p-12 bg-blue-600 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Training?
          </h2>

          <p className="text-lg opacity-90">
            Join thousands of players and coaches using AI to reach their goals
          </p>

          <Link to="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-100"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t bg-white/70">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-gray-600">
            © 2025 TactiCoach AI. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
