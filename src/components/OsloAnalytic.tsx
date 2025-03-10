import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
    {
        name: 'Data-driven methodology.',
        description:
            'The Sustainable Web Design Model uses a comprehensive approach to estimate digital emissions across data centers (22%), networks (24%), and user devices (54%), based on respected research sources.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Operational & embodied emissions.',
        description: 'This model accounts for both operational energy consumption and the emissions embodied in manufacturing the hardware that powers our digital world.',
        icon: LockClosedIcon,
    },
    {
        name: 'Practical application.',
        description: 'Oslo Analytics implements this model in their tools, helping you analyze and reduce your website\'s environmental impact through data transfer optimization and green hosting options.',
        icon: ServerIcon,
    },
]

export default function OsloAnalytic() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-emerald-600">Digital Sustainability</h2>
                            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                The Sustainable Web Design Model
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                The <a href="https://sustainablewebdesign.org/estimating-digital-emissions/" className="text-emerald-600 hover:underline">Sustainable Web Design Model</a> is an open-source methodology for estimating greenhouse gas emissions from digital products. Oslo Analytics has implemented this model into <a href="https://osloanalytic.com/" className="text-emerald-600 hover:underline">their analytics tool</a>, helping organizations understand and reduce their digital carbon footprint.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-emerald-600" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <Image
                        alt="Product screenshot"
                        src="/assets/osloanalytic.png"
                        width={2432}
                        height={1442}
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    )
}
