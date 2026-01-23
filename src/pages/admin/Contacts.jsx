import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Search, 
  Trash2, 
  Eye, 
  EyeOff, 
  Calendar, 
  User, 
  MessageSquare,
  CheckCircle,
  XCircle,
  Phone
} from 'lucide-react'
import { 
  getContactSubmissions, 
  deleteContactSubmission, 
  markContactSubmissionRead,
  getUnreadCount 
} from '../../data/contacts'

const Contacts = () => {
  const [submissions, setSubmissions] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('All') // All, Unread, Read
  const [selectedSubmission, setSelectedSubmission] = useState(null)

  useEffect(() => {
    loadSubmissions()
  }, [])

  const loadSubmissions = () => {
    const allSubmissions = getContactSubmissions()
    setSubmissions(allSubmissions)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this contact submission?')) {
      if (deleteContactSubmission(id)) {
        loadSubmissions()
        if (selectedSubmission?.id === id) {
          setSelectedSubmission(null)
        }
      }
    }
  }

  const handleMarkRead = (id, read) => {
    if (markContactSubmissionRead(id, read)) {
      loadSubmissions()
      if (selectedSubmission?.id === id) {
        setSelectedSubmission({ ...selectedSubmission, read })
      }
    }
  }

  const handleViewSubmission = (submission) => {
    setSelectedSubmission(submission)
    if (!submission.read) {
      handleMarkRead(submission.id, true)
    }
  }

  const filteredSubmissions = submissions.filter(sub => {
    const matchesSearch = !searchTerm || 
      sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.message.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = 
      filter === 'All' || 
      (filter === 'Unread' && !sub.read) ||
      (filter === 'Read' && sub.read)
    
    return matchesSearch && matchesFilter
  })

  const unreadCount = getUnreadCount()

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Submissions</h1>
              <p className="text-gray-600">View and manage customer inquiries</p>
            </div>
            {unreadCount > 0 && (
              <div className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-semibold">
                {unreadCount} Unread
              </div>
            )}
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="flex gap-2">
              {['All', 'Unread', 'Read'].map((filterOption) => (
                <button
                  key={filterOption}
                  onClick={() => setFilter(filterOption)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === filterOption
                      ? 'bg-primary-700 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {filterOption}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Submissions List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredSubmissions.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl shadow">
                <Mail size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600">No contact submissions found</p>
              </div>
            ) : (
              filteredSubmissions.map((submission, index) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  onClick={() => handleViewSubmission(submission)}
                  className={`bg-white rounded-xl shadow-lg border-2 p-6 cursor-pointer hover:shadow-xl transition-all duration-300 ${
                    selectedSubmission?.id === submission.id
                      ? 'border-primary-500 bg-primary-50'
                      : submission.read
                      ? 'border-gray-200'
                      : 'border-primary-300 bg-primary-50/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        !submission.read ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{submission.name}</h3>
                        <p className="text-sm text-gray-600">{submission.email}</p>
                      </div>
                    </div>
                    {!submission.read && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">
                        New
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-3">
                    <p className="font-semibold text-gray-900 mb-1">{submission.subject}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{submission.message}</p>
                    {submission.phone && (
                      <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                        <Phone size={14} />
                        {submission.phone}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(submission.date).toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                    <div className="flex items-center gap-2">
                      {submission.read ? (
                        <span className="flex items-center gap-1 text-green-600">
                          <CheckCircle size={14} />
                          Read
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-orange-600">
                          <XCircle size={14} />
                          Unread
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Submission Details Sidebar */}
          <div className="lg:col-span-1">
            {selectedSubmission ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Details</h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleMarkRead(selectedSubmission.id, !selectedSubmission.read)}
                      className={`p-2 rounded-lg transition-colors ${
                        selectedSubmission.read
                          ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                      title={selectedSubmission.read ? 'Mark as Unread' : 'Mark as Read'}
                    >
                      {selectedSubmission.read ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    <button
                      onClick={() => handleDelete(selectedSubmission.id)}
                      className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                      Name
                    </label>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <User size={18} className="text-gray-400" />
                      <p className="text-gray-900 font-medium">{selectedSubmission.name}</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                      Email
                    </label>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Mail size={18} className="text-gray-400" />
                      <a 
                        href={`mailto:${selectedSubmission.email}`}
                        className="text-primary-700 hover:text-primary-800 font-medium"
                      >
                        {selectedSubmission.email}
                      </a>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                      Subject
                    </label>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-gray-900 font-medium">{selectedSubmission.subject}</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                      Message
                    </label>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-gray-700 whitespace-pre-wrap">{selectedSubmission.message}</p>
                    </div>
                  </div>

                  {selectedSubmission.phone && (
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                        Phone Number
                      </label>
                      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <Phone size={18} className="text-gray-400" />
                        <p className="text-gray-900 font-medium">{selectedSubmission.phone}</p>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                      Submitted
                    </label>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Calendar size={18} className="text-gray-400" />
                      <p className="text-gray-600 text-sm">
                        {new Date(selectedSubmission.date).toLocaleString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center">
                <MessageSquare size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600">Select a submission to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
