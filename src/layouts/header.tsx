import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { MenuProfileSheet } from "./sidebar";

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
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <MenuProfileSheet />
          </div>
        </div>
      </nav>
    </header>
  );
}
