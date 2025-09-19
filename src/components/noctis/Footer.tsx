import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-bold">Noctis Observatory</p>
          <p className="text-sm text-muted-foreground mt-2">
            &copy; 2025 Noctis Observatory — A project of Codestam Technologies.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/programs" className="hover:underline">Programs</Link></li>
            <li><Link href="/events" className="hover:underline">Events</Link></li>
            <li><Link href="/research" className="hover:underline">Research</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Visit</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/visit" className="hover:underline">Tickets</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><a href="https://codestam.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Publisher: Codestam Technologies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}