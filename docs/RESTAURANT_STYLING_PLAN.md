# Restaurant Template Styling Plan

## Overview

Transform the restaurant template from a generic e-commerce look to a warm, inviting restaurant dining experience. Use existing codeless components to create a cohesive restaurant atmosphere.

## Goals

1. Create a warm, appetizing visual feel
2. Use restaurant-appropriate terminology (menu, order, specials)
3. Replace tech-focused language with food/dining language
4. Make the template feel like a real restaurant online presence

## Existing Components to Use

- `StoreName`, `StoreDomain` - Dynamic store branding
- `CategoryList`, `CategoryListView` - Menu categories
- `ProductList`, `ProductListView` - Menu items
- `ProductName`, `ProductImage`, `ProductPrice` - Dish display
- `ProductAddToCartTrigger` - Add to Order button
- `CartItems`, `CartSummary` - Order summary
- `RecommendationsRoot` - Specials/favorites
- `HeroRoot`, `HeroItem` - Featured banners
- `Grid`, `Flex`, `Text`, `Button`, `Card` - Layout components

## Implementation Plan

### 1. Header/Navigation (`components/header.tsx`)

**Current:**
- Brand: "TechStore"
- Links: "Categories", "Products"
- Icons: Generic cart/wishlist

**Changes:**
- Brand: Use `StoreName` component or generic "Restaurant" placeholder
- Nav Links:
  - "Categories" → "Menu"
  - "Products" → "Specials"
- Add "About" link to /about
- Add "Contact" link to /contact

### 2. Home Page (`routes/index.tsx`)

**Current:**
- Section: "Shop by Category"
- Section: "New Arrivals"
- Section: "Popular Products"

**Changes:**
- Section: "Explore Our Menu" (or "Browse Categories")
- Section: "Chef's Specials" (or "Today's Specials")
- Section: "Customer Favorites" (or "Most Ordered")

### 3. Products Page (`routes/products/index.tsx`)

**Current:**
- Title: "All Products"
- Search: "Search products..."

**Changes:**
- Title: "Our Menu"
- Search: "Search our menu..."

### 4. Product Detail (`routes/products/[slug].tsx`)

**Current:**
- Uses generic product display
- "Add to Cart" button

**Changes:**
- "Add to Cart" → "Add to Order"
- Keep layout, just update terminology

### 5. Cart Page (`routes/cart/index.tsx`)

**Current:**
- Title: "Shopping Cart"
- Summary: "Order Summary"

**Changes:**
- Title: "Your Order"
- Summary: Keep "Order Summary" (already good)

### 6. About Page (`routes/about/index.tsx`)

**Current:**
- "TechStore was founded in 2020..."
- "Provide the latest electronics..."
- "Free shipping on orders over $50"

**Changes:**
- "Our Restaurant was founded in 2020..."
- "Bring you the finest dishes..."
- "Fresh ingredients daily", "Chef's specials", "Cozy ambiance"

### 7. Footer (`components/footer.tsx`)

**Current:**
- "Shop" section
- "Support" section
- Copyright: "2024 TechStore"

**Changes:**
- "Menu" or "Dining"
- "Contact" section
- Copyright: Generic year or dynamic

### 8. Contact Page (`routes/contact/index.tsx`)

**Current:**
- Generic contact form

**Changes:**
- Add restaurant address placeholder
- Add opening hours section
- Add reservation inquiry option

## Success Criteria

- All text references to "products/categories" changed to "menu/dishes"
- "Add to Cart" → "Add to Order"
- "Shopping Cart" → "Your Order"
- Restaurant-themed about page
- Warm, appetizing imagery (via Hero images)
- Professional restaurant footer with hours/address

## Notes

- All changes use ONLY existing codeless components
- Hero images should be food/dining themed (admin configurable)
- Categories should be food categories: Appetizers, Mains, Desserts, Drinks
- Colors remain consistent with brand (customizable in admin)