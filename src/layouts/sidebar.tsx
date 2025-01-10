"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Menu,
  User,
  BookOpen,
  Handshake,
  Bookmark,
  Facebook,
  Twitter,
  Instagram,
  LinkedinIcon as LinkedIn,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

export function MenuProfileSheet() {
  const [open, setOpen] = useState(false);
  const user = {
    name: "Usuario Ejemplo",
    email: "usuario@ejemplo.com",
    avatarUrl: "https://github.com/shadcn.png",
  };

  const menuItems = [
    { label: "Perfil", icon: User, href: "/profile" },
    { label: "Guardados", icon: Bookmark, href: "/" },
    { label: "Invest in us", icon: Handshake, href: "/investment" },
    { label: "Términos y Condiciones", icon: BookOpen, href: "/terms" },
    { label: "Ayuda y Soporte", icon: HelpCircle, href: "/support" },
  ];

  const socialIcons = [
    { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
    { icon: LinkedIn, label: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menú</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
          <div className="mt-6 flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={user.avatarUrl || "/default-avatar.png"} />
                <AvatarFallback>
                  {user.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="px-2">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <Separator />
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href || "#"}>
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={() => setOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Button>
              </Link>
            ))}
            <Separator />
            <div className="flex justify-around py-2">
              {socialIcons.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
