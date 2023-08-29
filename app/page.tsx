import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Home() {
  const state = true;
  return (
    <div className="">
    <p className="text-3xl font-bold text-red-500">
      Hello, Discord
    </p>
    <Button>Click me</Button>
    </div>
  )
}
