"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { User, CreditCard, Upload, Calendar, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function OnboardingSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Product Selection", icon: CreditCard },
    { number: 3, title: "Document Upload", icon: Upload },
    { number: 4, title: "Schedule Meeting", icon: Calendar },
  ]

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Open Your Account in Minutes</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our streamlined onboarding process makes it easy to get started with Finovia.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.number
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-gray-300 text-gray-300"
                  }`}
                >
                  {currentStep > step.number ? <CheckCircle className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
                </div>
                <span
                  className={`ml-2 text-sm font-medium ${
                    currentStep >= step.number ? "text-blue-600" : "text-gray-500"
                  }`}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
        </div>

        {/* Form Steps */}
        <Card>
          <CardHeader>
            <CardTitle>
              Step {currentStep} of {totalSteps}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Let's start with your basic information"}
              {currentStep === 2 && "Choose the products that fit your needs"}
              {currentStep === 3 && "Upload your identification documents"}
              {currentStep === 4 && "Schedule a meeting with our team"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="123 Main St, City, State 12345" />
                  </div>
                </div>
              )}

              {/* Step 2: Product Selection */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label>Select Account Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose an account type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="checking">Smart Checking</SelectItem>
                        <SelectItem value="savings">High-Yield Savings</SelectItem>
                        <SelectItem value="business">Business Banking</SelectItem>
                        <SelectItem value="student">Student Account</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Additional Services (Optional)</Label>
                    <div className="space-y-3 mt-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="debitCard" />
                        <Label htmlFor="debitCard">Debit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="onlineBanking" />
                        <Label htmlFor="onlineBanking">Online Banking</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="mobileBanking" />
                        <Label htmlFor="mobileBanking">Mobile Banking</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="overdraftProtection" />
                        <Label htmlFor="overdraftProtection">Overdraft Protection</Label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Document Upload */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label>Government-issued ID</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">Upload your driver's license or passport</p>
                      <Button variant="outline" className="mt-2 bg-transparent">
                        Choose File
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label>Proof of Address</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">Upload a utility bill or bank statement</p>
                      <Button variant="outline" className="mt-2 bg-transparent">
                        Choose File
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Schedule Meeting */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <Label>Meeting Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose meeting type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">Video Call</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="branch">Branch Visit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9am">9:00 AM</SelectItem>
                          <SelectItem value="10am">10:00 AM</SelectItem>
                          <SelectItem value="11am">11:00 AM</SelectItem>
                          <SelectItem value="2pm">2:00 PM</SelectItem>
                          <SelectItem value="3pm">3:00 PM</SelectItem>
                          <SelectItem value="4pm">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Input id="notes" placeholder="Any specific questions or requirements?" />
                  </div>
                </div>
              )}
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button onClick={nextStep}>Next Step</Button>
              ) : (
                <Button>Complete Application</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
