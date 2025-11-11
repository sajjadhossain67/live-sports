import type { FC } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 border-t border-primary/20 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Live Sports</h3>
            <p className="text-sm text-muted-foreground">
              Your ultimate destination for live sports events, scores, and updates from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Matches
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Standings
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Sports</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Football
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Basketball
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Tennis
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cricket
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground mb-4">Get in touch with us</p>
            <a
              href="mailto:info@livesports.com"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              info@livesports.com
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-primary/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Follow us on social media</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-primary/10 text-center">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Live Sports. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
