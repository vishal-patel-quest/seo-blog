import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BlogPost1 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <nav className="flex items-center justify-between p-6 max-w-5xl mx-auto border-b border-border">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-foreground">
          Vellum
        </Link>
        <div className="flex gap-4">
          <Link to="/blog">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-all">Back to Blog</Button>
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-sm text-primary uppercase tracking-wider mb-4 block font-medium">Development Update</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">The Future of Vellum: Part 1 - Rebuilding with Flutter</h1>
        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-border">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-sm">VE</div>
          <div>
            <p className="font-medium text-sm text-foreground">Vellum Engineering</p>
            <p className="text-xs text-muted-foreground">May 28, 2026</p>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none font-serif leading-relaxed text-foreground/90">
          <p className="lead text-xl text-muted-foreground mb-8">
            When we started Vellum, the goal was simple: create a quiet space for deep reading. Today, we're announcing our roadmap for the next six months, starting with our transition to a unified mobile architecture using Flutter.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Why Flutter? The Impeller Advantage</h2>
          <p className="mb-6">
            Editorial minimalism isn't just about what you remove; it's about the perfection of what remains. We needed a framework that could guarantee 120fps scrolling without dropped frames. By adopting Flutter and its new Impeller rendering engine, we bypass standard OEM widgets and draw directly to the GPU. This eliminates shader compilation jank, ensuring our custom serif typography renders flawlessly across both iOS and Android.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Widget-Driven Minimalism</h2>
          <p className="mb-6">
            Flutter's compositional model—where everything is a Widget—perfectly mirrors our design system. Because Dart compiles Ahead-of-Time (AOT) to native ARM machine code, we achieve native performance while maintaining a single codebase. We've built an entire suite of custom <code className="bg-muted px-1 rounded">StatelessWidget</code> components that strip back the UI, allowing readers to focus entirely on the words.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 my-10 italic text-xl text-muted-foreground">
            "Design is how it works out of the way of the content. Flutter gave us the canvas to paint every pixel precisely as we intended."
          </blockquote>
        </div>
      </main>
    </div>
  );
};

export default BlogPost1;
