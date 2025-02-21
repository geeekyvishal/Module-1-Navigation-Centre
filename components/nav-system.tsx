"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ChevronRight } from "lucide-react"
import Image from "next/image"
// Sample navigation data with images

const navigationData = {
  "About Us": {
    image: "https://iirfranking.com/news/wp-content/uploads/2022/10/IIIT-Nagpur.webp",
    items: {
      "Act (PPP)": { image: "https://iiitn.ac.in/images/album/upcoming-campus-photo//16.jpeg" },
      Statute: { image: "https://example.com/statute.jpg" },
      "Institute Profile": { image: "https://iiitn.ac.in/images/Slider/123/Slider-123.jpg" },
      Facilities: { image: "https://example.com/facilities.jpg" },
      "Annual Report": { image: "https://example.com/annual-report.jpg" },
      MoU: { image: "https://example.com/mou.jpg" },
    },
  },
  Governance: {
    image: "https://example.com/governance.jpg",
    items: {
      Committee: {
        image: "https://example.com/committee.jpg",
        items: [
          { name: "Board Of Governors", image: "https://example.com/bog.jpg" },
          { name: "Finance Committee", image: "https://example.com/finance.jpg" },
          { name: "Senate", image: "https://example.com/senate.jpg" },
          { name: "Building Works Committee", image: "https://example.com/building.jpg" },
        ],
      },
      Administration: {
        image: "https://example.com/administration.jpg",
        items: [
          { name: "Chairman", image: "https://example.com/chairman.jpg" },
          { name: "Director", image: "https://example.com/director.jpg" },
          { name: "Registrar", image: "https://example.com/registrar.jpg" },
          { name: "Staff", image: "https://example.com/staff.jpg" },
        ],
      },
    },
  },
  Departments: {
    image: "https://example.com/departments.jpg",
    items: {
      "Basic Sciences": {
        image: "https://example.com/basic-sciences.jpg",
        items: [
          { name: "About Department", image: "https://example.com/about.jpg" },
          { name: "BoS", image: "https://example.com/bos.jpg" },
          { name: "Achievements", image: "https://example.com/achievements.jpg" },
          { name: "Research", image: "https://example.com/research.jpg" },
          { name: "Faculty", image: "https://example.com/faculty.jpg" },
          { name: "Staff", image: "https://example.com/staff.jpg" },
          { name: "Projects", image: "https://example.com/projects.jpg" },
          { name: "Laboratory", image: "https://example.com/laboratory.jpg" },
          { name: "Events", image: "https://example.com/events.jpg" },
        ],
      },
      "Computer Science and Engineering": {
        image: "https://example.com/cse.jpg",
        items: [
          { name: "About Department", image: "https://example.com/about.jpg" },
          { name: "BoS", image: "https://example.com/bos.jpg" },
          { name: "Achievements", image: "https://example.com/achievements.jpg" },
          { name: "Research", image: "https://example.com/research.jpg" },
          { name: "Faculty", image: "https://example.com/faculty.jpg" },
          { name: "Staff", image: "https://example.com/staff.jpg" },
          { name: "Projects", image: "https://example.com/projects.jpg" },
          { name: "Laboratory", image: "https://example.com/laboratory.jpg" },
          { name: "Events", image: "https://example.com/events.jpg" },
        ],
      },
      "Electronics & Communication Engineering": {
        image: "https://example.com/ece.jpg",
        items: [
          { name: "About Department", image: "https://example.com/about.jpg" },
          { name: "BoS", image: "https://example.com/bos.jpg" },
          { name: "Achievements", image: "https://example.com/achievements.jpg" },
          { name: "Research", image: "https://example.com/research.jpg" },
          { name: "Faculty", image: "https://example.com/faculty.jpg" },
          { name: "Staff", image: "https://example.com/staff.jpg" },
          { name: "Projects", image: "https://example.com/projects.jpg" },
          { name: "Laboratory", image: "https://example.com/laboratory.jpg" },
          { name: "Events", image: "https://example.com/events.jpg" },
        ],
      },
    },
  },
  "Doctoral Programme": {
    image: "https://example.com/phd.jpg",
    items: {
      "Overview of PhD Program": { image: "https://example.com/overview.jpg" },
      "Doctoral Programme Features": { image: "https://example.com/features.jpg" },
      "Research Areas": { image: "https://example.com/research-areas.jpg" },
      "Operational Details": { image: "https://example.com/operational.jpg" },
      "Important Proformas": { image: "https://example.com/proformas.jpg" },
      Checklists: { image: "https://example.com/checklists.jpg" },
      "Contact Us": { image: "https://example.com/contact.jpg" },
    },
  },
  Programs: {
    image: "https://example.com/programs.jpg",
    items: {
      "B.Tech": { image: "https://example.com/btech.jpg" },
      "PG Diploma": { image: "https://example.com/pgd.jpg" },
      PhD: { image: "https://example.com/phd.jpg" },
      "M.Tech": { image: "https://example.com/mtech.jpg" },
      Curriculum: { image: "https://example.com/curriculum.jpg" },
      Reports: { image: "https://example.com/reports.jpg" },
    },
  },
  Admissions: {
    image: "https://example.com/admissions.jpg",
    items: {
      "Undergraduate B.Tech": { image: "https://example.com/ug-btech.jpg" },
      Postgraduate: { image: "https://example.com/pg.jpg" },
      "UG Academic Rule Book": { image: "https://example.com/ug-rulebook.jpg" },
      "PG Academic Rule Book": { image: "https://example.com/pg-rulebook.jpg" },
    },
  },
  Alumni: {
    image: "https://example.com/alumni.jpg",
    items: {
      "Member Login": { image: "https://example.com/member-login.jpg" },
      Members: { image: "https://example.com/members.jpg" },
      "About Us": { image: "https://example.com/alumni-about.jpg" },
    },
  },
  Placements: {
    image: "https://example.com/placements.jpg",
    items: {
      "About Us": { image: "https://example.com/placements-about.jpg" },
      "Why Recruit from IIITN Nagpur?": { image: "https://example.com/recruit.jpg" },
      "Placement Statistics": { image: "https://example.com/statistics.jpg" },
      "For Companies": { image: "https://example.com/companies.jpg" },
      "For Students": { image: "https://example.com/students.jpg" },
      "Contact T&P": { image: "https://example.com/contact.jpg" },
      Internships: { image: "https://example.com/internships.jpg" },
    },
  },
  Student: {
    image: "https://example.com/student.jpg",
    items: {
      Activities: { image: "https://example.com/activities.jpg" },
      Achievements: { image: "https://example.com/achievements.jpg" },
      "Clinical Counselling": { image: "https://example.com/counselling.jpg" },
      Scholarships: { image: "https://example.com/scholarships.jpg" },
      Hostel: { image: "https://example.com/hostel.jpg" },
      "Student Mess": { image: "https://example.com/mess.jpg" },
      Download: { image: "https://example.com/download.jpg" },
      "Convocation 2023": { image: "https://example.com/convocation.jpg" },
      Fees: { image: "https://example.com/fees.jpg" },
    },
  },
  NIRF: {
    image: "https://example.com/nirf.jpg",
    items: {
      "NIRF 2025": { image: "https://example.com/nirf2025.jpg" },
      "NIRF 2024": { image: "https://example.com/nirf2024.jpg" },
      "NIRF 2023": { image: "https://example.com/nirf2023.jpg" },
    },
  },
  Others: {
    image: "https://example.com/others.jpg",
    items: {
      Consultancy: { image: "https://example.com/consultancy.jpg" },
      "Institution Innovation Council": { image: "https://example.com/iic.jpg" },
      "Official Documents": { image: "https://example.com/documents.jpg" },
      "Electoral Literacy Club": { image: "https://example.com/electoral.jpg" },
      "Guest House": { image: "https://example.com/guesthouse.jpg" },
      "Press Release": { image: "https://example.com/press.jpg" },
    },
  },
}

