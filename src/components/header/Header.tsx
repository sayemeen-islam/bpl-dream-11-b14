import { Hero } from "./Hero";
import { Nav } from "./nav";

export function Header() {
  
  return (
    <div className="container mx-auto">
      <Nav></Nav>
      <Hero></Hero>
    </div>
  )
}