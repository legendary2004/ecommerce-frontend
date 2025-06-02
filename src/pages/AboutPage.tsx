import Page from "../classes/Page"
import { milestones, teamMembers, coreValues, achievements } from "../variables/arrays/about"
import { itemsBgColrs, primaryTextColors, secondaryTextColor } from "../variables/styles/colors"
import { sectionHeader } from "../variables/styles/text"

const AboutPage = () => {
    return (
        <Page>
            <section className="pt-20 pb-32 px-4 text-center">
                    <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${primaryTextColors}`}>InnovaTech Solutions</h1>
                    <p className={`text-xl md:text-2xl max-w-3xl mx-auto opacity-80 ${secondaryTextColor}`}>
                    Transforming ideas into revolutionary solutions that shape the future of technology
                    </p>
                </section>

                {/* Company Story */}
                <section className={`py-20 px-4 ${itemsBgColrs} ${primaryTextColors}`}>
                    <div className="max-w-6xl mx-auto">
                    <h2 className={`${sectionHeader} mb-12`}>Our Journey</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                        <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
                        <p className="text-lg leading-relaxed">
                            Founded in 2018, we began with a simple mission: to make technology accessible and impactful for businesses worldwide. Through dedication and innovation, we've grown from a small startup to a global technology leader.
                        </p>
                        </div>
                        <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="flex gap-4">
                            <div className="text-blue-600 font-bold">{milestone.year}</div>
                            <div>
                                <h4 className="font-semibold">{milestone.title}</h4>
                                <p className={secondaryTextColor}>{milestone.description}</p>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </section>

                {/* Team Members */}
                <section className={`py-12 px-4 ${primaryTextColors}`}>
                    <div className="max-w-6xl mx-auto">
                    <h2 className={`${sectionHeader} py-20 px-4`}>Our Team</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`rounded-lg overflow-hidden transition-transform hover:scale-105 ${
                            itemsBgColrs
                            }`}
                        >
                            <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-64 object-cover"
                            loading="lazy"
                            />
                            <div className="p-6">
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-blue-600 mb-2">{member.role}</p>
                            <p className={secondaryTextColor}>{member.bio}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className={`py-12 px-4 ${itemsBgColrs} ${primaryTextColors}`}>
                    <div className="max-w-6xl mx-auto">
                    <h2 className={`${sectionHeader} mb-12`}>Our Core Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                            <p className={secondaryTextColor}>{value.description}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                </section>

                {/* Achievements */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className={`${sectionHeader} mb-12`}>Our Achievements</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {achievements.map((achievement, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.metric}</div>
                                <p className={`text-lg ${secondaryTextColor}`}>{achievement.label}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </section>
        </Page>
    )
}

export default AboutPage