type ContentData = {
  [key: string]: {
    title: string
    content: string
  }
}

const contentData: ContentData = {
  "Act (PPP)": {
    title: "Indian Institute of Information Technology Act",
    content:
      "The Indian Institute of Information Technology (IIIT), Nagpur is one of the IIIT under the Indian Institute of Information Technology (Public-Private Partnership) Act, 2017. This act provides for the establishment of IIITs through the Public-Private Partnership (PPP) model to promote technical education and research.\n\nThe PPP model is a unique collaboration between:\n- Central Government (50% stake)\n- State Government (35% stake)\n- Industry Partners (15% stake)\n\nThis model ensures sustainable and high-quality technical education while maintaining strong industry connections.",
  },
  Statute: {
    title: "IIIT Nagpur Statutes",
    content:
      "The statutes of IIIT Nagpur govern the administration, academic framework, and operational guidelines of the institute. These comprehensive rules ensure transparent governance and efficient functioning of the institution.",
  },
  "Institute Profile": {
    title: "About IIIT Nagpur",
    content:
      "IIIT Nagpur, established in 2016, is an Institute of National Importance. Located in Maharashtra's education hub, it offers cutting-edge programs in Computer Science, Electronics, and Communication Engineering.",
  },
  Facilities: {
    title: "Campus Facilities",
    content:
      "Our state-of-the-art campus features modern laboratories, a digital library, smart classrooms, and research centers. The campus provides a conducive environment for learning and innovation.",
  },
  "Annual Report": {
    title: "Yearly Progress Report",
    content:
      "The annual report showcases the institute's achievements, research output, placements, and financial statements for each academic year.",
  },
  MoU: {
    title: "Memorandum of Understanding",
    content:
      "IIIT Nagpur has established strategic partnerships with leading industries and academic institutions worldwide to enhance research collaboration and student opportunities.",
  },
}

