"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, Download, FileText, MessageSquare, PenLine, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample class data
const classData = {
  id: 1,
  name: "Introduction to Computer Science",
  teacher: "Dr. Smith",
  color: "bg-blue-500",
  description:
    "An introductory course covering the fundamentals of computer science, including programming concepts, algorithms, and data structures.",
  announcements: [
    {
      id: 1,
      author: "Dr. Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Remember to submit your project proposals by Friday. Office hours are available on Thursday from 2-4 PM.",
      date: "2 hours ago",
      comments: 3,
    },
    {
      id: 2,
      author: "Dr. Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The midterm exam will cover chapters 1-5. Review session scheduled for Tuesday at 5 PM in the main lecture hall.",
      date: "2 days ago",
      comments: 8,
    },
  ],
  assignments: [
    {
      id: 1,
      title: "Module 2 Exam",
      description: "Comprehensive exam covering chapters 1-5",
      dueDate: "Tomorrow, 3:00 PM",
      status: "upcoming",
      points: 100,
    },
    {
      id: 2,
      title: "Project Proposal",
      description: "Submit a 2-page proposal for your final project",
      dueDate: "Friday, 11:59 PM",
      status: "upcoming",
      points: 50,
    },
    {
      id: 3,
      title: "Programming Assignment #2",
      description: "Implement a binary search tree in your language of choice",
      dueDate: "Last week",
      status: "completed",
      points: 50,
      grade: 45,
    },
    {
      id: 4,
      title: "Quiz #1",
      description: "Basic programming concepts",
      dueDate: "2 weeks ago",
      status: "completed",
      points: 20,
      grade: 18,
    },
  ],
  people: {
    teachers: [
      {
        name: "Dr. Smith",
        email: "smith@university.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    students: [
      {
        name: "Alex Johnson",
        email: "alex@university.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Jamie Williams",
        email: "jamie@university.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Taylor Rodriguez",
        email: "taylor@university.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Morgan Lee",
        email: "morgan@university.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  },
}

export default function ClassView() {
  const [activeTab, setActiveTab] = useState("stream")

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="/">
              <ArrowLeft className="h-5 w-5" />
            </a>
          </Button>
          <div className={`h-4 w-4 rounded-full ${classData.color}`}></div>
          <h1 className="text-xl font-semibold">{classData.name}</h1>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Calendar
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                Assignment
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                Announcement
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PenLine className="mr-2 h-4 w-4" />
                Quiz
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">{classData.name}</h2>
          <p className="text-muted-foreground">{classData.teacher}</p>
        </div>

        <Tabs defaultValue="stream" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="stream">Stream</TabsTrigger>
            <TabsTrigger value="work">Classwork</TabsTrigger>
            <TabsTrigger value="people">People</TabsTrigger>
            <TabsTrigger value="grades">Grades</TabsTrigger>
          </TabsList>

          <TabsContent value="stream" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Announcements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {classData.announcements.map((announcement) => (
                      <div key={announcement.id} className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={announcement.avatar} alt={announcement.author} />
                            <AvatarFallback>{announcement.author.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{announcement.author}</h4>
                              <span className="text-sm text-muted-foreground">{announcement.date}</span>
                            </div>
                            <p className="mt-2">{announcement.content}</p>
                            <div className="mt-4 flex items-center gap-4">
                              <Button variant="ghost" size="sm">
                                <MessageSquare className="mr-2 h-4 w-4" />
                                {announcement.comments} Comments
                              </Button>
                            </div>
                          </div>
                        </div>
                        {announcement.id !== classData.announcements.length && <Separator />}
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Class Comment
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {classData.assignments
                        .filter((assignment) => assignment.status === "upcoming")
                        .map((assignment) => (
                          <div key={assignment.id} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{assignment.title}</h4>
                              <Badge variant="outline">{assignment.points} pts</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Due: {assignment.dueDate}</p>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium">Description</h4>
                        <p className="text-sm text-muted-foreground">{classData.description}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Instructor</h4>
                        <p className="text-sm text-muted-foreground">{classData.teacher}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Materials</h4>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          <Download className="mr-2 h-3 w-3" />
                          Course Syllabus
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="work" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Assignments</CardTitle>
                  <CardDescription>View and manage your assignments for this class</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium">Upcoming</h3>
                    <div className="space-y-4">
                      {classData.assignments
                        .filter((assignment) => assignment.status === "upcoming")
                        .map((assignment) => (
                          <div key={assignment.id} className="flex items-start justify-between p-4 border rounded-lg">
                            <div className="space-y-1">
                              <h4 className="font-medium">{assignment.title}</h4>
                              <p className="text-sm text-muted-foreground">{assignment.description}</p>
                              <p className="text-sm">Due: {assignment.dueDate}</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <Badge variant="outline">{assignment.points} pts</Badge>
                              <Button size="sm">View</Button>
                            </div>
                          </div>
                        ))}
                    </div>

                    <Separator />

                    <h3 className="text-lg font-medium">Completed</h3>
                    <div className="space-y-4">
                      {classData.assignments
                        .filter((assignment) => assignment.status === "completed")
                        .map((assignment) => (
                          <div key={assignment.id} className="flex items-start justify-between p-4 border rounded-lg">
                            <div className="space-y-1">
                              <h4 className="font-medium">{assignment.title}</h4>
                              <p className="text-sm text-muted-foreground">{assignment.description}</p>
                              <p className="text-sm">Submitted: {assignment.dueDate}</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                {assignment.grade}/{assignment.points} pts
                              </Badge>
                              <Button size="sm" variant="outline">
                                View Feedback
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="people" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Teachers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {classData.people.teachers.map((teacher, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={teacher.avatar} alt={teacher.name} />
                            <AvatarFallback>{teacher.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{teacher.name}</h4>
                            <p className="text-sm text-muted-foreground">{teacher.email}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Students</CardTitle>
                  <Badge>{classData.people.students.length}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {classData.people.students.map((student, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={student.avatar} alt={student.name} />
                            <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{student.name}</h4>
                            <p className="text-sm text-muted-foreground">{student.email}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="grades" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Grade Summary</CardTitle>
                <CardDescription>View your grades and overall performance in this class</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                    <div>
                      <h3 className="text-lg font-medium">Overall Grade</h3>
                      <p className="text-sm text-muted-foreground">Based on completed assignments</p>
                    </div>
                    <div className="text-center">
                      <span className="text-3xl font-bold">88%</span>
                      <p className="text-sm text-muted-foreground">B+</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Assignment Grades</h3>
                    <div className="space-y-4">
                      {classData.assignments
                        .filter((assignment) => assignment.status === "completed")
                        .map((assignment) => (
                          <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h4 className="font-medium">{assignment.title}</h4>
                              <p className="text-sm text-muted-foreground">{assignment.dueDate}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-medium">
                                {assignment.grade}/{assignment.points}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {Math.round((assignment.grade / assignment.points) * 100)}%
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Upcoming Assignments</h3>
                    <div className="space-y-4">
                      {classData.assignments
                        .filter((assignment) => assignment.status === "upcoming")
                        .map((assignment) => (
                          <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h4 className="font-medium">{assignment.title}</h4>
                              <p className="text-sm text-muted-foreground">Due: {assignment.dueDate}</p>
                            </div>
                            <Badge variant="outline">{assignment.points} pts</Badge>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

