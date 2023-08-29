import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const state = true;
  return (
    <div className="">
      <UserButton 
        afterSignOutUrl="/"
      />
      <ModeToggle />
    </div>
  )
}
