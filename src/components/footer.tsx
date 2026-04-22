import { A } from "@solidjs/router"
import { Grid } from "~/components/ui/grid"
import { Flex } from "~/components/ui/flex"
import { Button } from "~/components/ui/button"

export function Footer() {
  return (
    <footer class="bg-gray-900 text-gray-300 py-12">
      <div class="container mx-auto px-4">
        <Grid cols={4}>
          <div>
            <h3 class="text-white font-semibold mb-4">Menu</h3>
            <Flex class="flex-col gap-2">
              <A href="/categories" class="hover:text-white transition-colors">Categories</A>
              <A href="/products" class="hover:text-white transition-colors">Our Menu</A>
            </Flex>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">Contact</h3>
            <Flex class="flex-col gap-2">
              <A href="/contact" class="hover:text-white transition-colors">Contact Us</A>
              <A href="/about" class="hover:text-white transition-colors">About Us</A>
            </Flex>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">Legal</h3>
            <Flex class="flex-col gap-2">
              <A href="/privacy" class="hover:text-white transition-colors">Privacy Policy</A>
              <A href="/terms" class="hover:text-white transition-colors">Terms of Service</A>
            </Flex>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">Follow Us</h3>
            <Flex class="flex-col gap-2">
              <A href="https://instagram.com" class="hover:text-white transition-colors">Instagram</A>
              <A href="https://facebook.com" class="hover:text-white transition-colors">Facebook</A>
            </Flex>
          </div>
        </Grid>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
          <p class="text-sm">2024 Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
