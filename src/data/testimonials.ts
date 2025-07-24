export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Jane Doe',
    company: 'Acme Corp',
    quote: 'Growth Partnerz helped us double our leads in just three months. Highly recommended!',
    image: '/images/testimonial-jane.png',
  },
  {
    name: 'John Smith',
    company: 'Techify',
    quote: 'Their custom software solutions streamlined our operations and boosted our sales.',
    image: '/images/testimonial-john.png',
  },
  {
    name: 'Lisa Ray',
    company: 'MarketPro',
    quote: 'Professional, responsive, and results-driven. Our go-to tech partner!',
    image: '/images/testimonial-lisa.png',
  },
]; 