import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import HomePage from '../pages/HomePage'
import GroupsPage from '../pages/GroupsPage'
import EventsPage from '../pages/EventsPage'
import DonatePage from '../pages/DonatePage'
import BlogPage from '../pages/BlogPage'
import BlogArticlePage from '../pages/BlogArticlePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="groups" element={<GroupsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogArticlePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
