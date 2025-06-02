import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Clock, BookOpen, Download, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CurriculumPage() {
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

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold mb-4">Course Curriculum</h1>
              <p className="text-slate-600 mb-6">
                Our 12-week intensive program is designed to transform you from foundational knowledge to expert-level
                oil exploration skills — guided by real-world techniques and tools used in the industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Link href="/enroll">Enroll Now</Link>
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Full Syllabus
                </Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden pt-[66.67%]">
              <Image
                src="/circuleom.png"
                alt="Course curriculum overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Program Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Duration</h3>
                  <p className="text-sm text-slate-600">12 weeks (10–15 hours/week)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Format</h3>
                  <p className="text-sm text-slate-600">
                    Pre-recorded lectures, practical assignments, live sessions, and hands-on projects
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Level</h3>
                  <p className="text-sm text-slate-600">
                    Intermediate — basic understanding of geology is helpful but not required
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Certificate</h3>
                  <p className="text-sm text-slate-600">Professional certificate awarded upon successful completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Tabs defaultValue="module1" className="space-y-8">
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="module1">Module 1</TabsTrigger>
                <TabsTrigger value="module2">Module 2</TabsTrigger>
                <TabsTrigger value="module3">Module 3</TabsTrigger>
                <TabsTrigger value="module4">Module 4</TabsTrigger>
              </TabsList>

              <TabsContent value="module1" className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-2">Module 1: Build Your Geological Foundation</h2>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>3 Weeks</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>12 Lessons</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Start with the key geological concepts necessary to understand oil formation, trapping, and
                    exploration.
                  </p>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="week1">
                      <AccordionTrigger>Week 1: Fundamentals of Petroleum Geology</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Lesson 1: Formation of Oil and Gas</p>
                              <p className="text-sm text-slate-500">
                                Understanding how hydrocarbons form and accumulate over geological time.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Lesson 2: Geological Time & Stratigraphic Principles</p>
                              <p className="text-sm text-slate-500">
                                The chronological framework for understanding petroleum systems.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Lesson 3: Rock Types and Reservoir Quality</p>
                              <p className="text-sm text-slate-500">
                                Identifying and analyzing sedimentary rocks relevant to petroleum geology.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Lesson 4: Basics of Structural Geology</p>
                              <p className="text-sm text-slate-500">
                                Understanding faults, folds, and other structural features that trap oil.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="week2">
                      <AccordionTrigger>Week 2: Sedimentary Basins and Petroleum Systems</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Lesson 1: Basin Formation & Classification</p>
                              <p className="text-sm text-slate-500">
                                Classification and evolution of sedimentary basins.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Lesson 2: Petroleum System Elements</p>
                              <p className="text-sm text-slate-500">
                                Source, reservoir, seal, trap, and timing - the essential components.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Lesson 3: Hydrocarbon Migration and Accumulation</p>
                              <p className="text-sm text-slate-500">
                                How oil and gas move from source rocks to reservoir rocks.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Lesson 4: Basin Modeling Concepts</p>
                              <p className="text-sm text-slate-500">
                                Integrating all elements to understand a complete petroleum system.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="week3">
                      <AccordionTrigger>Week 3: Source Rock & Reservoir Evaluation</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Lesson 1: Source Rock Identification & Geochemistry</p>
                              <p className="text-sm text-slate-500">Characteristics and types of source rocks.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Lesson 2: Maturity & Generation Windows</p>
                              <p className="text-sm text-slate-500">
                                Methods to determine if source rocks have generated hydrocarbons.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Lesson 3: Reservoir Rock Properties</p>
                              <p className="text-sm text-slate-500">
                                Porosity, permeability, and other key characteristics.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Lesson 4: Seal Integrity & Trap Geometry</p>
                              <p className="text-sm text-slate-500">
                                Evaluating the mechanisms that contain hydrocarbons.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="module2" className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-2">Module 2: Master Exploration Techniques</h2>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>3 Weeks</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>10 Lessons</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Apply exploration methods used by petroleum geoscientists in real-world oil field evaluations.
                  </p>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="week4">
                      <AccordionTrigger>Seismic Data Interpretation (2D & 3D)</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Principles of Seismic Reflection</p>
                              <p className="text-sm text-slate-500">
                                Understanding how seismic waves interact with subsurface structures.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">2D and 3D Seismic Data Acquisition</p>
                              <p className="text-sm text-slate-500">
                                Methods and technologies for gathering seismic data.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Structural Interpretation</p>
                              <p className="text-sm text-slate-500">
                                Identifying faults, folds, and other structural features on seismic data.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="week5">
                      <AccordionTrigger>Well Log Analysis</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Introduction to Well Logging</p>
                              <p className="text-sm text-slate-500">
                                Types of logs and their applications in petroleum exploration.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Gamma Ray, Resistivity, Neutron-Density Logs</p>
                              <p className="text-sm text-slate-500">
                                Interpreting key log types for reservoir characterization.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Formation Evaluation</p>
                              <p className="text-sm text-slate-500">
                                Determining lithology, fluid content, and reservoir quality.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="week6">
                      <AccordionTrigger>Geochemical Prospecting & Subsurface Mapping</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Geochemical Sampling Methods</p>
                              <p className="text-sm text-slate-500">
                                Surface and subsurface techniques for hydrocarbon detection.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Play Fairway Analysis</p>
                              <p className="text-sm text-slate-500">
                                Systematic approach to evaluating exploration opportunities.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Subsurface Mapping Techniques</p>
                              <p className="text-sm text-slate-500">
                                Creating accurate representations of underground structures.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="module3" className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-2">Module 3: Develop Drilling & Production Knowledge</h2>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>3 Weeks</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>10 Lessons</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Learn modern drilling technologies, well construction, and production methods used in hydrocarbon
                    extraction.
                  </p>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="week7">
                      <AccordionTrigger>Types of Drilling Rigs & Drilling Fluids</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Drilling Fundamentals</p>
                              <p className="text-sm text-slate-500">
                                Basic principles and components of drilling operations.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Rig Types and Selection</p>
                              <p className="text-sm text-slate-500">
                                Choosing the appropriate drilling technology for different environments.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Drilling Fluids and Their Functions</p>
                              <p className="text-sm text-slate-500">Properties and roles in wellbore stability.</p>
                            </div>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="week8">
                      <AccordionTrigger>Well Design & Completion</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Casing and Cementing</p>
                              <p className="text-sm text-slate-500">
                                Designing and implementing wellbore stability systems.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Perforation Techniques</p>
                              <p className="text-sm text-slate-500">
                                Creating pathways for hydrocarbon flow into the wellbore.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Completion Methods</p>
                              <p className="text-sm text-slate-500">Preparing wells for optimal production.</p>
                            </div>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="week9">
                      <AccordionTrigger>Production Optimization & Enhanced Oil Recovery</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Production Optimization Techniques</p>
                              <p className="text-sm text-slate-500">
                                Methods to maximize hydrocarbon recovery and efficiency.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Enhanced Oil Recovery Fundamentals</p>
                              <p className="text-sm text-slate-500">
                                Advanced techniques for improving recovery rates.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Field Development Planning</p>
                              <p className="text-sm text-slate-500">Strategic approaches to maximizing field value.</p>
                            </div>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="module4" className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-2">Module 4: Achieve Industry-Level Mastery</h2>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>3 Weeks</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>10 Lessons</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Integrate knowledge through real-world oil field case studies, risk management, and sustainability
                    practices.
                  </p>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="week10">
                      <AccordionTrigger>Global Field Case Studies</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Middle East Oil Fields</p>
                              <p className="text-sm text-slate-500">
                                Analysis of the world's largest petroleum systems.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">North Sea Developments</p>
                              <p className="text-sm text-slate-500">Offshore exploration and production challenges.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Permian Basin Evolution</p>
                              <p className="text-sm text-slate-500">
                                From conventional to unconventional resource development.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="week11">
                      <AccordionTrigger>Project Economics & Risk Assessment</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Project Economics & Uncertainty Analysis</p>
                              <p className="text-sm text-slate-500">
                                Financial evaluation of exploration opportunities.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Risk Assessment & Prospect Ranking</p>
                              <p className="text-sm text-slate-500">
                                Methodologies for evaluating and prioritizing opportunities.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Decision Analysis</p>
                              <p className="text-sm text-slate-500">
                                Frameworks for making exploration and development decisions.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="week12">
                      <AccordionTrigger>Environmental Challenges & Future Trends</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Environmental Challenges in Exploration & Production</p>
                              <p className="text-sm text-slate-500">
                                Balancing resource development with environmental stewardship.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">AI in Exploration</p>
                              <p className="text-sm text-slate-500">
                                Applications of machine learning and artificial intelligence.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Carbon Capture & Storage (CCS)</p>
                              <p className="text-sm text-slate-500">
                                Repurposing geological knowledge for climate solutions.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Unconventional Resources</p>
                              <p className="text-sm text-slate-500">
                                Shale oil, tight gas, and other emerging resource types.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Learning Resources Included</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Digital course textbook</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Interactive 3D geological diagrams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Real seismic, well log, and basin datasets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Software Exposure: Learn workflows and case studies using leading tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Case study documents from global oil fields</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Community forum for peer networking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Enroll Now</h2>
                <p className="text-slate-600 mb-4">
                  Secure your spot in our next cohort starting June 1, 2025. Limited seats available.
                </p>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Link href="/enroll">Enroll Now</Link>
                </Button>
                <p className="text-sm text-slate-500 mt-4 text-center">
                  Questions?{" "}
                  <Link href="/contact" className="text-yellow-600 hover:underline">
                    Contact our admissions team
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Career Outcomes Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6">Career Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-yellow-600">Potential Roles This Training Supports</h3>
              <p className="text-slate-600 mb-4">This course prepares you for industry-relevant roles such as:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Exploration Geoscientist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Petroleum Geologist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Seismic Interpreter</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Wellsite Geologist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Reservoir Analyst</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Technical Consultant (Oil Services)</span>
                </li>
              </ul>
              <p className="text-sm text-slate-500 mt-4">
                * Salaries range from $90K–$150K+ depending on company, country, and experience.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-yellow-600">Where These Skills Are in Demand</h3>
              <p className="text-slate-600 mb-4">
                This course aligns with the hiring needs of organizations across the energy industry:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>International Oil Companies: ExxonMobil, Shell, Chevron</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Independents: ConocoPhillips, Occidental, Devon</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Oilfield Services: Schlumberger, Halliburton, Baker Hughes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Consultancies: Wood Mackenzie, Rystad Energy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Energy Ministries & Government Agencies</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Add Industry Demand Alert inside Career Outcomes section */}
          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-600 mt-0.5 flex-shrink-0"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <div>
                <h3 className="font-medium text-yellow-700 text-sm">Industry Demand Alert</h3>
                <p className="text-slate-700 text-sm mt-0.5">
                  According to the latest industry reports, there's a projected shortage of 25,000 qualified oil
                  exploration professionals over the next five years due to retirements and industry growth. Graduates
                  with specialized training are positioned to command premium salaries and rapid advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
