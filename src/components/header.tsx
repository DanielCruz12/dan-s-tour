import Link from "next/link";
import { Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tours", href: "/tours" },
  { label: "Rental", href: "/rental" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="w-full">
      <div className="bg-yellow-400 dark:bg-yellow-600 text-black dark:text-white py-2 px-4 flex justify-between items-center">
        <p className="text-sm">
          Unlock the Magic of Travel with Dan&apos;s Tours 
        </p>
        <Link href="#" className="text-sm hover:underline">
          Get This Now →
        </Link>
      </div>
      <nav className="border-b bg-background">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-xl font-bold flex items-center gap-2"
            >
              🌴 Dan&apos;s Tours
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span className="text-sm">EN</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">USD</span>
            </div>
            {/* <ThemeToggle /> */}
            <Button variant="outline" size="sm">
              Sign in
            </Button>
            <Button size="icon" variant="ghost">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
