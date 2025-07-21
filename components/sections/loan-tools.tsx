"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Home, Car, User, Building, Calculator } from "lucide-react"
import { motion } from "framer-motion"

export function LoanTools() {
  const [loanAmount, setLoanAmount] = useState([250000])
  const [loanTerm, setLoanTerm] = useState([30])
  const [interestRate, setInterestRate] = useState([3.5])

  const calculateMonthlyPayment = () => {
    const principal = loanAmount[0]
    const monthlyRate = interestRate[0] / 100 / 12
    const numPayments = loanTerm[0] * 12

    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)

    return monthlyPayment.toFixed(2)
  }

  const loanTypes = [
    {
      id: "home",
      name: "Home Loans",
      icon: Home,
      description: "Competitive rates for your dream home",
      rate: "From 3.25% APR",
      features: ["First-time buyer programs", "Jumbo loans available", "Fast pre-approval"],
    },
    {
      id: "auto",
      name: "Auto Loans",
      icon: Car,
      description: "Finance your next vehicle",
      rate: "From 2.99% APR",
      features: ["New and used cars", "Refinancing options", "Quick approval"],
    },
    {
      id: "personal",
      name: "Personal Loans",
      icon: User,
      description: "Flexible financing for life events",
      rate: "From 5.99% APR",
      features: ["No collateral required", "Fixed rates", "Same-day funding"],
    },
    {
      id: "business",
      name: "Business Loans",
      icon: Building,
      description: "Fuel your business growth",
      rate: "Custom rates",
      features: ["SBA loans", "Equipment financing", "Lines of credit"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Loans & Credit Solutions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you're buying a home, car, or growing your business, we have competitive rates and flexible terms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Loan Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="h-5 w-5" />
                  <span>Loan Calculator</span>
                </CardTitle>
                <CardDescription>Calculate your monthly payment and see what you can afford</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Loan Amount: ${loanAmount[0].toLocaleString()}</Label>
                  <Slider
                    value={loanAmount}
                    onValueChange={setLoanAmount}
                    max={1000000}
                    min={10000}
                    step={5000}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Loan Term: {loanTerm[0]} years</Label>
                  <Slider value={loanTerm} onValueChange={setLoanTerm} max={30} min={5} step={1} className="mt-2" />
                </div>

                <div>
                  <Label>Interest Rate: {interestRate[0]}%</Label>
                  <Slider
                    value={interestRate}
                    onValueChange={setInterestRate}
                    max={10}
                    min={1}
                    step={0.1}
                    className="mt-2"
                  />
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 dark:text-gray-300">Monthly Payment</div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      ${calculateMonthlyPayment()}
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Get Pre-Approved
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Loan Types */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {loanTypes.map((loan, index) => (
              <Card key={loan.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg">
                      <loan.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{loan.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{loan.description}</p>
                      <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">{loan.rate}</div>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {loan.features.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                      <Button variant="outline" className="mt-4 bg-transparent">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