// const data = {
//   Act: "The Indian Institute of Information Technology (IIIT), Nagpur is one of the IIITs under the Indian Institute of Information Technology (Public-Private Partnership) Act, 2017.",
//   "PPP Model":
//     "The Public-Private Partnership (PPP) model is a collaborative approach where the government partners with private entities to establish and run IIITs, ensuring better infrastructure and education quality.",
//   Formation:
//     "IIITs are formed under a unique PPP model involving the central government, state government, and industry partners to promote technical education and research.",
//   Other: "This is some dummy data for another section. More details can be added as needed.",
// }

export function NavSystem() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [activeMain, setActiveMain] = React.useState<string | null>(null)
  const [activeSub, setActiveSub] = React.useState<string | null>(null)
  const [activeDetail, setActiveDetail] = React.useState<string | null>(null)
  const [backgroundImage, setBackgroundImage] = React.useState("")

  // const [filteredData, setFilteredData] = React.useState(navigationData);
  type Item = {
    name: string
    image: string
  }

  type SubData = {
    image: string
    items?: Item[]
  }

  type MainData = {
    image: string
    items: Record<string, SubData>
  }

  type NavigationData = Record<string, MainData>

  const [filteredData, setFilteredData] = React.useState<NavigationData>(navigationData)

  // Handle search
  React.useEffect(() => {
    if (!searchQuery) {
      setFilteredData(navigationData)
      return
    }

    const filtered: Record<string, MainData> = {}

    Object.entries(navigationData).forEach(([main, mainData]) => {
      if (main.toLowerCase().includes(searchQuery.toLowerCase())) {
        filtered[main] = mainData
      } else {
        const filteredItems: Record<string, SubData> = {}
        Object.entries(mainData.items).forEach(([sub, subData]) => {
          if (
            sub.toLowerCase().includes(searchQuery.toLowerCase()) ||
            // @ts-expect-error: This is necessary because of X reason

            subData.items?.some((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
          ) {
            filteredItems[sub] = subData
          }
        })
        if (Object.keys(filteredItems).length > 0) {
          filtered[main] = { ...mainData, items: filteredItems }
        }
      }
    })

    setFilteredData(filtered)
  }, [searchQuery])

  // Update background image

  React.useEffect(() => {
    if (activeDetail) {
      setBackgroundImage(
        // @ts-expect-error: This is necessary because of X reason

        filteredData[activeMain!]?.items[activeSub!]?.items.find((item) => item.name === activeDetail)?.image ?? "",
      )
    } else if (activeSub) {
      setBackgroundImage(filteredData[activeMain!].items[activeSub].image)
    } else if (activeMain) {
      setBackgroundImage(filteredData[activeMain].image)
    } else {
      setBackgroundImage("")
    }
  }, [activeMain, activeSub, activeDetail, filteredData])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <motion.div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        animate={{ opacity: backgroundImage ? 0.3 : 0 }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg"
              alt="Harvard Logo"
              className="h-8"
              width={100}
              height={100}
            />
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-crimson-500"
              />
              {searchQuery ? (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="w-4 h-4 text-white/60" />
                </button>
              ) : (
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
              )}
            </div>
          </div>
        </header>

        {/* Navigation System */}
        <div className="pt-16 flex">
          {/* Main Navigation */}
          <nav className="w-64 h-[calc(100vh-4rem)] fixed overflow-y-auto">
            <ul className="py-4">
              {Object.entries(filteredData).map(([main, data]) => (
                <li key={main}>
                  <button
                    onClick={() => {
                      setActiveMain(activeMain === main ? null : main)
                      setActiveSub(null)
                      setActiveDetail(null)
                    }}
                    className="w-full px-6 py-3 text-left hover:text-crimson-500 transition-colors relative group"
                  >
                    <span className={`relative ${activeMain === main ? "text-crimson-500" : ""}`}>
                      {main}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crimson-500 transition-all group-hover:w-full"></span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Animated line */}
          <motion.div
            className="fixed left-64 top-16 w-px h-0 bg-white/20"
            initial={{ height: 0 }}
            animate={{ height: "calc(100vh - 4rem)" }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Sub Navigation */}
          <div className="ml-64 w-64 h-[calc(100vh-4rem)] fixed overflow-y-auto">
            <AnimatePresence mode="wait">
              {activeMain && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="p-4"
                >
                  <ul>
                    {Object.entries(filteredData[activeMain].items).map(([sub, data], index) => (
                      <motion.li
                        key={sub}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => {
                            setActiveSub(activeSub === sub ? null : sub)
                            setActiveDetail(null)
                          }}
                          className="w-full px-4 py-2 text-left hover:text-crimson-500 transition-colors flex items-center group"
                        >
                          <ChevronRight
                            className={`w-4 h-4 mr-2 transition-transform ${activeSub === sub ? "rotate-90" : ""}`}
                          />
                          <span className={`relative ${activeSub === sub ? "text-crimson-500" : ""}`}>
                            {sub}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crimson-500 transition-all group-hover:w-full"></span>
                          </span>
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Content Area */}
          <main className="ml-[32rem] flex-1 min-h-[calc(100vh-4rem)]">
            <AnimatePresence mode="wait">
              {activeSub && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  {/* Special handling for Departments and Governance sections */}
                  {activeMain === "Departments" ||
                  (activeMain === "Governance" && activeSub === "Committee") ||
                  (activeMain === "Governance" && activeSub === "Administration") ? (
                    <>
                      <h1 className="text-3xl font-serif mb-6">{activeSub}</h1>
                      <div className="grid grid-cols-2 gap-4">
                        {filteredData[activeMain]?.items[activeSub]?.items?.map(
                          (item: { name: string; image: string }, index: number) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="p-4 rounded bg-white/5 cursor-not-allowed"
                            >
                              <span className="text-lg font-medium">{item.name}</span>
                            </motion.div>
                          ),
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <h1 className="text-3xl font-serif mb-6">{contentData[activeSub]?.title || activeSub}</h1>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-lg leading-relaxed">
                          {contentData[activeSub]?.content || "Content coming soon..."}
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  )
}

