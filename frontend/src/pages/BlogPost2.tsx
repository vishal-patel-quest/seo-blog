import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BlogPost2 = () => {
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
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">The Future of Vellum: Part 2 - Advanced Flutter Engineering</h1>
        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-border">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-sm">VE</div>
          <div>
            <p className="font-medium text-sm text-foreground">Vellum Engineering</p>
            <p className="text-xs text-muted-foreground">June 14, 2026</p>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none font-serif leading-relaxed text-foreground/90">
          <p className="lead text-xl text-muted-foreground mb-8">
            Following up on our move to Flutter, we are excited to detail the deep technical implementations powering the next generation of Vellum.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Platform Channels for Audio-First Editorial</h2>
          <p className="mb-6">
            We recognize that deep dives sometimes happen during commutes. To support our new human-narrated audio versions, standard plugins weren't enough. We utilized Flutter's <code className="bg-muted px-1 rounded">MethodChannel</code> and <code className="bg-muted px-1 rounded">EventChannel</code> APIs to build a custom bridge to native iOS <code className="bg-muted px-1 rounded">AVAudioSession</code> and Android <code className="bg-muted px-1 rounded">MediaSession</code>. This guarantees gapless, high-fidelity playback and deep OS integration for lock-screen controls, all managed cleanly from our Dart isolate.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Custom Render Objects for Typography</h2>
          <p className="mb-6">
            Typography is our most important interface. Standard <code className="bg-muted px-1 rounded">Text</code> widgets lacked the micro-typographic control we needed. We bypassed the standard widget tree and dropped down to the <code className="bg-muted px-1 rounded">RenderBox</code> level. By creating a custom <code className="bg-muted px-1 rounded">RenderObject</code>, we dynamically adjust line height, kerning, and optical bounds in real-time based on ambient light sensors and screen density.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">State Management with Riverpod</h2>
          <p className="mb-6">
            To ensure offline availability of our 200+ archival pieces, we implemented a robust caching layer using <code className="bg-muted px-1 rounded">Riverpod</code>. Its reactive, compile-safe dependency injection allows our UI to seamlessly transition between local SQLite storage and our cloud backend without a single dropped frame.
          </p>
        </div>
      </main>
    </div>
  );
};

export default BlogPost2;
