"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, PiggyBank, Wallet, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export function DashboardPreview() {
  const accounts = [
    { name: "Checking", balance: 5420.5, change: 2.5, type: "up" },
    { name: "Savings", balance: 12750.0, change: 1.2, type: "up" },
    { name: "Investment", balance: 8930.25, change: -0.8, type: "down" },
  ]

  const transactions = [
    { name: "Salary Deposit", amount: 3500.0, date: "Today", type: "credit" },
    { name: "Grocery Store", amount: -85.5, date: "Yesterday", type: "debit" },
    { name: "Electric Bill", amount: -120.0, date: "2 days ago", type: "debit" },
    { name: "Investment Return", amount: 250.0, date: "3 days ago", type: "credit" },
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Your Financial Dashboard</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get a complete view of your finances with our intuitive dashboard. Track spending, monitor investments, and
            achieve your goals.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 mb-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold">Welcome back, Sarah!</h3>
                <p className="text-gray-600 dark:text-gray-300">Here's your financial overview</p>
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
              >
                All systems operational
              </Badge>
            </div>

            {/* Account Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {accounts.map((account, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{account.name}</CardTitle>
                    {account.name === "Checking" && <Wallet className="h-4 w-4 text-blue-600" />}
                    {account.name === "Savings" && <PiggyBank className="h-4 w-4 text-green-600" />}
                    {account.name === "Investment" && <TrendingUp className="h-4 w-4 text-purple-600" />}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${account.balance.toLocaleString()}</div>
                    <div
                      className={`flex items-center text-sm ${account.type === "up" ? "text-green-600" : "text-red-600"}`}
                    >
                      {account.type === "up" ? (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      )}
                      {account.change}% from last month
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Transactions */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions.map((transaction, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-2 h-2 rounded-full ${transaction.type === "credit" ? "bg-green-500" : "bg-red-500"}`}
                          ></div>
                          <div>
                            <div className="font-medium">{transaction.name}</div>
                            <div className="text-sm text-gray-500">{transaction.date}</div>
                          </div>
                        </div>
                        <div
                          className={`font-semibold ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}
                        >
                          {transaction.type === "credit" ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-between">
                    Transfer Money
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between bg-transparent">
                    Pay Bills
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between bg-transparent">
                    Deposit Check
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between bg-transparent">
                    Investment Portfolio
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button size="lg">Experience the Dashboard</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
