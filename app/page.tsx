"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Profil from "../app/assets/profil.jpg"
import Grecia from "../app/assets/greece.jpg"
import Budapesta from "../app/assets/budapest.jpg"
import Bulgaria from "../app/assets/bulgaria.jpg"
import Many from "../app/assets/many.jpg"

export default function HomePage() {
  const [timeTogether, setTimeTogether] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const startDate = new Date("2023-04-04T00:00:00")

    const updateTimer = () => {
      const now = new Date()
      let years = now.getFullYear() - startDate.getFullYear()
      let months = now.getMonth() - startDate.getMonth()
      let days = now.getDate() - startDate.getDate()

      if (months < 0 || (months === 0 && days < 0)) {
        years--
        months += 12
      }

      if (days < 0) {
        const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate()
        days += prevMonthLastDay
        months--
      }

      const hours = now.getHours()
      const minutes = now.getMinutes()
      const seconds = now.getSeconds()

      setTimeTogether({ years, months, days, hours, minutes, seconds })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  const photos = [
    { title: "Budapest 🥰", description: "Our magical trip to Budapest", image:Budapesta},
    { title: "Greece 🏖️", description: "Enjoying the sun and sea together", image:Grecia},
    { title: "Bulglaria", description: "Our 3rd country visited together", image:Bulgaria},
    { title: "And...", description: "many more to come ...", image:Many},
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 p-4">
      <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-red-400">
        <Image 
          src={Profil.src} 
          alt="Ada and Andrei" 
          width={200} 
          height={200} 
          className="object-cover" 
          style={{ objectFit: 'cover', transform: 'scale(1.35)', rotate:'90deg' }} 
        />
      </div>
      <h1 className="text-3xl font-bold text-red-600 mb-2">Ada and Andrei&apos;s Love Story </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Our First Date 🥰</CardTitle>
          </CardHeader>
          <CardContent>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.6003443791747!2d26.0920080767888!3d44.46186567107526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b202086920c463%3A0xd506bb24af3425df!2sNuba%20Cafe!5e0!3m2!1sro!2sro!4v1738671993018!5m2!1sro!2sro"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>We have been together for:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold animate-pulse">
              <p>
                {timeTogether.years} {timeTogether.years === 1 ? "year" : "years"} 🎂
              </p>
              <p>
                {timeTogether.months} {timeTogether.months === 1 ? "month" : "months"} 📅
              </p>
              <p>
                {timeTogether.days} {timeTogether.days === 1 ? "day" : "days"} 🌞
              </p>
              <p>
                {timeTogether.hours} {timeTogether.hours === 1 ? "hour" : "hours"} ⏰
              </p>
              <p>
                {timeTogether.minutes} {timeTogether.minutes === 1 ? "minute" : "minutes"} ⏱️
              </p>
              <p>
                {timeTogether.seconds} {timeTogether.seconds === 1 ? "second" : "seconds"} ⚡
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full max-w-4xl mt-4">
        <CardHeader>
          <CardTitle>Our Memories 📸</CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <Carousel>
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div>
                          <h3 className="text-xl font-semibold">{photo.title}</h3>
                          <p>{photo.description}</p>
                          <Image src={photo.image.src} alt={photo.title} width={300} height={200} className="mt-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </CardContent>
      </Card>

      <Link href="/valentine" className="mt-8 mb-8">
        <Card className="bg-pink-200 hover:bg-pink-300 transition-colors cursor-pointer">
          <CardContent className="flex items-center justify-center p-6">
            <p className="text-xl font-semibold">Surprise! Tap to open 🎁💖</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}

