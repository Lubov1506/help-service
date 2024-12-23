"use client"
import React, { useEffect, useState } from "react"
import { get, ref } from "firebase/database"
import { database } from "@/firebaseConfig"
import { Psychologist } from "@/shared/components/shared/ps-card-list"
import { PsCard } from "@/shared/components/shared"

const PsychologistsPage = () => {
  const [psychologists, setPsychologists] = useState<Psychologist[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const psychologistsRef = ref(database)
        const snapshot = await get(psychologistsRef)

        if (snapshot.exists()) {
          const psychologistsData: Psychologist[] = Object.values(
            snapshot.val()
          )
          setPsychologists(psychologistsData)
        } else {
          console.log("No psychologists found.")
        }
      } catch (error) {
        console.error("Error fetching psychologists:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (psychologists.length === 0) {
    return <div>No psychologists found.</div>
  }
  console.log(psychologists[0])

  return (
    <div className="flex flex-col gap-8">
      {psychologists.map((psychologist, index) => (
        <PsCard key={index} psychologist={psychologist} />
      ))}
    </div>
  )
}

export default PsychologistsPage
