import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, MapPin, BookOpen, Users, MessageSquare, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function InstructorPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container py-8 px-6 md:px-8 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 mb-8"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>

        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="relative h-[350px] rounded-lg overflow-hidden mb-4">
                <Image
                  src="/IMG_5500.PNG"
                  alt="Salar Mousa Adam"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold">Salar Mousa Adam</h1>
              <p className="text-yellow-600 font-medium">Course Creator, Instructor, and Geoscience Educator</p>

              <div className="mt-6 space-y-4">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Link href="/enroll">Enroll in Course</Link>
                </Button>
                <Button variant="outline" className="w-full">
                  <Link href="/contact">Contact Salar</Link>
                </Button>
              </div>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Meet Salar Mousa Adam</h2>

              <div className="prose max-w-none text-slate-600 space-y-4">
                <p>
                  Salar Mousa Adam is a passionate geoscientist and educator with a deep commitment to empowering the
                  next generation of oil and gas professionals. With a Bachelor's degree in Applied Geoscience from the
                  University of Duhok and extensive fieldwork experience, Salar brings practical, terrain-based
                  geological knowledge into every lesson.
                </p>

                <p>
                  His hands-on approach is shaped by real geological surveys, mapping exercises, and collaboration with
                  seasoned professionals in the oil exploration field. Through personalized 1-on-1 instruction and
                  engaging educational content shared on social media, Salar has helped learners at all levels master
                  complex concepts in seismic interpretation, reservoir analysis, and petroleum systems.
                </p>

                <p>
                  Salar has developed and taught modules on seismic interpretation, basin analysis, and reservoir
                  evaluation—always prioritizing real-world skills and industry relevance. He actively engages with
                  petroleum professionals to stay aligned with evolving exploration practices and technologies.
                </p>

                <p>
                  Driven by a vision to make geoscience education more accessible, practical, and inspiring, Salar
                  created Core to Crust—a premium online course designed to bridge the gap between theory and industry
                  readiness. His teaching philosophy is grounded in clarity, simplicity, and scientific accuracy, making
                  advanced exploration techniques understandable and applicable, even to those new to the field.
                </p>

                <p>
                  Salar's mission is clear: to raise a new generation of exploration geologists who are not only
                  knowledgeable but also confident, skilled, and ready to meet the demands of a rapidly changing energy
                  sector.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials and Experience Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Credentials and Experience</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Education</h3>
                    <p className="text-slate-600">B.Sc. in Applied Geoscience – University of Duhok</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Field Experience</h3>
                    <p className="text-slate-600">
                      Stratigraphic logging, geological mapping, and petroleum system evaluation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Private Instruction</h3>
                    <p className="text-slate-600">One-on-one mentoring in petroleum geology and exploration</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Content Creator</h3>
                    <p className="text-slate-600">
                      Geoscience education through visual and written content on social media
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Professional Network</h3>
                    <p className="text-slate-600">
                      Collaborated and engaged with experienced oil industry geoscientists
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Teaching Philosophy Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Teaching Philosophy</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-slate-600">
                Salar's approach to teaching geoscience is built on three core principles:
              </p>

              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-yellow-600">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Clarity and Simplicity</h3>
                    <p className="text-slate-600">
                      Complex geological concepts are broken down into clear, digestible components that build upon each
                      other.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-yellow-600">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Practical Application</h3>
                    <p className="text-slate-600">
                      Every concept is tied to real-world applications in the field, ensuring students understand not
                      just the "what" but the "why" and "how."
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-yellow-600">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Industry Relevance</h3>
                    <p className="text-slate-600">
                      Course content is continuously updated to reflect current industry practices, technologies, and
                      challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-slate-600">
                  This philosophy has enabled Salar to create a learning experience that bridges the gap between
                  academic knowledge and industry readiness, preparing students to make meaningful contributions from
                  day one of their careers.
                </p>
              </div>
            </div>

            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Salar teaching in the field"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Learn Directly From Salar</h2>
          <p className="text-slate-700 max-w-2xl mx-auto mb-6">
            Join Salar's comprehensive oil exploration course and benefit from his unique teaching approach, practical
            experience, and industry connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/enroll">Enroll Now</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/curriculum">View Curriculum</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
