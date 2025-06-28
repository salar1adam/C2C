import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Clock, Award, BookOpen, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-6 md:px-8 max-w-7xl mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
 <Image
 src="/logo.svg"
              alt="Core to Crust Logo"
              width={40}
              height={40}

 />
            <span className="text-xl font-bold">Core to Crust</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#curriculum" className="text-sm font-medium hover:text-primary">
              Curriculum
            </Link>
            <Link href="#instructor" className="text-sm font-medium hover:text-primary">
              Instructor
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
            <Button asChild>
              <Link href="/enroll">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
          <div className="container relative z-10 py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 items-center px-4">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Master Oil & Gas Geoscience — From <span className="text-yellow-400">Core to Crust</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-md">
                  An in-depth, career-focused program that equips you with real-world skills for success in oil and gas
                  exploration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
  <Link href="/enroll" className="flex items-center gap-2">
    Enroll Now <ChevronRight className="h-4 w-4" />
  </Link>
</Button>
<Button
  asChild
  size="lg"
  variant="outline"
  className="border-white text-black bg-white hover:bg-white/10 hover:text-white"
>
  <Link href="#curriculum">View Curriculum</Link>
</Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-yellow-400" />
                    <span>12 Weeks</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-yellow-400" />
                    <span>Certificate</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-yellow-400" />
                    <span>1:1 Mentoring</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/ChatGPT Image Jun 1, 2025, 09_41_43 PM.png"
                  alt="Oil rig platform"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/images/oil-rig-platform.png')] opacity-20 bg-cover bg-center"></div>
        </section>

        {/* Stats Section */}
        <section className="bg-slate-50 py-12">
          <div className="container px-6 md:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-yellow-500">98%</p>
                <p className="text-sm text-slate-600 mt-2">Student Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-yellow-500">5+</p>
                <p className="text-sm text-slate-600 mt-2">Expertly curated modules</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-yellow-500">120+</p>
                <p className="text-sm text-slate-600 mt-2"> Professionals trained so far</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-yellow-500">$95K*</p>
                <p className="text-sm text-slate-600 mt-2">Avg. Salary Potential</p>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-xs text-slate-500">
                *Salary outcomes may vary based on experience, location, and industry conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Video Preview Section */}
        <section className="py-16 bg-white">
          <div className="container px-6 md:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Get a Glimpse of What You'll Learn</h2>
                <p className="text-lg text-slate-600">
                  Our curriculum is designed to provide you with practical knowledge and skills that are directly
                  applicable in the field of oil and gas exploration.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Taught using real exploration scenarios and datasets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Understand workflows used by professionals in the field</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Practice interpreting seismic data using guided exercises</span>
                  </div>
                </div>
                <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Link href="/curriculum">View Full Curriculum</Link>
                </Button>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden border-2 border-slate-200 shadow-lg group cursor-pointer">
                <Image src="/images/seismic-preview.png" alt="Course video preview" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all">
                  <div className="h-16 w-16 rounded-full bg-yellow-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black ml-1"
                    > comment for commit change
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container px-6 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Course?</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our program is designed to provide you with the knowledge and skills needed to succeed in the oil and
                gas industry.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-yellow-100 w-12 h-12 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Comprehensive Curriculum</h3>
                  <p className="text-slate-600">
                    From geological principles to basin modeling, our curriculum covers the essential knowledge areas
                    for oil and gas exploration.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-yellow-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Field-Based Mindset</h3>
                  <p className="text-slate-600">
                    Develop practical approaches to exploration challenges through case studies and real-world
                    problem-solving exercises.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-yellow-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Certification That Matters</h3>
                  <p className="text-slate-600">
                    Earn a certificate that demonstrates your knowledge and commitment to professional development in
                    the oil and gas industry.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="py-20 bg-slate-50">
          <div className="container px-6 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Course Curriculum</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our 12-week program is structured to build your knowledge from fundamentals to advanced concepts.
              </p>
            </div>
            <Tabs defaultValue="module1" className="max-w-3xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="module1">Module 1</TabsTrigger>
                <TabsTrigger value="module2">Module 2</TabsTrigger>
                <TabsTrigger value="module3">Module 3</TabsTrigger>
                <TabsTrigger value="module4">Module 4</TabsTrigger>
              </TabsList>
              <TabsContent value="module1" className="space-y-4">
                <h3 className="text-2xl font-bold">Module 1: Build Your Geological Foundation</h3>
                <p className="text-slate-600 mb-4">
                  Master the fundamental principles that govern oil formation and accumulation, giving you the essential
                  knowledge base for all exploration activities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Introduction to Petroleum Geology: Understand how hydrocarbons form and accumulate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Sedimentary Basins and Petroleum Systems: Identify promising exploration regions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Source Rock Evaluation: Determine hydrocarbon generation potential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Reservoir Characterization: Analyze rock properties that affect production</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="module2" className="space-y-4">
                <h3 className="text-2xl font-bold">Module 2: Master Exploration Techniques</h3>
                <p className="text-slate-600 mb-4">
                  Learn to use cutting-edge methods to locate and evaluate potential oil deposits with confidence and
                  precision.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Seismic Interpretation: Read and analyze complex subsurface data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Well Log Analysis: Extract critical information from drilling results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Geochemical Methods: Use chemical signatures to track hydrocarbons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Basin Modeling: Predict hydrocarbon generation and migration</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="module3" className="space-y-4">
                <h3 className="text-2xl font-bold">Module 3: Develop Drilling Expertise</h3>
                <p className="text-slate-600 mb-4">
                  Gain practical knowledge of extraction technologies that will make you invaluable on any drilling
                  project.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Drilling Technologies: Understand modern drilling systems and methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Well Completion Methods: Maximize production from discovered reserves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Production Optimization: Enhance output throughout a well's lifecycle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Enhanced Oil Recovery: Apply advanced techniques for mature fields</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="module4" className="space-y-4">
                <h3 className="text-2xl font-bold">Module 4: Achieve Industry Mastery</h3>
                <p className="text-slate-600 mb-4">
                  Apply your knowledge to real-world scenarios that will prepare you for immediate success in the field.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Case Studies of Major Oil Fields: Learn from historic discoveries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Economic Evaluation: Make data-driven investment decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Environmental Considerations: Balance production with sustainability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Future Trends: Stay ahead of industry developments</span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link href="/curriculum">View Full Curriculum</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Instructor Section */}
        <section id="instructor" className="py-20">
          <div className="container px-6 md:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image
 src="/IMG_5500.PNG"
 alt="Salar Mousa Adam teaching"
                  fill
 className="object-contain"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Meet Your Instructor</h2>
                <h3 className="text-2xl font-semibold text-yellow-600">Salar Mousa Adam</h3>
                <p className="text-lg text-slate-600">
                  With hands-on fieldwork experience and a passion for teaching, Salar Mousa Adam is part of a new
                  generation of geoscientists dedicated to transforming how oil exploration is taught and learned.
                  Having worked directly in the field and instructed dozens of learners one-on-one, he brings both
                  scientific depth and educational clarity to every lesson.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>B.Sc. in Applied Geoscience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Led field studies on sedimentary basins and reservoir characterization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Provided one-on-one instruction on oil & gas topics for students and professionals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Created widely shared educational content on social media</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Collaborated with professionals in the oil and gas industry to shape practical learning</span>
                  </div>
                </div>
                <p className="text-slate-600">
                  Salar believes the future of geoscience belongs to those who can combine real-world knowledge with
                  accessible, modern teaching. His mission with Core to Crust is to bridge that gap and empower the next
                  wave of oil exploration professionals.
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/instructor">Full Biography</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-50">
          <div className="container px-6 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories You Can Expect</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Here's how this specialized training can transform careers in the oil exploration industry.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image src="/sarah.jpg" alt="Sarah Johnson" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold">Sarah Johnson</h4>
                      <p className="text-sm text-slate-500">Senior Exploration Geologist, BP</p>
                    </div>
                  </div>
                  <p className="text-slate-600">
                    "Within 3 months of completing this course, I was promoted to lead geologist on BP's North Sea
                    exploration project. The seismic interpretation techniques I learned directly contributed to our
                    team discovering a new field with an estimated 50 million barrels of recoverable oil."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image src="/mechael.jpg" alt="Michael Chen" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold">Michael Chen</h4>
                      <p className="text-sm text-slate-500">Reservoir Engineer, Chevron</p>
                    </div>
                  </div>
                  <p className="text-slate-600">
                    "I came from a mechanical engineering background with no oil industry experience. This course gave
                    me the specialized knowledge I needed to land a position at Chevron with a $42,000 salary increase.
                    The hands-on training with industry software made all the difference."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image src="/elena.jpg" alt="Elena Rodriguez" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold">Elena Rodriguez</h4>
                      <p className="text-sm text-slate-500">Exploration Project Manager, Total</p>
                    </div>
                  </div>
                  <p className="text-slate-600">
                    "The economic evaluation and risk assessment modules gave me skills that set me apart from other
                    candidates. I now lead a team of 15 on Total's $120M offshore exploration project in Brazil, and
                    we've already identified two promising prospects."
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-sm text-slate-500 mt-8">
              * Representative success stories based on industry outcomes. Names and photos are illustrative.
            </p>
          </div>
        </section>

        {/* What You'll Achieve Section */}
        <section className="py-20 bg-white">
          <div className="container px-6 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Achieve With This Course</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our curriculum is designed to develop career-changing skills that make professionals highly sought after
                in the industry.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-yellow-100 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-600"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Land Premium Job Offers</h3>
                  <p className="text-slate-600">
                    Industry professionals with specialized training typically receive multiple job offers, with many
                    reporting salary increases of up to 35%.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-yellow-100 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Get Exposure to Industry Tools</h3>
                  <p className="text-slate-600">
                    We introduce key concepts and workflows from tools like Petrel and Kingdom—so you're familiar with
                    the software used in the field.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-yellow-100 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-600"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Expand Your Professional Network</h3>
                  <p className="text-slate-600">
                    Engage with like-minded professionals, mentors, and peers through our private forum and live
                    sessions—building connections that can support your growth throughout your geoscience career.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-yellow-100 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-600"
                    >
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0-1.79 1.11z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Lead Exploration Projects</h3>
                  <p className="text-slate-600">
                    Develop the confidence and expertise to present exploration results and lead teams on high-stakes
                    projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container px-6 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Learning Path</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Select the option that best fits your learning style and career goals.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-slate-200">
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">Self-Paced</h3>
                    <div className="text-3xl font-bold mb-2">$1,099</div>
                    <p className="text-sm text-slate-500">One-time payment – Lifetime Access</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Lifetime access to all course materials and future updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Full video lecture library (structured modules)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Completion certificate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>24/7 Q&A support directly from Salar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Exclusive learning resources and downloadable tools</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full" variant="outline">
  <Link href="/enroll?plan=self-paced">Select Plan</Link>
