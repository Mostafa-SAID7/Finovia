"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wallet, PiggyBank, Building2, GraduationCap, TrendingUp, Check } from "lucide-react"
import { motion } from "framer-motion"

export function AccountOfferings() {
  const accounts = [
    {
      id: "checking",
      name: "Smart Checking",
      icon: Wallet,
      description: "Everyday banking made simple",
      features: ["No monthly fees", "Free ATM access", "Mobile check deposit", "Overdraft protection"],
      rate: "No fees",
      color: "blue",
    },
    {
      id: "savings",
      name: "High-Yield Savings",
      icon: PiggyBank,
      description: "Grow your money with competitive rates",
      features: ["4.5% APY", "No minimum balance", "Automatic savings", "FDIC insured"],
      rate: "4.5% APY",
      color: "green",
    },
    {
      id: "business",
      name: "Business Banking",
      icon: Building2,
      description: "Banking solutions for your business",
      features: ["Business checking", "Merchant services", "Business loans", "Cash management"],
      rate: "Custom rates",
      color: "purple",
    },
    {
      id: "student",
      name: "Student Account",
      icon: GraduationCap,
      description: "Banking designed for students",
      features: ["No monthly fees", "Student discounts", "Financial education", "Mobile banking"],
      rate: "Student perks",
      color: "orange",
    },
    {
      id: "investment",
      name: "Investment Account",
      icon: TrendingUp,
      description: "Invest in your future",
      features: ["Commission-free trades", "Robo-advisor", "Portfolio management", "Tax optimization"],
      rate: "Low fees",
      color: "teal",
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Choose Your Perfect Account</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From everyday checking to high-yield savings, we have the right account for every financial goal.
          </p>
        </motion.div>

        <Tabs defaultValue="checking" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            {accounts.map((account) => (
              <TabsTrigger key={account.id} value={account.id} className="flex items-center space-x-2">
                <account.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{account.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {accounts.map((account) => (
            <TabsContent key={account.id} value={account.id}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="max-w-4xl mx-auto">
                  <CardHeader className="text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${account.color}-100 dark:bg-${account.color}-900/20 mb-4 mx-auto`}
                    >
                      <account.icon className={`h-8 w-8 text-${account.color}-600 dark:text-${account.color}-400`} />
                    </div>
                    <CardTitle className="text-3xl">{account.name}</CardTitle>
                    <CardDescription className="text-lg">{account.description}</CardDescription>
                    <Badge variant="secondary" className="w-fit mx-auto mt-2">
                      {account.rate}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4">Key Features</h4>
                        <ul className="space-y-3">
                          {account.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <Check className="h-4 w-4 text-green-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col justify-center space-y-4">
                        <Button size="lg" className="w-full">
                          Open {account.name}
                        </Button>
                        <Button variant="outline" size="lg" className="w-full bg-transparent">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline">
            Compare All Plans
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
