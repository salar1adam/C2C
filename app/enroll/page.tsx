import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function EnrollPage() {
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

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h1 className="text-3xl font-bold mb-6">Enroll in Core to Crust: Oil</h1>
              <p className="text-slate-600 mb-8">
                Complete the form below to secure your spot in our comprehensive oil exploration course.
              </p>

              <form className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Professional Background</h2>
                  <div className="space-y-2">
                    <Label htmlFor="company">Current Company/Organization</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input id="job-title" placeholder="Enter your job title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience in Related Fields</Label>
                    <Input id="experience" type="number" placeholder="Enter years of experience" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Course Selection</h2>
                  <div className="space-y-3">
                    <Label>Select Your Preferred Plan</Label>
                    <RadioGroup defaultValue="professional">
                      <div className="flex items-center space-x-2 border p-4 rounded-md">
                        <RadioGroupItem value="self-paced" id="self-paced" />
                        <Label htmlFor="self-paced" className="flex-1 cursor-pointer">
                          <div className="font-medium">Self-Paced</div>
                          <div className="text-sm text-slate-500">$2,499 - Learn at your own pace</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border border-yellow-500 bg-yellow-50 p-4 rounded-md">
                        <RadioGroupItem value="professional" id="professional" />
                        <Label htmlFor="professional" className="flex-1 cursor-pointer">
                          <div className="font-medium">Professional</div>
                          <div className="text-sm text-slate-500">$4,999 - Our most popular option</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-4 rounded-md">
                        <RadioGroupItem value="executive" id="executive" />
                        <Label htmlFor="executive" className="flex-1 cursor-pointer">
                          <div className="font-medium">Executive</div>
                          <div className="text-sm text-slate-500">
                            $7,999 - Premium experience with 1-on-1 mentoring
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Preferred Start Date</Label>
                    <Input id="start-date" type="date" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Additional Information</h2>
                  <div className="space-y-2">
                    <Label htmlFor="goals">What are your learning goals for this course?</Label>
                    <Textarea
                      id="goals"
                      placeholder="Please share your goals and what you hope to achieve..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="referral">How did you hear about us?</Label>
                    <Input id="referral" placeholder="Google, colleague, social media, etc." />
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    Complete Enrollment
                  </Button>
                  <p className="text-sm text-slate-500 mt-4 text-center">
                    By enrolling, you agree to our{" "}
                    <Link href="/terms" className="text-yellow-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-yellow-600 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Enrollment Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Professional Plan</span>
                    <span className="font-bold">$4,999</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">What's Included:</h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Full course access for 1 year</li>
                      <li>• All video lectures and materials</li>
                      <li>• Live weekly Q&A sessions</li>
                      <li>• Graded assignments with feedback</li>
                      <li>• Industry networking events</li>
                      <li>• Job placement assistance</li>
                      <li>• Course certificate</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <div className="bg-yellow-100 p-4 rounded-md text-sm">
                      <p className="font-medium text-yellow-800">Next cohort starts June 1, 2025</p>
                      <p className="text-yellow-700 mt-1">Limited seats available. Secure yours today!</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="bg-green-50 p-4 rounded-md text-sm border border-green-200">
                      <p className="font-medium text-green-800">Our Satisfaction Guarantee</p>
                      <p className="text-green-700 mt-1">
                        If you're not completely satisfied after the first two weeks, we'll refund your full tuition—no
                        questions asked.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-medium mb-2">Need Help?</h3>
                    <p className="text-sm text-slate-600 mb-2">
                      Our enrollment advisors are here to answer your questions.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Email:</span>
                      <a href="mailto:admissions@coretocrust.com" className="text-yellow-600 hover:underline">
                        admissions@coretocrust.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Phone:</span>
                      <a href="tel:+15551234567" className="text-yellow-600 hover:underline">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-4">Graduate Success Stories</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image src="/images/testimonial-john.png" alt="John Davis" fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold">John Davis</h4>
                        <p className="text-sm text-slate-500">Senior Geologist, ConocoPhillips</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 italic">
                      "This course gave me the specialized skills to identify a previously overlooked reservoir in the
                      Permian Basin. That discovery led directly to my promotion and a $38,000 salary increase."
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image src="/images/testimonial-maria.png" alt="Maria Sanchez" fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold">Maria Sanchez</h4>
                        <p className="text-sm text-slate-500">Exploration Manager, Occidental</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 italic">
                      "I enrolled as a mid-career professional looking to update my skills. Within 6 months of
                      graduating, I was leading Occidental's Gulf of Mexico exploration team with a 30% salary
                      increase."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-4">Why Invest in Your Education</h3>
                  <div className="space-y-3">
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
                        className="text-yellow-600 mt-0.5"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <div>
                        <p className="text-sm font-medium">Return on Investment</p>
                        <p className="text-xs text-slate-500">Average salary increase of $35,000 after completion</p>
                      </div>
                    </div>
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
                        className="text-yellow-600 mt-0.5"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <div>
                        <p className="text-sm font-medium">Industry Connections</p>
                        <p className="text-xs text-slate-500">
                          Direct access to hiring managers at 25+ partner companies
                        </p>
                      </div>
                    </div>
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
                        className="text-yellow-600 mt-0.5"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <div>
                        <p className="text-sm font-medium">Career Acceleration</p>
                        <p className="text-xs text-slate-500">85% of graduates report promotion within 18 months</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
