'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Users2, Mail, Phone, Briefcase, Search } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const teachers = [
  { id: 1, name: 'ড. আব্দুল করিম', designation: 'প্রধান শিক্ষক', subject: 'বাংলা', email: 'abdul.karim@example.com', phone: '+880 1234-567890', image: '/placeholder.svg?height=150&width=150' },
  { id: 2, name: 'ফাতেমা বেগম', designation: 'সহকারী শিক্ষক', subject: 'ইংরেজি', email: 'fatema.begum@example.com', phone: '+880 1234-567891', image: '/placeholder.svg?height=150&width=150' },
  { id: 3, name: 'মোঃ রফিকুল ইসলাম', designation: 'সহকারী শিক্ষক', subject: 'গণিত', email: 'rafiqul.islam@example.com', phone: '+880 1234-567892', image: '/placeholder.svg?height=150&width=150' },
  { id: 4, name: 'শাহানা পারভীন', designation: 'সহকারী শিক্ষক', subject: 'বিজ্ঞান', email: 'shahana.parvin@example.com', phone: '+880 1234-567893', image: '/placeholder.svg?height=150&width=150' },
  { id: 5, name: 'আহমেদ হোসেন', designation: 'সহকারী শিক্ষক', subject: 'সমাজ বিজ্ঞান', email: 'ahmed.hossain@example.com', phone: '+880 1234-567894', image: '/placeholder.svg?height=150&width=150' },
]

export default function TeachersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null)

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2" /> হোম পেজে ফিরে যান
        </Link>
        <h1 className="text-4xl font-bold text-blue-800 mb-8 flex items-center">
          <Users2 className="mr-4" /> শিক্ষক তালিকা
        </h1>
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="শিক্ষক খুঁজুন..."
            className="w-full p-3 pl-10 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-blue-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachers.map((teacher) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedTeacher(selectedTeacher === teacher.id ? null : teacher.id)}
            >
              <div className="p-6 cursor-pointer">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-blue-200"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-blue-600 text-center mb-2">{teacher.name}</h2>
                <div className="flex items-center justify-center text-gray-600 mb-2">
                  <Briefcase className="mr-2" size={18} />
                  <p>{teacher.designation}</p>
                </div>
                <p className="text-center text-gray-500 mb-4">{teacher.subject}</p>
                <motion.div
                  initial={false}
                  animate={{ height: selectedTeacher === teacher.id ? 'auto' : 0, opacity: selectedTeacher === teacher.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex items-center text-gray-500 mb-2">
                    <Mail className="mr-2" size={18} />
                    <a href={`mailto:${teacher.email}`} className="hover:text-blue-600">{teacher.email}</a>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Phone className="mr-2" size={18} />
                    <a href={`tel:${teacher.phone}`} className="hover:text-blue-600">{teacher.phone}</a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

