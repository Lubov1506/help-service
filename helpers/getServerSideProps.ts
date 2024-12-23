import { database } from "@/firebaseConfig"
import { ref } from "firebase/database"
import { get } from "http"
import { GetServerSideProps } from "next"
import { useState } from "react"

export const getServerSideProps: GetServerSideProps = async () => {
    const [psychologists, setPsychologists] = useState([]);
    const [loading, setLoading] = useState(true);
  try {
    const psychologistsRef = ref(database)
    const snapshot = await get(psychologistsRef )

    if (snapshot.exists()) {
      const psychologistsData = snapshot.val()
      setPsychologists(psychologistsData)
    } else {
      console.log("No psychologists found.")
    }

  } catch (error) {
    console.error("Error fetching psychologists:", error)
  } finally {
    setLoading(false)
  }
  return {psychologists, loading}
}