</Button>
                </CardContent>
              </Card>
              <Card className="border-yellow-500 shadow-lg relative">
                <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  MOST POPULAR
                </div>
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">Professional Plan</h3>
                    <div className="text-3xl font-bold mb-2">$2,499</div>
                    <p className="text-sm text-slate-500">One-time payment – Lifetime Access</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Everything in Self-Paced</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Personalized feedback on assignments and progress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Lifetime 1-on-1 Mentorship with Salar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Access to private professional community (invite-only forum)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Real case studies and interpretation exercises</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Career support guidance and portfolio review</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
  <Link href="/enroll?plan=professional">Select Plan</Link>
</Button>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">Executive Plan</h3>
                    <div className="text-xl font-bold mb-2">(For Companies & Teams)</div>
                    <p className="text-sm text-slate-500">Custom Pricing</p>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Tailored corporate training packages designed to upskill your technical teams in oil & gas
                    geoscience.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Focused training sessions on core exploration topics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Flexible delivery for teams of any size</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full" variant="outline">
  <Link href="/contact?inquiry=corporate">Contact us for details</Link>
</Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8 text-sm">
              <div className="bg-green-50 border border-green-200 rounded-md p-4 max-w-2xl mx-auto">
                <h3 className="font-bold text-green-800 mb-1">Our Commitment to Quality</h3>
                <p className="text-green-700">
                  We're dedicated to delivering exceptional educational value. Our course is designed with industry best
                  practices and expert guidance to ensure you receive the highest quality knowledge in oil industry.
                </p>
              </div>
            </div>
            <div className="text-center mt-8 text-sm text-slate-500">
              <p>
                Corporate and group rates available.{" "}
                <Link href="/contact" className="text-yellow-600 hover:underline">
                  Contact us
                </Link>{" "}
                for details.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-slate-50">
          <div className="container px-6 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Find answers to common questions about our course.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Do I need prior experience in geology or oil exploration?</h3>
                  <p className="text-slate-600">
                    While some background in geology or engineering is helpful, our course is designed to accommodate
                    professionals from various backgrounds. We provide foundational knowledge before advancing to more
                    complex topics.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">How much time should I commit each week?</h3>
                  <p className="text-slate-600">
                    We recommend dedicating 10-15 hours per week to get the most out of the course. This includes
                    watching lectures, completing assignments, and participating in discussions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Is financial aid available?</h3>
                  <p className="text-slate-600">
                    Yes, we offer payment plans and a limited number of scholarships for qualified applicants.
                    Additionally, many employers will cover part or all of the cost as professional development.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">How does the job placement assistance work?</h3>
                  <p className="text-slate-600">
                    Our industry partnerships give our graduates preferred access to job openings. We also provide
                    resume review, interview coaching, and direct introductions to hiring managers at partner companies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Can I access the course materials after completion?</h3>
                  <p className="text-slate-600">
                    Self-Paced and Professional plan students have access for 1 year. Executive plan students receive
                    lifetime access to all course materials and updates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container px-6 md:px-8 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Join the ranks of successful oil exploration professionals who started with our comprehensive course.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link href="/enroll">Enroll Now</Link>
              </Button>
              <Button
               asChild size="lg"
                variant="outline"
                className="border-white text-black bg-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-slate-400">Next cohort starts June 1, 2025. Limited seats available.</p>
          </div>
        </section>
      </main>
      <footer className="bg-slate-900 text-white py-12">
        <div className="container px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Core to Crust</h3>
              <p className="text-sm text-slate-400">
                The premier professional education program for oil exploration experts.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/curriculum" className="hover:text-white">
                    Curriculum
                  </Link>
                </li>
                <li>
                  <Link href="/instructor" className="hover:text-white">
                    Instructor
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-slate-400">

                <li>
                  <Link href="/faqs" className="hover:text-white">FAQ</Link>
                </li>

                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>

                  <Link href="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-use" className="hover:text-white">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>info@coretocrust.com</li>
                <li>(964) 750-6416103</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Core to Crust Oil Exploration. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
