"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Bell, Fingerprint, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "256-bit SSL encryption protects all your data and transactions",
    },
    {
      icon: Fingerprint,
      title: "Biometric Login",
      description: "Secure access with fingerprint and face recognition",
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Instant notifications for all account activity",
    },
    {
      icon: Eye,
      title: "Fraud Monitoring",
      description: "24/7 AI-powered fraud detection and prevention",
    },
    {
      icon: Lock,
      title: "Account Protection",
      description: "Multi-factor authentication and account lockdown features",
    },
    {
      icon: Smartphone,
      title: "Secure Mobile App",
      description: "End-to-end encryption for mobile banking",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "I've been banking with Finovia for 5 years. Their security features give me complete peace of mind.",
      years: "5 years",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content: "As someone in tech, I appreciate Finovia's commitment to cutting-edge security technology.",
      years: "3 years",
    },
    {
      name: "Emily Rodriguez",
      role: "Financial Advisor",
      content: "I recommend Finovia to all my clients. Their security standards are unmatched in the industry.",
      years: "7 years",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Your Security is Our Priority</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced security measures and 24/7 monitoring keep your money and data safe.
          </p>
        </motion.div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Why Trust Finovia?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">FDIC</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Insured up to $250,000</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Uptime guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Security monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">SOC 2</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Type II compliant</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                    <Badge variant="secondary">{testimonial.years}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
