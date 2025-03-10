import { AnimatedNumber } from '@/components/AnimatedNumber'
import { BentoCard } from '@/components/BentoCard'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import RecentArticles from '@/components/RecentArticles'
import { Keyboard } from '@/components/Keyboard'
import { Link } from '@/components/Link'
import { LinkedAvatars } from '@/components/LinkedAvatars'
import { LogoCluster } from '@/components/LogoCluster'
import { LogoTimeline } from '@/components/LogoTimeline'
import { Navbar } from '@/components/Navbar'
import OsloAnalytic from '@/components/OsloAnalytic'
import { Screenshot } from '@/components/Screenshot'
import { Testimonials } from '@/components/Testimonials'
import { Heading, Lead, Subheading } from '@/components/Text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Grønnskalle helps developers optimize their code to minimize climate impact and create more sustainable software.',
}

function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-emerald-800 to-emerald-950 h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/green-background-poster.jpg"
      >
        <source src="/assets/green-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-emerald-950/30 z-10"></div>
      <Container className="relative z-20">
        <Navbar
          banner={
            <Link
              href="/blog/latest-green-coding-practices"
              className="flex items-center gap-1 rounded-full bg-green-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-green-950/30"
            >
              Latest sustainable coding practices
              <ChevronRightIcon className="size-4" />
            </Link>
          }
          whiteLogo={true}
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-mono text-3xl/[0.9] font-medium tracking-tight text-balance text-white sm:text-5xl/[0.8] md:text-8xl/[0.8]">
            500 Climate Error
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-white/90 sm:text-2xl/8">
            Grønnskalle helps developers optimize their code for sustainability and reduce the environmental impact of software.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Start optimizing</Button>
            <Button variant="secondary" href="/resources" className="border-white text-white hover:bg-white/10">
              Best practices
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl text-emerald-950">
          Practical strategies for sustainable development.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Strategies</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl text-emerald-950">
        Optimize every line of code for environmental impact.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Performance"
          title="Efficient algorithms"
          description="Learn how to optimize your algorithms and data structures to minimize computational resources, reducing energy consumption and carbon footprint."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Architecture"
          title="Sustainable cloud practices"
          description="Discover how to design your infrastructure for minimal energy usage, from selecting green hosting providers to implementing efficient scaling strategies."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Tools"
          title="Developer resources"
          description="Access our curated collection of tools and plugins that help measure and reduce the carbon impact of your development workflow."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Metrics"
          title="Measure your impact"
          description="Grønnskalle helps you measure and monitor the environmental impact of your software development projects."
          graphic={
            <div className="h-80 bg-[url(/screenshots/metrics.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-b-4xl lg:col-span-3 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className="lg:col-span-3"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer outreach has never been easier.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our GrønnskalleAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="GrønnskalleAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Sustainable code for a greener future.</Heading>
      <Lead className="mt-6 max-w-3xl">
        We're on a mission to help developers reduce their carbon footprint through
        efficient, optimized, and environmentally conscious coding practices.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            At Grønnskalle, we're dedicated to transforming how developers approach their craft with sustainability in mind.
            Our mission is to provide simple, practical tips and techniques that reduce the environmental impact of software.
            We believe that small optimizations, when widely adopted, can lead to significant energy savings across the digital landscape.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            We're developer-focused — providing actionable insights that are easy to implement in your daily workflow.
            From optimizing database queries to efficient frontend rendering, our resources help you create code
            that not only performs better but also consumes less energy. Join our community of environmentally
            conscious developers who are coding for a more sustainable digital future.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/assets/factory.webp"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/assets/network.webp"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/assets/poster.webp"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/assets/data1.webp"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>The Numbers</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">CO₂ Emissions from ICT</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1.5} end={3.7} decimals={1} />%
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Data Center Energy Use</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={150} end={200} />TWh
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Potential Energy Savings</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={30} end={50} />%
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Annual e-Waste</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={40} end={54} />M tons
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-20">
          <Header />
          <RecentArticles />
        </div>
        <OsloAnalytic />
      </main>
      <Footer showNewsletter={true} />
    </div>
  )
}
