'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, ArrowLeft, Calendar, User, Search } from 'lucide-react'
import { useState } from 'react'

const notices = [
  {
    id: 1,
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৩",
    date: "১৫ ডিসেম্বর, ২০২৩",
    author: "প্রধান শিক্ষক",
    content: "আগামী ২০ ডিসেম্বর, ২০২৩ তারিখে বিদ্যালয়ের বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে। সকল শিক্ষার্থীদের অংশগ্রহণ করার জন্য অনুরোধ করা হচ্ছে।"
  },
  {
    id: 2,
    title: "অভিভাবক-শিক্ষক সভা",
    date: "১০ ডিসেম্বর, ২০২৩",
    author: "শিক্ষক পরিষদ",
    content: "আগামী ১৮ ডিসেম্বর, ২০২৩ তারিখে সকল শ্রেণির জন্য অভিভাবক-শিক্ষক সভা অনুষ্ঠিত হবে। সকল অভিভাবকদের উপস্থিত থাকার জন্য অনুরোধ করা হচ্ছে।"
  },
  {
    id: 3,
    title: "শীতকালীন অবকাশ",
    date: "৫ ডিসেম্বর, ২০২৩",
    author: "প্রশাসন",
    content: "২৫ ডিসেম্বর, ২০২৩ থেকে ৫ জানুয়ারি, ২০২৪ পর্যন্ত শীতকালীন অবকাশ চলবে। ৬ জানুয়ারি, ২০২৪ থেকে নিয়মিত ক্লাস শুরু হবে।"
  }
]

export default function NoticePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedNotice, setExpandedNotice] = useState<number | null>(null)

  const filteredNotices = notices.filter(notice =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notice.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-8">
          <ArrowLeft className="mr-2" /> হোম পেজে ফিরে যান
        </Link>
        <h1 className="text-4xl font-bold text-orange-800 mb-8 flex items-center">
          <FileText className="mr-4" /> নোটিশ বোর্ড
        </h1>
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="নোটিশ খুঁজুন..."
            className="w-full p-3 pl-10 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-orange-400" />
        </div>
        <div className="space-y-6">
          {filteredNotices.map((notice) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-orange-600 mb-2 cursor-pointer" onClick={() => setExpandedNotice(expandedNotice === notice.id ? null : notice.id)}>
                {notice.title}
              </h2>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Calendar className="mr-2" size={16} />
                <span className="mr-4">{notice.date}</span>
                <User className="mr-2" size={16} />
                <span>{notice.author}</span>
              </div>
              <motion.div
                initial={false}
                animate={{ height: expandedNotice === notice.id ? 'auto' : 0, opacity: expandedNotice === notice.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-700">{notice.content}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

