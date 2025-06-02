import Link from "next/link"
import { ChevronLeft, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
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

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p className="text-slate-600 mb-8">
              Have questions about our course? We're here to help. Fill out the form below and our team will get back to
              you shortly.
            </p>

            <form className="space-y-6">
              <div className="space-y-4">
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
                <div className="space-y-2">
                  <Label htmlFor="inquiry-type">Inquiry Type</Label>
                  <Select>
                    <SelectTrigger id="inquiry-type">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="course-info">Course Information</SelectItem>
                      <SelectItem value="enrollment">Enrollment Questions</SelectItem>
                      <SelectItem value="payment">Payment Options</SelectItem>
                      <SelectItem value="corporate">Corporate Training</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-[150px]"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-slate-600">info@coretocrust.com</p>
                    <p className="text-slate-600">admissions@coretocrust.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-slate-600">Main: (964) 750-6416103</p>
                    <p className="text-slate-600">Admissions: (964) 750-6416103</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-slate-600">1234 Exploration Avenue</p>
                    <p className="text-slate-600">Houston, TX 77001</p>
                    <p className="text-slate-600">United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Office Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 5:00 PM CST</p>
                    <p className="text-slate-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">How quickly will I receive a response?</h3>
                  <p className="text-sm text-slate-600">We aim to respond to all inquiries within 24 business hours.</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Can I schedule a call with an enrollment advisor?</h3>
                  <p className="text-sm text-slate-600">
                    Yes! Select "Request a Call" in the inquiry type, and one of our advisors will contact you to
                    schedule a convenient time.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Do you offer corporate training packages?</h3>
                  <p className="text-sm text-slate-600">
                    We offer customized training solutions for companies. Please contact our corporate training
                    department for more information.
                  </p>
                </div>

                <div className="pt-4">
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/faq">View All FAQs</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
