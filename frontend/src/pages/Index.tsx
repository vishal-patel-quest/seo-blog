import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { FileText, Headphones, Archive, Check, ArrowRight } from "lucide-react";

export default function Index() {
  const [isYearly, setIsYearly] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast.success("Welcome to Vellum.", {
        description: "You've successfully subscribed to the newsletter.",
      });
    }, 1000);
  };

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tighter">Vellum.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Button variant="ghost" className="hidden sm:inline-flex text-muted-foreground hover:text-foreground transition-colors">
              Log In
            </Button>
            <Button onClick={scrollToPricing} className="active:scale-95 transition-transform rounded-full px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center space-y-8 mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-sm text-muted-foreground mb-4">
            <span className="w-2 h-2 rounded-full bg-destructive animate-pulse"></span>
            Issue #42 is out now
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1]">
            The Art of Thoughtful <span className="italic text-muted-foreground">Reading</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            Join 14,200 curious minds who prefer depth over clicks. Editorial essays delivered directly to your inbox.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={scrollToPricing} size="lg" className="active:scale-95 transition-transform text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/10 w-full sm:w-auto">
              Start Reading
            </Button>
            <p className="text-sm text-muted-foreground sm:hidden">Cancel anytime. No lock-ins.</p>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="font-serif text-2xl">Weekly Deep Dives</CardTitle>
                <CardDescription className="text-base">
                  Long-form essays on culture, technology, and society, rigorously researched and beautifully formatted.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Headphones className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="font-serif text-2xl">Audio Editions</CardTitle>
                <CardDescription className="text-base">
                  Every essay is professionally narrated so you can absorb the ideas on your commute or during a walk.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Archive className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="font-serif text-2xl">The Archives</CardTitle>
                <CardDescription className="text-base">
                  Full access to our back-catalog of over 200+ timeless pieces, organized by topic and series.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Testimonial */}
        <section className="max-w-4xl mx-auto text-center mb-32 px-6">
          <div className="mb-8">
            <svg className="w-10 h-10 mx-auto text-muted" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-snug mb-8">
            "Vellum is the only subscription I actually look forward to reading. It cuts through the noise of the modern web."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
              <img src="https://i.pravatar.cc/150?img=47" alt="Elena Rossi" className="w-full h-full object-cover grayscale opacity-80" />
            </div>
            <div className="text-left">
              <div className="font-medium text-foreground">Elena Rossi</div>
              <div className="text-sm text-muted-foreground">Editor at Verve</div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="max-w-5xl mx-auto mb-32 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">Simple, transparent pricing</h2>
            <p className="text-muted-foreground text-lg">Invest in your intellectual diet.</p>
            
            <div className="flex items-center justify-center gap-3 mt-8">
              <span className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>Monthly</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="w-14 h-7 rounded-full bg-border relative transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                aria-label="Toggle pricing period"
              >
                <div className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-foreground transition-transform ${isYearly ? 'translate-x-7' : 'translate-x-0'}`} />
              </button>
              <span className={`text-sm flex items-center gap-2 ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Yearly
                <Badge variant="secondary" className="bg-destructive/10 text-destructive border-none">Save 16%</Badge>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <Card className="border-border shadow-none bg-transparent">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Free Reader</CardTitle>
                <CardDescription>A taste of our editorial perspective.</CardDescription>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-serif font-bold">$0</span>
                  <span className="text-muted-foreground">/forever</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {['One essay per month', 'Web access only', 'Community access'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-foreground" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full active:scale-95 transition-transform rounded-full">
                  Create Free Account
                </Button>
              </CardContent>
            </Card>

            {/* Premium Tier */}
            <Card className="border-primary shadow-xl bg-card relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                MOST POPULAR
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Premium Subscriber</CardTitle>
                <CardDescription>The complete Vellum experience.</CardDescription>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-serif font-bold">${isYearly ? '120' : '12'}</span>
                  <span className="text-muted-foreground">/{isYearly ? 'year' : 'month'}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {['Weekly deep dive essays', 'Full audio narrated editions', 'Unlimited archive access', 'Exclusive Q&A with writers'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <Check className="w-5 h-5 text-destructive" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full active:scale-95 transition-transform rounded-full group">
                  Select Plan
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer / Newsletter */}
      <footer className="border-t border-border bg-card pb-12 pt-24 px-6 text-center">
        <div className="max-w-xl mx-auto space-y-8">
          <div>
            <h3 className="font-serif text-3xl mb-4">Not ready to commit?</h3>
            <p className="text-muted-foreground">Join our free dispatch. One thought-provoking idea every Sunday.</p>
          </div>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full h-12 px-6 bg-background border-border focus-visible:ring-primary"
              required
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="rounded-full h-12 px-8 active:scale-95 transition-transform"
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </Button>
          </form>

          <div className="pt-16 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground border-t border-border">
            <span>© 2026 Vellum Editorial. All rights reserved.</span>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
