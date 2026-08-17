# Schema & Data Model (Schema.md)

## 1. Storage & Database
This is a high-performance marketing and agency portfolio web application. It requires no persistent database at runtime. All state is client-side, component-driven, and static-first for optimal load times and SEO performance.

## 2. Core Frontend Entities & Interfaces

### Project Entity (`Project`)
```typescript
interface Project {
  id: number
  title: string
  description: string
  year: string
  role: string
  services: string[]
  image: string
  color: string
}
```

### Service Tab Entity (`ServiceTab`)
```typescript
interface ServiceTab {
  id: string
  title: string
  headline: string
  description: string
  features: string[]
  badge: string
}
```

### Testimonial & Case Study Entity (`TestimonialCard`)
```typescript
interface TestimonialCard {
  num: string
  title: string
  desc: string
  image: string
}
```

### Metric Stat Entity (`MetricStat`)
```typescript
interface MetricStat {
  value: string
  label: string
}
```
