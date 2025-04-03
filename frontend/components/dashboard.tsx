"use client"

import { SidebarSeparator } from "@/components/ui/sidebar"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Bell, Calendar, Home, MessageSquare, MoreHorizontal, Plus, Search, Settings, User2 } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Sample class data
const classes = [
  {
    id: 1,
    name: "Introduction to Computer Science",
    teacher: "Dr. Smith",
    color: "bg-blue-500",
    progress: 75,
    upcoming: [
      { title: "Midterm Exam", due: "Tomorrow, 3:00 PM" },
      { title: "Project Proposal", due: "Friday, 11:59 PM" },
    ],
  },
  {
    id: 2,
    name: "Advanced Mathematics",
    teacher: "Prof. Johnson",
    color: "bg-green-500",
    progress: 60,
    upcoming: [{ title: "Problem Set #5", due: "Thursday, 5:00 PM" }],
  },
  {
    id: 3,
    name: "World History",
    teacher: "Ms. Garcia",
    color: "bg-purple-500",
    progress: 90,
    upcoming: [{ title: "Essay Draft", due: "Next Monday, 9:00 AM" }],
  },
  {
    id: 4,
    name: "Biology 101",
    teacher: "Dr. Patel",
    color: "bg-amber-500",
    progress: 45,
    upcoming: [
      { title: "Lab Report", due: "Wednesday, 11:59 PM" },
      { title: "Quiz #3", due: "Friday, 2:00 PM" },
    ],
  },
]

