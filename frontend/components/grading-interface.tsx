"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Download,
  FileText,
  MessageSquare,
  Mic,
  PenLine,
  Plus,
  Save,
  Send,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"

// Sample submission data
const submission = {
  id: 1,
  student: {
    name: "Alex Johnson",
    email: "alex@university.edu",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  assignment: {
    title: "Project Proposal",
    description: "Submit a 2-page proposal for your final project",
    dueDate: "Friday, 11:59 PM",
    points: 50,
  },
  submittedAt: "Thursday, 10:23 AM",
  status: "submitted",
  attachments: [
    { name: "project_proposal.pdf", size: "1.2 MB", type: "pdf" },
    { name: "references.docx", size: "450 KB", type: "docx" },
  ],
  content:
    "This project aims to develop a machine learning algorithm that can predict student performance based on various factors including attendance, participation, and previous grades. The algorithm will use a combination of supervised learning techniques...",
}

// Sample rubric data
const rubric = [
  {
    criterion: "Content Quality",
    description: "Depth and accuracy of content",
    points: 25,
    levels: [
      { label: "Excellent", range: "20-25", description: "Comprehensive, well-researched content" },
      { label: "Satisfactory", range: "15-19", description: "Adequate content with minor gaps" },
      { label: "Needs Improvement", range: "0-14", description: "Incomplete or inaccurate content" },
    ],
    score: 22,
  },
  {
    criterion: "Organization & Structure",
    description: "Logical flow and organization",
    points: 15,
    levels: [
      { label: "Excellent", range: "12-15", description: "Well-organized with clear structure" },
      { label: "Satisfactory", range: "8-11", description: "Generally organized with minor issues" },
      { label: "Needs Improvement", range: "0-7", description: "Poorly organized, difficult to follow" },
    ],
    score: 13,
  },
  {
    criterion: "Writing Quality",
    description: "Grammar, spelling, and clarity",
    points: 10,
    levels: [
      { label: "Excellent", range: "8-10", description: "Clear, error-free writing" },
      { label: "Satisfactory", range: "5-7", description: "Generally clear with minor errors" },
      { label: "Needs Improvement", range: "0-4", description: "Numerous errors affecting clarity" },
    ],
    score: 8,
  },
]

export default function GradingInterface() {
  const [activeTab, setActiveTab] = useState("submission")
  const [currentStudent, setCurrentStudent] = useState(1)
  const totalStudents = 15

  const nextStudent = () => {
    if (currentStudent < totalStudents) {
      setCurrentStudent(currentStudent + 1)
    }
  }

  const prevStudent = () => {
    if (currentStudent > 1) {
      setCurrentStudent(currentStudent - 1)
    }
  }

  const totalScore = rubric.reduce((sum, item) => sum + item.score, 0)
  const totalPossible = rubric.reduce((sum, item) => sum + item.points, 0)
  const percentage = Math.round((totalScore / totalPossible) * 100)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="/">
              <ArrowLeft className="h-5 w-5" />
            </a>
          </Button>
          <h1 className="text-xl font-semibold">{submission.assignment.title}</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={prevStudent} disabled={currentStudent === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <span className="text-sm">
              {currentStudent} of {totalStudents}
            </span>
            <Button variant="outline" size="sm" onClick={nextStudent} disabled={currentStudent === totalStudents}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Grade
          </Button>
        </div>
      </header>

      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Student Submission</CardTitle>
                    <CardDescription>Submitted {submission.submittedAt}</CardDescription>
                  </div>
                  <Avatar>
                    <AvatarImage src={submission.student.avatar} alt={submission.student.name} />
                    <AvatarFallback>{submission.student.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium">Student</h3>
                    <p>{submission.student.name}</p>
                    <p className="text-sm text-muted-foreground">{submission.student.email}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium">Attachments</h3>
                    <div className="mt-2 space-y-2">
                      {submission.attachments.map((file, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>{file.name}</span>
                            <span className="text-xs text-muted-foreground">({file.size})</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium">Submission</h3>
                    <div className="mt-2 p-4 border rounded-md bg-muted/50">
                      <p className="whitespace-pre-line">{submission.content}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Annotation Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <PenLine className="mr-2 h-4 w-4" />
                    Draw
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Comment
                  </Button>
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Highlight Good
                  </Button>
                  <Button variant="outline" size="sm">
                    <ThumbsDown className="mr-2 h-4 w-4" />
                    Highlight Issue
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Grading</CardTitle>
                <CardDescription>Evaluate the submission using the rubric</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {rubric.map((item, idx) => (
                    <Collapsible key={idx}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{item.criterion}</h3>
                          <Badge variant="outline">
                            {item.score}/{item.points}
                          </Badge>
                        </div>
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pt-4 space-y-4">
                        <p className="text-sm text-muted-foreground">{item.description}</p>

                        <div className="space-y-2">
                          {item.levels.map((level, levelIdx) => (
                            <div
                              key={levelIdx}
                              className={`p-2 rounded-md ${
                                (levelIdx === 0 && item.score >= 20) ||
                                (levelIdx === 1 && item.score >= 15 && item.score < 20) ||
                                (levelIdx === 2 && item.score < 15)
                                  ? "bg-muted"
                                  : ""
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="font-medium">{level.label}</div>
                                <div className="text-sm text-muted-foreground">{level.range} pts</div>
                              </div>
                              <p className="text-sm">{level.description}</p>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label>Score: {item.score}</Label>
                            <span className="text-sm text-muted-foreground">Max: {item.points}</span>
                          </div>
                          <Slider defaultValue={[item.score]} max={item.points} step={1} className="w-full" />
                        </div>
                      </CollapsibleContent>
                      {idx < rubric.length - 1 && <Separator className="my-4" />}
                    </Collapsible>
                  ))}

                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Total Score</h3>
                      <div className="text-xl font-bold">
                        {totalScore}/{totalPossible}
                      </div>
                    </div>
                    <Progress value={percentage} className="h-2" />
                    <div className="mt-2 text-right text-sm text-muted-foreground">{percentage}%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea placeholder="Provide detailed feedback to the student..." className="min-h-32" />

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Mic className="mr-2 h-4 w-4" />
                      Record Voice Feedback
                    </Button>
                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Template
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Save Draft</Button>
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Send Feedback
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

