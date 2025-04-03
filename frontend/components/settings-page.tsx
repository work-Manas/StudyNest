"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Bell, Globe, Lock, LogOut, Moon, Palette, Save, Shield, Sun, User } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SettingsPage() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("account")

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </header>

      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="account" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="sm:w-64 space-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
                    <AvatarFallback className="text-lg">US</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-lg font-semibold">User Name</h2>
                    <p className="text-sm text-muted-foreground">user@example.com</p>
                  </div>
                </div>

                <TabsList className="flex flex-col h-auto bg-transparent p-0 space-y-1">
                  <TabsTrigger
                    value="account"
                    className="justify-start px-3 py-2 h-9 font-normal data-[state=active]:bg-muted"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Account
                  </TabsTrigger>
                  <TabsTrigger
                    value="appearance"
                    className="justify-start px-3 py-2 h-9 font-normal data-[state=active]:bg-muted"
                  >
                    <Palette className="mr-2 h-4 w-4" />
                    Appearance
                  </TabsTrigger>
                  <TabsTrigger
                    value="notifications"
                    className="justify-start px-3 py-2 h-9 font-normal data-[state=active]:bg-muted"
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger
                    value="privacy"
                    className="justify-start px-3 py-2 h-9 font-normal data-[state=active]:bg-muted"
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Privacy
                  </TabsTrigger>
                  <TabsTrigger
                    value="accessibility"
                    className="justify-start px-3 py-2 h-9 font-normal data-[state=active]:bg-muted"
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    Accessibility
                  </TabsTrigger>

                  <Separator className="my-2" />

                  <Button
                    variant="ghost"
                    className="justify-start px-3 py-2 h-9 font-normal text-destructive hover:text-destructive"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </TabsList>
              </div>

              <div className="flex-1 space-y-6">
                <TabsContent value="account" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>Update your personal information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" defaultValue="User Name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" defaultValue="user@example.com" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Input id="bio" placeholder="Tell us about yourself" />
                      </div>

                      <div className="space-y-2">
                        <Label>Profile Picture</Label>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
                            <AvatarFallback className="text-lg">US</AvatarFallback>
                          </Avatar>
                          <Button variant="outline">Change Avatar</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>Update your password</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Update Password</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="appearance" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Theme</CardTitle>
                      <CardDescription>Customize the appearance of the application</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Color Theme</Label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div
                            className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:border-primary ${theme === "light" ? "border-primary bg-primary/5" : ""}`}
                            onClick={() => setTheme("light")}
                          >
                            <div className="bg-white border rounded-full p-2 mb-2">
                              <Sun className="h-6 w-6 text-amber-500" />
                            </div>
                            <span className="font-medium">Light</span>
                          </div>

                          <div
                            className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:border-primary ${theme === "dark" ? "border-primary bg-primary/5" : ""}`}
                            onClick={() => setTheme("dark")}
                          >
                            <div className="bg-gray-900 border rounded-full p-2 mb-2">
                              <Moon className="h-6 w-6 text-gray-100" />
                            </div>
                            <span className="font-medium">Dark</span>
                          </div>

                          <div
                            className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:border-primary ${theme === "system" ? "border-primary bg-primary/5" : ""}`}
                            onClick={() => setTheme("system")}
                          >
                            <div className="bg-gradient-to-r from-white to-gray-900 border rounded-full p-2 mb-2">
                              <div className="flex">
                                <Sun className="h-6 w-6 text-amber-500" />
                                <Moon className="h-6 w-6 text-gray-100" />
                              </div>
                            </div>
                            <span className="font-medium">System</span>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <Label>Class Colors</Label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                            <span>Blue</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-green-500"></div>
                            <span>Green</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-purple-500"></div>
                            <span>Purple</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-amber-500"></div>
                            <span>Amber</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-red-500"></div>
                            <span>Red</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-pink-500"></div>
                            <span>Pink</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-teal-500"></div>
                            <span>Teal</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-indigo-500"></div>
                            <span>Indigo</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                      <CardDescription>Choose how you want to be notified</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="email-notifications" className="text-base">
                              Email Notifications
                            </Label>
                            <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                          </div>
                          <Switch id="email-notifications" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="browser-notifications" className="text-base">
                              Browser Notifications
                            </Label>
                            <p className="text-sm text-muted-foreground">Receive notifications in your browser</p>
                          </div>
                          <Switch id="browser-notifications" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="mobile-notifications" className="text-base">
                              Mobile Notifications
                            </Label>
                            <p className="text-sm text-muted-foreground">Receive notifications on your mobile device</p>
                          </div>
                          <Switch id="mobile-notifications" defaultChecked />
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-base font-medium">Notification Types</h3>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="assignment-notifications" className="text-base">
                              Assignments
                            </Label>
                            <p className="text-sm text-muted-foreground">New assignments and due dates</p>
                          </div>
                          <Switch id="assignment-notifications" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="announcement-notifications" className="text-base">
                              Announcements
                            </Label>
                            <p className="text-sm text-muted-foreground">Class announcements from teachers</p>
                          </div>
                          <Switch id="announcement-notifications" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="grade-notifications" className="text-base">
                              Grades
                            </Label>
                            <p className="text-sm text-muted-foreground">When assignments are graded</p>
                          </div>
                          <Switch id="grade-notifications" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="comment-notifications" className="text-base">
                              Comments
                            </Label>
                            <p className="text-sm text-muted-foreground">Replies to your comments</p>
                          </div>
                          <Switch id="comment-notifications" defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="privacy" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Privacy Settings</CardTitle>
                      <CardDescription>Control your privacy and data</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="profile-visibility" className="text-base">
                              Profile Visibility
                            </Label>
                            <p className="text-sm text-muted-foreground">Who can see your profile information</p>
                          </div>
                          <Select defaultValue="classmates">
                            <SelectTrigger className="w-40">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="everyone">Everyone</SelectItem>
                              <SelectItem value="classmates">Classmates</SelectItem>
                              <SelectItem value="teachers">Teachers Only</SelectItem>
                              <SelectItem value="none">No One</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="activity-status" className="text-base">
                              Activity Status
                            </Label>
                            <p className="text-sm text-muted-foreground">Show when you're active in classes</p>
                          </div>
                          <Switch id="activity-status" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="data-collection" className="text-base">
                              Data Collection
                            </Label>
                            <p className="text-sm text-muted-foreground">Allow anonymous usage data collection</p>
                          </div>
                          <Switch id="data-collection" defaultChecked />
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h3 className="text-base font-medium">Data Management</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Button variant="outline">
                            <Shield className="mr-2 h-4 w-4" />
                            Download My Data
                          </Button>
                          <Button variant="outline" className="text-destructive hover:text-destructive">
                            <Shield className="mr-2 h-4 w-4" />
                            Delete Account
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="accessibility" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Accessibility</CardTitle>
                      <CardDescription>Customize your experience</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="font-size">Font Size</Label>
                          <Select defaultValue="medium">
                            <SelectTrigger id="font-size">
                              <SelectValue placeholder="Select font size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="small">Small</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="large">Large</SelectItem>
                              <SelectItem value="x-large">Extra Large</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Contrast</Label>
                          <RadioGroup defaultValue="normal">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="normal" id="contrast-normal" />
                              <Label htmlFor="contrast-normal">Normal</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="high" id="contrast-high" />
                              <Label htmlFor="contrast-high">High Contrast</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="reduce-motion" className="text-base">
                              Reduce Motion
                            </Label>
                            <p className="text-sm text-muted-foreground">Minimize animations</p>
                          </div>
                          <Switch id="reduce-motion" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="screen-reader" className="text-base">
                              Screen Reader Support
                            </Label>
                            <p className="text-sm text-muted-foreground">Optimize for screen readers</p>
                          </div>
                          <Switch id="screen-reader" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

