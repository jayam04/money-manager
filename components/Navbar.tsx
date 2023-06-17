import NavbarItem from "./NavbarItem";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between">
        <NavbarItem to="/" name="Home" uniconIconName="chart-pie" />
        <NavbarItem to="/attributes" name="Attributes" uniconIconName="setting" />
    </div>
  )
}