'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const routine = [
  { day: 'রবিবার', classes: ['বাংলা', 'ইংরেজি', 'গণিত', 'বিজ্ঞান', 'সমাজ বিজ্ঞান'] },
  { day: 'সোমবার', classes: ['ইংরেজি', 'গণিত', 'বাংলা', 'ধর্ম', 'শারীরিক শিক্ষা'] },
  { day: 'মঙ্গলবার', classes: ['গণিত', 'বিজ্ঞান', 'ইংরেজি', 'বাংলা', 'কম্পিউটার'] },
  { day: 'বুধবার', classes: ['বিজ্ঞান', 'বাংলা', 'ইংরেজি', 'গণিত', 'চারু ও কারুকলা'] },
  { day: 'বৃহস্পতিবার', classes: ['সমাজ বিজ্ঞান', 'ইংরেজি', 'গণিত', 'বাংলা', 'বিজ্ঞান'] },
]

const timeslots = ['9:00 - 9:45', '10:00 - 10:45', '11:00 - 11:45', '12:00 - 12:45', '2:00 - 2:45']

export default function ClassRoutinePage() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-teal-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-800 mb-8">
          <ArrowLeft className="mr-2" /> হোম পেজে ফিরে যান
        </Link>
        <h1 className="text-4xl font-bold text-green-800 mb-8 flex items-center">
          <BookOpen className="mr-4" /> ক্লাস রুটিন
        </h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {routine.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border-b border-green-200 ${index % 2 === 0 ? 'bg-green-50' : 'bg-white'}`}
            >
              <div
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
              >
                <h2 className="text-xl font-semibold text-green-700">{day.day}</h2>
                {expandedDay === day.day ? <ChevronUp className="text-green-600" /> : <ChevronDown className="text-green-600" />}
              </div>
              <motion.div
                initial={false}
                animate={{ height: expandedDay === day.day ? 'auto' : 0, opacity: expandedDay === day.day ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-200">
                      <th className="py-2 px-4 text-left">সময়</th>
                      <th className="py-2 px-4 text-left">বিষয়</th>
                    </tr>
                  </thead>
                  <tbody>
                    {day.classes.map((subject, i) => (
                      <tr key={i} className="border-t border-green-100">
                        <td className="py-2 px-4">
                          <div className="flex items-center">
                            <Clock className="mr-2" size={16} />
                            {timeslots[i]}
                          </div>
                        </td>
                        <td className="py-2 px-4">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-green-100 rounded p-2 text-center"
                          >
                            {subject}
                          </motion.div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

