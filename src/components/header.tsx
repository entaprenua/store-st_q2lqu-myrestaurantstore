import { A } from "@solidjs/router"
import { Navbar, NavbarBrand, NavbarContent, NavbarEnd, NavbarLink } from "~/components/ui/navbar"
import { Grid } from "~/components/ui/grid"
import { Flex } from "~/components/ui/flex"
import { CartCount } from "~/components/ui/cart"
import { Button } from "~/components/ui/button"

export function Header() {
  return (
    <Navbar position="sticky" variant="default">
      <NavbarBrand>
        <A href="/" class="flex items-center gap-2">
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
          <span class="text-xl font-bold">Restaurant</span>
        </A>
      </NavbarBrand>

      <NavbarContent>
        <Flex class="gap-6">
          <NavbarLink href="/categories">Menu</NavbarLink>
          <NavbarLink href="/about">About</NavbarLink>
          <NavbarLink href="/contact">Contact</NavbarLink>
        </Flex>
      </NavbarContent>
      <NavbarEnd>
        <Flex class="gap-4">
          <NavbarLink href="/cart" class="relative">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <CartCount class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full min-w-[1.25rem] h-5 flex items-center justify-center px-1" />
          </NavbarLink>
        </Flex>
      </NavbarEnd>
    </Navbar >
  )
}

