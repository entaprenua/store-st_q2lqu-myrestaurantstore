import { A } from "@solidjs/router"
import { Title, Meta } from "@solidjs/meta"
import { Button } from "~/components/ui/button"
import { Flex } from "~/components/ui/flex"
import { Text } from "~/components/ui/text"

export default function NotFoundPage() {
  return (
    <>
      <Title>404 - Page Not Found</Title>
      <Meta name="description" content="The page you're looking for doesn't exist" />
      
      <div class="min-h-screen bg-orange-50 flex items-center justify-center p-4">
        <Flex class="flex-col items-center text-center max-w-md">
          <div class="size-24 rounded-full bg-orange-100 flex items-center justify-center mb-6">
            <svg class="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <Text class="text-5xl font-bold text-orange-600 mb-2">404</Text>
          
          <Text variant="h2" class="text-xl font-semibold mb-4 text-stone-800">
            Oops! Page Not Found
          </Text>
          
          <Text class="text-stone-600 mb-8">
            Looks like this dish isn't on our menu anymore. Let's get you back to the good stuff.
          </Text>
          
          <Flex class="gap-4">
            <A href="/">
              <Button class="bg-orange-500 hover:bg-orange-600 text-white gap-2">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Menu
              </Button>
            </A>
          </Flex>
        </Flex>
      </div>
    </>
  )
}