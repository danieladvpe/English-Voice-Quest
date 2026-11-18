import { useState } from 'react'
import { TopBar } from './components/TopBar'
import { PathMap } from './components/PathMap'
import { LessonPlayer } from './components/LessonPlayer'
import { findLesson } from './data/lessons'

type View = { screen: 'path' } | { screen: 'lesson'; lessonId: string }

export default function App() {
  const [view, setView] = useState<View>({ screen: 'path' })

  if (view.screen === 'lesson') {
    const found = findLesson(view.lessonId)
    if (found && found.lesson.exercises.length > 0) {
      return <LessonPlayer key={view.lessonId} lesson={found.lesson} onExit={() => setView({ screen: 'path' })} />
    }
  }

  return (
    <div className="min-h-full bg-white">
      <TopBar />
      <PathMap onStartLesson={(lessonId) => setView({ screen: 'lesson', lessonId })} />
    </div>
  )
}
