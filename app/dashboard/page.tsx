import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-between">
      <Avatar>
        <AvatarImage src="jayampatel.png" />
        <AvatarFallback>JP</AvatarFallback>
      </Avatar>
    </div>
  );
}
