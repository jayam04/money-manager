import NavbarItem from "./NavbarItem";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between h-14 bg-red-200 rounded-2xl mx-2 mb-1">
      <NavbarItem to="/" name="Home" uniconIconName="chart-pie" />
      <NavbarItem to="/dashboard" name="Dashboard" uniconIconName="chart-bar" />
      <NavbarItem to="/attributes" name="Attributes" uniconIconName="setting" />
    </div>
  );
}
