// Blog posts data structure
export const blogPosts = [
  {
    id: '1',
    title: 'Sustainable Packaging Solutions for Modern Businesses',
    excerpt: 'Discover how eco-friendly disposable products can enhance your business operations while reducing environmental impact.',
    content: `In today's environmentally conscious market, businesses are increasingly looking for sustainable packaging solutions that don't compromise on quality or functionality. At Vintora LLC, we understand the importance of balancing business needs with environmental responsibility.

Our range of eco-friendly disposable products includes water-based coated options that are 100% plastic-free, making them an excellent choice for businesses committed to sustainability. These products maintain the durability and performance you need while significantly reducing your carbon footprint.

**Key Benefits:**
- Reduced environmental impact
- Enhanced brand reputation
- Compliance with environmental regulations
- Cost-effective solutions
- High-quality performance

Whether you're running a restaurant, café, or food service business, our sustainable packaging solutions can help you meet your environmental goals without sacrificing quality.`,
    author: 'Vintora Team',
    date: '2024-01-15',
    category: 'Sustainability',
    tags: ['Sustainability', 'Eco-Friendly', 'Packaging'],
    image: '🌱',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: '2',
    title: 'Understanding Different Cup Coating Options: PE, PLA, and Water-Based',
    excerpt: 'A comprehensive guide to choosing the right cup coating for your business needs and sustainability goals.',
    content: `When selecting disposable cups for your business, understanding the different coating options is crucial. Each type offers unique benefits and considerations.

**PE Coated Cups (Most Popular)**
Polyethylene (PE) coated cups are the most widely used option due to their excellent barrier properties and cost-effectiveness. They provide reliable protection against leaks and maintain beverage temperature effectively.

**PLA Coated Cups**
Polylactic Acid (PLA) coated cups are made from renewable resources like cornstarch. They offer similar performance to PE coatings while being more environmentally friendly and compostable under industrial conditions.

**Water-Based Coated Cups (100% Plastic-Free)**
Our water-based coated cups represent the pinnacle of eco-friendly options. These cups are completely plastic-free, making them ideal for businesses with strong environmental commitments. They're perfect for cold beverages and offer excellent printability.

**Choosing the Right Option:**
- Consider your sustainability goals
- Evaluate your budget constraints
- Assess your beverage temperature requirements
- Review local regulations and composting facilities

At Vintora LLC, we offer all three options, allowing you to choose the perfect solution for your specific needs.`,
    author: 'Vintora Team',
    date: '2024-01-10',
    category: 'Products',
    tags: ['Products', 'Cups', 'Materials'],
    image: '☕',
    readTime: '7 min read',
    featured: true,
  },
  {
    id: '3',
    title: 'Global Expansion: Serving 30+ Countries with Excellence',
    excerpt: 'Learn about Vintora LLC\'s international reach and commitment to quality across diverse markets worldwide.',
    content: `Vintora LLC has grown from a local supplier to an international leader in disposable products, now serving over 30 countries across six continents. This global expansion reflects our commitment to excellence and our ability to adapt to diverse market needs.

**Our Global Presence:**
- **Europe**: Strong presence in Germany, Spain, UK, and France
- **Asia**: Major markets in Japan, China, and Southeast Asia
- **Americas**: Growing operations in North and South America
- **Africa**: Expanding footprint across key markets
- **Oceania**: Established presence in Australia and New Zealand

**What Sets Us Apart:**
- Consistent quality standards worldwide
- Localized customer support
- Flexible supply chain management
- Understanding of regional preferences
- Compliance with international regulations

Our international success is built on three pillars: quality, reliability, and customer service. We maintain strict quality control processes that ensure every product meets our high standards, regardless of where it's manufactured or shipped.

**Looking Forward:**
We're continuously exploring new markets and opportunities to serve more customers globally. Our goal is to make high-quality disposable products accessible to businesses worldwide while maintaining our commitment to sustainability and excellence.`,
    author: 'Vintora Team',
    date: '2024-01-05',
    category: 'Company News',
    tags: ['Company', 'Global', 'Expansion'],
    image: '🌍',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: '4',
    title: 'Quality Control: Ensuring Excellence in Every Product',
    excerpt: 'Discover our rigorous quality control processes that guarantee the highest standards for all our disposable products.',
    content: `Quality is at the heart of everything we do at Vintora LLC. Our comprehensive quality control system ensures that every product leaving our facilities meets the highest international standards.

**Our QC Process:**
1. **Material Inspection**: Every batch of raw materials undergoes thorough testing
2. **Production Monitoring**: Real-time quality checks during manufacturing
3. **Finished Product Testing**: Comprehensive testing before packaging
4. **Traceability System**: Every product has a traceable code for quality tracking
5. **Final Inspection**: Last check before shipping

**Testing Standards:**
- Leak resistance testing
- Temperature tolerance checks
- Durability assessments
- Food safety compliance
- Dimensional accuracy verification

**Traceable Code System:**
Our unique traceable code system allows us to track every product from raw materials to final delivery. This ensures complete transparency and accountability, giving you confidence in the products you receive.

**Continuous Improvement:**
We regularly review and update our quality control processes based on industry best practices and customer feedback. This commitment to continuous improvement ensures we stay at the forefront of quality standards in the disposable products industry.`,
    author: 'Vintora Team',
    date: '2024-01-01',
    category: 'Quality',
    tags: ['Quality', 'Process', 'Standards'],
    image: '✅',
    readTime: '5 min read',
    featured: false,
  },
]

export const getBlogPost = (id) => {
  return blogPosts.find(post => post.id === id)
}

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured)
}

export const getPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category)
}

export const getCategories = () => {
  const categories = [...new Set(blogPosts.map(post => post.category))]
  return categories
}
