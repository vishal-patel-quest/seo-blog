import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <nav className="flex items-center justify-between p-6 max-w-5xl mx-auto border-b border-border">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-foreground">
          Vellum
        </Link>
        <div className="flex gap-4">
          <Link to="/">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-all">Home</Button>
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground">The Engineering Room</h1>
        <p className="text-xl text-muted-foreground mb-12">Thoughts, technical updates, and deep dives from the Vellum team.</p>

        <div className="space-y-12">
          <article className="border-b border-border pb-8">
            <span className="text-sm text-muted-foreground uppercase tracking-wider mb-2 block">May 28, 2026</span>
            <Link to="/blog/future-development" className="block group">
              <h2 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">The Future of Vellum: Part 1 - Rebuilding with Flutter</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">Why we chose Flutter, Dart AOT compilation, and the Impeller rendering engine to build our pixel-perfect mobile experience.</p>
              <span className="text-sm font-medium flex items-center text-foreground group-hover:text-primary transition-colors">
                Read more <span className="ml-1 text-primary">→</span>
              </span>
            </Link>
          </article>

          <article className="border-b border-border pb-8">
            <span className="text-sm text-muted-foreground uppercase tracking-wider mb-2 block">June 14, 2026</span>
            <Link to="/blog/future-development-2" className="block group">
              <h2 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">The Future of Vellum: Part 2 - Advanced Flutter Engineering</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">Deep dive into custom RenderObjects, Platform Channels for native audio, and reactive state management with Riverpod.</p>
              <span className="text-sm font-medium flex items-center text-foreground group-hover:text-primary transition-colors">
                Read more <span className="ml-1 text-primary">→</span>
              </span>
            </Link>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Blog;