// Sample timeline data
const timeline = [
  { title: "Midterm Exam", class: "Introduction to Computer Science", due: "Tomorrow, 3:00 PM", color: "bg-blue-500" },
  { title: "Problem Set #5", class: "Advanced Mathematics", due: "Thursday, 5:00 PM", color: "bg-green-500" },
  { title: "Lab Report", class: "Biology 101", due: "Wednesday, 11:59 PM", color: "bg-amber-500" },
  {
    title: "Project Proposal",
    class: "Introduction to Computer Science",
    due: "Friday, 11:59 PM",
    color: "bg-blue-500",
  },
  { title: "Essay Draft", class: "World History", due: "Next Monday, 9:00 AM", color: "bg-purple-500" },
  { title: "Quiz #3", class: "Biology 101", due: "Friday, 2:00 PM", color: "bg-amber-500" },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("classes")
  const router = useRouter()
  const { theme } = useTheme()

  // Function to navigate to class page
  const navigateToClass = (classId: number) => {
    router.push(`/class/${classId}`)
  }

  // Function to navigate to settings page
  const navigateToSettings = () => {
    router.push("/settings")
  }

  // Update the SidebarMenu for My Classes to make it functional
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar className="border-r">
          <SidebarHeader className="flex items-center px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
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
                  className="text-primary-foreground"
                >
                  <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
                  <path d="M12 11h4"></path>
                  <path d="M12 16h4"></path>
                  <path d="M8 11h.01"></path>
                  <path d="M8 16h.01"></path>
                </svg>
              </div>
              <span className="font-medium text-lg">Classroom</span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "classes"} onClick={() => setActiveTab("classes")}>
                      <Home />
                      <span>Classes</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "calendar"} onClick={() => setActiveTab("calendar")}>
                      <Calendar />
                      <span>Calendar</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "messages"} onClick={() => setActiveTab("messages")}>
                      <MessageSquare />
                      <span>Messages</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "settings"} onClick={navigateToSettings}>
                      <Settings />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            <SidebarGroup>
              <SidebarGroupLabel>My Classes</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {classes.map((cls) => (
                    <SidebarMenuItem key={cls.id}>
                      <SidebarMenuButton onClick={() => navigateToClass(cls.id)}>
                        <div className={`w-3 h-3 rounded-full ${cls.color}`}></div>
                        <span>{cls.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>US</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">User Name</p>
                  <p className="text-xs text-muted-foreground">user@example.com</p>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 overflow-auto">
          <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background p-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-8" />
              </div>

              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
              </Button>

              <Button variant="outline" size="icon" onClick={navigateToSettings}>
                <Settings className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={navigateToSettings}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <User2 className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <ThemeToggle />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Welcome back, Student</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Join Class
              </Button>
            </div>

            <Tabs defaultValue="classes" className="mb-8">
              <TabsList>
                <TabsTrigger value="classes">My Classes</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="todo">To-Do</TabsTrigger>
              </TabsList>

              <TabsContent value="classes" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {classes.map((cls) => (
                    <Card
                      key={cls.id}
                      className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => navigateToClass(cls.id)}
                    >
                      <div className={`h-2 ${cls.color}`}></div>
                      <CardHeader>
                        <CardTitle>{cls.name}</CardTitle>
                        <CardDescription>{cls.teacher}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {cls.upcoming.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium mb-2">Upcoming</h4>
                            <ul className="space-y-2">
                              {cls.upcoming.map((item, idx) => (
                                <li key={idx} className="text-sm">
                                  <div className="font-medium">{item.title}</div>
                                  <div className="text-muted-foreground">{item.due}</div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            navigateToClass(cls.id)
                          }}
                        >
                          View Class
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Unenroll</DropdownMenuItem>
                            <DropdownMenuItem>Mute Notifications</DropdownMenuItem>
                            <DropdownMenuItem>Change Color</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </CardFooter>
                    </Card>
                  ))}

                  <Card className="border-dashed flex flex-col items-center justify-center p-6">
                    <div className="rounded-full bg-muted p-3 mb-3">
                      <Plus className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-1">Join a Class</h3>
                    <p className="text-sm text-center text-muted-foreground mb-4">Use a class code or link to join</p>
                    <Button>Join Class</Button>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="timeline" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Assignments</CardTitle>
                    <CardDescription>View and manage your upcoming assignments and deadlines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {timeline.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className={`mt-1 h-3 w-3 rounded-full ${item.color}`}></div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{item.title}</h4>
                              <Badge variant="outline">{item.due}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.class}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="todo" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>To-Do List</CardTitle>
                    <CardDescription>Track your assignments and tasks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {timeline.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full border">
                            <div className="h-2.5 w-2.5 rounded-full bg-muted"></div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{item.title}</h4>
                              <span className="text-sm text-muted-foreground">{item.due}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.class}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Smith" />
                        <AvatarFallback>DS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Dr. Smith posted a new announcement</h4>
                          <span className="text-sm text-muted-foreground">2 hours ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Introduction to Computer Science</p>
                        <p className="mt-2 text-sm">
                          Remember to submit your project proposals by Friday. Office hours are available on Thursday
                          from 2-4 PM.
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Prof. Johnson" />
                        <AvatarFallback>PJ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Prof. Johnson graded your assignment</h4>
                          <span className="text-sm text-muted-foreground">Yesterday</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Advanced Mathematics</p>
                        <div className="mt-2 flex items-center gap-2">
                          <Badge>Grade: 92%</Badge>
                          <Button variant="link" size="sm" className="h-auto p-0">
                            View Feedback
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Ms. Garcia" />
                        <AvatarFallback>MG</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Ms. Garcia posted a new assignment</h4>
                          <span className="text-sm text-muted-foreground">2 days ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">World History</p>
                        <div className="mt-2">
                          <h5 className="text-sm font-medium">Essay Draft</h5>
                          <p className="text-sm">Write a 3-page essay on the impact of the Industrial Revolution.</p>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">
                              View Assignment
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
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
                          className="text-primary"
                        >
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                          <path d="M4 22h16"></path>
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Top Performer</h4>
                        <p className="text-sm text-muted-foreground">Scored 90%+ on 3 consecutive assignments</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
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
                          className="text-primary"
                        >
                          <path d="M12 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z"></path>
                          <path d="M18 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z"></path>
                          <path d="M6 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Collaboration Star</h4>
                        <p className="text-sm text-muted-foreground">Participated in 5 group discussions</p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-2">Current Streak</h4>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                          <div
                            key={day}
                            className={`h-8 w-8 rounded-md flex items-center justify-center ${
                              day < 6 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {day}
                          </div>
                        ))}
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">5 day streak! Keep it up!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

