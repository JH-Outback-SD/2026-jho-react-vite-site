import { useParams, Link } from 'react-router-dom'

const blogArticles: Record<string, {
  title: string
  subtitle?: string
  heroImage: string
  content: React.ReactNode
}> = {
  'written-testimony': {
    title: 'WRITTEN TESTIMONY',
    subtitle: 'HOW TO PREPARE A 20-minute TESTIMONY - GENERAL OUTLINE',
    heroImage: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=1200&h=400&fit=crop',
    content: (
      <>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary">What Is a Christian Testimony?</h2>
          <p className="mt-4 text-gray-600">
            A Christian testimony is your personal story of how God has transformed your life through Jesus Christ. It's a way to
            share how God has been at work in your life and to encourage others. It's not about boasting, but about pointing people to Christ.
          </p>
          <p className="mt-4 text-gray-600 italic">
            "I was blind, but now I see. I was lost, but now I am found."
          </p>
          <p className="mt-4 text-gray-600">
            The goal is not to impress, yours isn't just ABOUT WHAT YOU DID or YOUR STORY—but to show His love, grace, and power at work in a
            real life (yours), and to encourage others that He can do the same for them.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary">Testimony Structure (for 15–20 minutes)</h2>
          <p className="mt-4 text-gray-600">
            You can break your story into four main sections, spending about 4–5 minutes on each:
          </p>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary">1. Before Christ (Your Life Before Knowing God)</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent">□</span>
                  What was your mindset, lifestyle, or identity?
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">□</span>
                  What were you searching for—love, purpose, truth?
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">□</span>
                  Were you trapped in a sin, fear, religion, or confusion?
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">□</span>
                  Share a few real examples, but avoid glorifying the pain
                </li>
              </ul>
              <p className="mt-4 text-sm italic text-accent">
                Theme: I was blind. I was empty.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary">2. The Turning Point (How You Encountered Jesus)</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent">□</span>
                  What circumstances led you to realize you need Him / needed Him?
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">□</span>
                  Who or what helped you understand the truth about Jesus?
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">□</span>
                  How did you come to believe in Him as Lord and personal Savior?
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">□</span>
                  Describe the moment or process of surrendering to Him.
                </li>
              </ul>
              <p className="mt-4 text-sm italic text-accent">
                Theme: Jesus found me. He opened my eyes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary">3. After Receiving Christ (The Change and New Understanding)</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent">□</span>
                  How did knowing the Holy Spirit affect your heart, mind, and behavior?
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">□</span>
                  What did you begin to understand about God? How did grace?
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">□</span>
                  What areas of your life began to change – and how?
                </li>
              </ul>
              <p className="mt-4 text-sm italic text-accent">
                Theme: Now I see. Now I understand.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary">4. Who You Are Now (Ongoing Walk with Jesus)</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent">□</span>
                  How has your identity, purpose, or direction in life changed?
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">□</span>
                  What is Jesus teaching you now?
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">□</span>
                  Share a recent example of His faithfulness or guidance in your life.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">□</span>
                  How do you want to glorify Him going forward?
                </li>
              </ul>
              <p className="mt-4 text-sm italic text-accent">
                Theme: I am found. I live for Him.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-gray-50 p-8">
          <h2 className="text-xl font-bold text-primary">Final Notes</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-accent">□</span>
              <strong>Keep it His story:</strong> Your story is a reflection of His grace and glory, not your performance.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">□</span>
              <strong>Avoid Christian jargon</strong> that non-believers may not understand. Speak plainly and with love.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">□</span>
              <strong>First before sharing</strong> – ask God to use your words to touch hearts.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">□</span>
              <strong>Offer hope:</strong> End with an invitation or encouragement through your story.
            </li>
          </ul>
          <p className="mt-6 text-center text-lg font-semibold italic text-accent">
            Theme: I am found. I live for Him.
          </p>
        </section>
      </>
    ),
  },
}

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? blogArticles[slug] : null

  if (!article) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary">Article Not Found</h1>
          <Link to="/blog" className="mt-4 inline-block text-accent hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#213a86] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-sans text-4xl font-bold text-gray-50 sm:text-5xl">
              // {article.title}
            </h1>
          </div>

          {article.subtitle && (
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="overflow-hidden rounded-lg bg-white/10 p-8 text-center">
                <p className="text-xs uppercase tracking-wider text-gray-200">HOW TO PREPARE A</p>
                <p className="mt-2 text-3xl font-bold text-gray-50">20-minute</p>
                <p className="text-4xl font-bold text-gray-50">TESTIMONY</p>
                <p className="mt-2 text-sm text-gray-200">- GENERAL OUTLINE -</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        {article.content}
      </section>

      {/* Back Link */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-accent hover:underline">
          <svg className="mr-2 size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
      </section>
    </div>
  )
}
