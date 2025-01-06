import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { SheetSide } from "./sidebar";

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
      <div className=" py-2 px-4 flex justify-center items-center">
        <p className="text-xs lg:text-sm">
          Unlock the Magic of Travel with Dan&apos;s Tours, Now →
        </p>
      </div>
      <nav>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-xl font-bold flex items-center gap-2"
            >
              Dan&apos;s Tours
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
           {/*  <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span className="text-sm">EN</span>
            </div> */}
            <div className="flex items-center gap-2">
              <span className="text-sm">USD</span>
            </div>
            <ModeToggle />
            <Button variant="outline" size="sm">
              Sign in
            </Button>

            <SheetSide />
          </div>
        </div>
      </nav>
    </header>
  );
}
