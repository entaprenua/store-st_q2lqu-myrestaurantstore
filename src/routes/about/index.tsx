import { Text } from "~/components/ui/text"
import { Flex } from "~/components/ui/flex"

export default function AboutPage() {
  return (
    <div class="container mx-auto px-4 py-8">
      <Text variant="h1" class="text-3xl font-bold mb-8">About Us</Text>
      
      <div class="max-w-3xl space-y-6">
        <div class="bg-white rounded-lg border p-6">
          <Text variant="h2" class="text-xl font-semibold mb-4">Our Story</Text>
          <Text variant="body1" class="text-muted-foreground">
            Our restaurant was founded in 2020 with a simple passion: to bring people together through great food. 
            What started as a small kitchen has grown into a beloved gathering place for food lovers who appreciate authentic flavors and warm hospitality.
          </Text>
        </div>
        
        <div class="bg-white rounded-lg border p-6">
          <Text variant="h2" class="text-xl font-semibold mb-4">Our Mission</Text>
          <Text variant="body1" class="text-muted-foreground">
            We believe everyone deserves a memorable dining experience. That's why we source the freshest ingredients, 
            craft each dish with care, and serve it with a smile.
          </Text>
        </div>
        
        <div class="bg-white rounded-lg border p-6">
          <Text variant="h2" class="text-xl font-semibold mb-4">Why Choose Us?</Text>
          <Flex class="flex-col gap-3">
            <Flex class="items-center gap-3">
              <span class="text-primary">✓</span>
              <Text variant="body1">Fresh, locally-sourced ingredients</Text>
            </Flex>
            <Flex class="items-center gap-3">
              <span class="text-primary">✓</span>
              <Text variant="body1">Chef's special recipes</Text>
            </Flex>
            <Flex class="items-center gap-3">
              <span class="text-primary">✓</span>
              <Text variant="body1">Cozy, welcoming ambiance</Text>
            </Flex>
            <Flex class="items-center gap-3">
              <span class="text-primary">✓</span>
              <Text variant="body1">Friendly, attentive service</Text>
            </Flex>
          </Flex>
        </div>
        
        <div class="bg-white rounded-lg border p-6">
          <Text variant="h2" class="text-xl font-semibold mb-4">Visit Us</Text>
          <Text variant="body1" class="text-muted-foreground">
            Have questions? We'd love to hear from you. Reach out to us at hello@restaurant.com 
            or call us at +1 (555) 123-4567.
          </Text>
        </div>
      </div>
    </div>
  )
}
