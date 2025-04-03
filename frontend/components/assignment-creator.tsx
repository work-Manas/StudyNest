"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, Check, Clock, Link, Plus, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function AssignmentCreator() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

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
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={prevStep} disabled={currentStep === 1}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Create Assignment</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-2 rounded-full ${
                  idx + 1 === currentStep ? "bg-primary" : idx + 1 < currentStep ? "bg-primary/50" : "bg-muted"
                }`}
              />
            ))}
          </div>

          <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
            Back
          </Button>

          {currentStep < totalSteps ? <Button onClick={nextStep}>Next</Button> : <Button>Create Assignment</Button>}
        </div>
      </header>

      <main className="flex-1 p-6">
        <div className="max-w-3xl mx-auto">
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Assignment Details</CardTitle>
                <CardDescription>Provide the basic information for your assignment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter assignment title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Instructions</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide detailed instructions for the assignment"
                    className="min-h-32"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="points">Points</Label>
                    <Input id="points" type="number" placeholder="100" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="homework">Homework</SelectItem>
                        <SelectItem value="quiz">Quiz</SelectItem>
                        <SelectItem value="project">Project</SelectItem>
                        <SelectItem value="exam">Exam</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Assignment Type</Label>
                  <RadioGroup defaultValue="individual" className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual">Individual Assignment</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="group" id="group" />
                      <Label htmlFor="group">Group Assignment</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Schedule & Availability</CardTitle>
                <CardDescription>Set due dates and availability options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Due Date</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <Input type="date" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <Input type="time" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="schedule-publish">Schedule Publishing</Label>
                    <Switch id="schedule-publish" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6 mt-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <Input type="date" disabled />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <Input type="time" disabled />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="late-submissions">Allow Late Submissions</Label>
                      <p className="text-sm text-muted-foreground">Students can submit after the due date</p>
                    </div>
                    <Switch id="late-submissions" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="resubmissions">Allow Resubmissions</Label>
                      <p className="text-sm text-muted-foreground">Students can resubmit their work</p>
                    </div>
                    <Switch id="resubmissions" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="show-points">Show Points</Label>
                      <p className="text-sm text-muted-foreground">Display point values to students</p>
                    </div>
                    <Switch id="show-points" defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Materials & Rubric</CardTitle>
                <CardDescription>Add materials and create a grading rubric</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Assignment Materials</Label>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-dashed">
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <div className="rounded-full bg-muted p-3 mb-3">
                          <Upload className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-medium mb-1">Upload Files</h3>
                        <p className="text-sm text-center text-muted-foreground mb-4">
                          Drag and drop files or click to browse
                        </p>
                        <Button variant="outline">Browse Files</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-dashed">
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <div className="rounded-full bg-muted p-3 mb-3">
                          <Link className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-medium mb-1">Add Links</h3>
                        <p className="text-sm text-center text-muted-foreground mb-4">
                          Add links to external resources
                        </p>
                        <Button variant="outline">Add Link</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Grading Rubric</Label>
                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Criterion
                    </Button>
                  </div>

                  <Card>
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">Content Quality</CardTitle>
                        <div className="text-sm font-medium">25 points</div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <p className="text-sm">Excellent: Comprehensive, well-researched content (20-25 pts)</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-amber-500" />
                          <p className="text-sm">Satisfactory: Adequate content with minor gaps (15-19 pts)</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-red-500" />
                          <p className="text-sm">Needs Improvement: Incomplete or inaccurate content (0-14 pts)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">Organization & Structure</CardTitle>
                        <div className="text-sm font-medium">15 points</div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <p className="text-sm">Excellent: Well-organized with clear structure (12-15 pts)</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-amber-500" />
                          <p className="text-sm">Satisfactory: Generally organized with minor issues (8-11 pts)</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-red-500" />
                          <p className="text-sm">Needs Improvement: Poorly organized, difficult to follow (0-7 pts)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <h3 className="font-medium">Total Points</h3>
                    <p className="text-sm text-muted-foreground">Sum of all rubric criteria</p>
                  </div>
                  <div className="text-xl font-bold">40 / 100</div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}

