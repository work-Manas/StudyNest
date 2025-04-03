import type { Metadata } from "next"
import Dashboard from "@/components/dashboard"

export const metadata: Metadata = {
  title: "Google Classroom Redesign",
  description: "A modern, intuitive UI for Google Classroom",
}

export default function Home() {
  return <Dashboard />
}

