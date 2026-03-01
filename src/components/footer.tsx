export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-mono text-lg font-bold text-js-yellow">
              {"{ JS Mavens }"}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              A community of like-minded developers in Nagercoil, Kanyakumari
              passionate about JavaScript, React, Node.js &amp; web development.
              Est. April 2023.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#events" className="hover:text-foreground transition-colors">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="#past-events" className="hover:text-foreground transition-colors">
                  Past Events
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-foreground transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-foreground transition-colors">
                  Sponsors
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Connect</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://www.meetup.com/js-mavens/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Meetup
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} JS Mavens. Built with Next.js,
            Tailwind CSS & GSAP.
          </p>
        </div>
      </div>
    </footer>
  );
}
