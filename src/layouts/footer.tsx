import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" mt-6 py-4 border-t">
      <div className="container  max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Safety Information
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="">
                  Bali
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Paris
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Join Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="">
                  Travel Agents
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 text-center">
          <p className="">&copy; 2025 Dan&apos;s Tour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
