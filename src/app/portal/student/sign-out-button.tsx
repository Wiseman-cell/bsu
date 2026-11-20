"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  return (
    <Button variant="outline" size="sm" onClick={() => signOut()}>
      <LogOut className="h-3.5 w-3.5 mr-1" /> Sign Out
    </Button>
  );
}
