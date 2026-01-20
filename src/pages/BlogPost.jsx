import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from 'lucide-react'
import { getBlogPost } from '../data/blog'

const BlogPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = getBlogPost(id)

  if (!post) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const formatContent = (content) => {
    // Split content by paragraphs (double line breaks)
    const paragraphs = content.split('\n\n')
    return paragraphs.map((para, index) => {
      // Check if paragraph is a heading (starts with **)
      if (para.startsWith('**') && para.endsWith('**')) {
        const heading = para.replace(/\*\*/g, '')
        return (
          <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {heading}
          </h3>
        )
      }
      // Check for bold text within paragraph
      const parts = para.split(/(\*\*.*?\*\*)/g)
      return (
        <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
          {parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={i} className="text-gray-900 font-semibold">{part.replace(/\*\*/g, '')}</strong>
            }
            // Check for bullet points
            if (part.startsWith('- ')) {
              return <span key={i} className="block ml-4">{part}</span>
            }
            return <span key={i}>{part}</span>
          })}
        </p>
      )
    })
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.button
            onClick={() => navigate('/blog')}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">{post.image}</span>
              <div className="flex-1">
                <div className="flex items-center gap-4 text-primary-200 mb-3">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-2">
                    <User size={16} />
                    {post.author}
                  </span>
                </div>
                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30">
                  {post.category}
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-8 pb-8 border-b border-gray-200"
            >
              <Tag size={18} className="text-gray-400" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full border border-primary-200"
                >
                  {tag}
                </span>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-auto flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    })
                  } else {
                    navigator.clipboard.writeText(window.location.href)
                    alert('Link copied to clipboard!')
                  }
                }}
              >
                <Share2 size={16} />
                Share
              </motion.button>
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
                {formatContent(post.content)}
              </div>
            </motion.div>

            {/* Back to Blog Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <Link
                to="/blog"
                className="inline-flex items-center px-8 py-4 bg-primary-700 text-white font-semibold rounded-xl hover:bg-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to All Articles
              </Link>
            </motion.div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default BlogPost
