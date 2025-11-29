import React from 'react';
import Page from './Page';
import SectionDivider from './SectionDivider';
import Article from './Article';
import TopTenList, { ListItem } from './TopTenList';

export default function Magazine() {
    return (
        <div className="bg-stone-200 min-h-screen py-12 font-sans">

            {/* 1. COVER PAGE */}
            <Page id="cover" className="justify-center items-center text-center bg-white relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-stone-800"></div>
                <div className="w-full px-8 mt-20">
                    <p className="text-stone-500 tracking-[0.3em] text-sm font-bold mb-4 uppercase">Digital Monthly • Issue 2025</p>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold text-stone-900 mb-6 leading-tight tracking-tight">
                        Tech in<br />Daily Life
                    </h1>
                    <div className="w-24 h-1 bg-stone-900 mx-auto my-8"></div>
                    <h2 className="text-2xl md:text-3xl font-light text-stone-600 mb-12 italic font-serif">
                        How Technology Shapes the Modern World
                    </h2>
                </div>

                <div className="w-full max-w-2xl h-96 bg-stone-100 mx-auto rounded-lg shadow-inner flex items-center justify-center mb-12">
                    <span className="text-stone-400 font-serif italic text-xl">Cover Image Placeholder</span>
                </div>

                <div className="mt-auto mb-12 w-full border-t border-stone-100 pt-8">
                    <div className="flex justify-between max-w-md mx-auto text-stone-400 text-xs font-mono uppercase tracking-widest">
                        <span>November 2025</span>
                        <span>Vol. 12</span>
                        <span>$9.99</span>
                    </div>
                </div>
            </Page>

            {/* 2. TABLE OF CONTENTS */}
            <Page id="toc" className="p-12 md:p-20 bg-stone-50">
                <h2 className="text-4xl font-serif font-bold mb-16 text-center tracking-wide">In This Issue</h2>
                <div className="space-y-6 max-w-2xl mx-auto">
                    <TocItem page="03" title="How Smart Homes Are Transforming Daily Life" />
                    <TocItem page="07" title="The Rise of Voice Assistants" />
                    <TocItem page="12" title="How AI Helps You Every Day" />
                    <TocItem page="18" title="Google Nest Hub Feature" />
                    <TocItem page="24" title="Top 10 Smart Home Gadgets" />
                    <TocItem page="28" title="Top 10 Apps Students Can’t Live Without" />
                    <TocItem page="32" title="Top 10 AI Tools" />
                    <TocItem page="36" title="A Day in a Fully Automated Home" />
                    <TocItem page="40" title="How Technology Quietly Shapes Our Routines" />
                    <TocItem page="44" title="The Future of Everyday Tech" />
                </div>
            </Page>

            {/* 3. SECTION DIVIDER: Feature Articles */}
            <SectionDivider title="Feature Articles" subtitle="In-Depth Analysis & Stories" />

            {/* 4. FEATURE ARTICLE 1 */}
            <Page>
                <Article
                    title="How Smart Homes Are Transforming Daily Life"
                    author="Sarah Jenkins"
                    body={
                        <>
                            <p className="mb-4">
                                Imagine waking up to the smell of freshly brewed coffee, your blinds gently rising to let in the morning sun, and your favorite news podcast playing softly in the background—all without you lifting a finger. This isn't a scene from a sci-fi movie; it's the reality of modern smart homes in 2025.
                            </p>
                            <p className="mb-4">
                                The integration of IoT (Internet of Things) devices has moved beyond simple novelty. Today, our homes are ecosystems of interconnected devices that communicate to optimize our comfort, security, and energy efficiency. From smart thermostats that learn our temperature preferences to refrigerators that suggest recipes based on their contents, technology is becoming an invisible but indispensable butler.
                            </p>
                            <p className="mb-4">
                                "The goal of the smart home isn't just automation," says Dr. Elena Rostova, a leading tech ethicist. "It's about removing friction from our daily lives so we can focus on what truly matters—connection, creativity, and rest."
                            </p>
                            <p>
                                As we look to the future, the trend is shifting towards "ambient computing," where technology recedes into the background, responding to our presence and needs intuitively rather than requiring explicit commands. The smart home of tomorrow won't just be smart; it will be empathetic.
                            </p>
                        </>
                    }
                />
            </Page>

            {/* 5. FEATURE ARTICLE 2 */}
            <Page>
                <Article
                    title="The Rise of Voice Assistants: Your New Digital Companion"
                    author="David Chen"
                    body={
                        <>
                            <p className="mb-4">
                                "Hey Google, what's on my calendar today?" A simple question that triggers a complex cascade of data retrieval and natural language processing. Voice assistants have evolved from clunky, error-prone novelties into sophisticated AI companions that manage our schedules, control our homes, and even keep us company.
                            </p>
                            <p className="mb-4">
                                In 2025, voice technology has reached a level of conversational fluency that is almost indistinguishable from human interaction. These assistants can understand context, nuance, and even emotion. They are no longer just tools; they are active participants in our daily routines.
                            </p>
                            <p className="mb-4">
                                The implications for accessibility are profound. For the elderly or those with mobility impairments, voice assistants provide a lifeline of independence, allowing them to control their environment and stay connected with loved ones simply by speaking.
                            </p>
                            <p>
                                However, this convenience comes with questions about privacy and data security. As we invite these always-listening devices into our most private spaces, the balance between utility and surveillance remains a critical conversation for the tech industry and society at large.
                            </p>
                        </>
                    }
                />
            </Page>

            {/* 6. FEATURE ARTICLE 3 */}
            <Page>
                <Article
                    title="How AI Helps You Every Day"
                    author="Maya Patel"
                    body={
                        <>
                            <p className="mb-4">
                                Artificial Intelligence is often depicted as a futuristic, sometimes menacing force. But in reality, AI is already woven into the fabric of our daily lives, often in ways we don't even notice. It's the spam filter that keeps your inbox clean, the recommendation engine that finds your next favorite song, and the navigation app that routes you around traffic.
                            </p>
                            <p className="mb-4">
                                In the workplace, AI tools are augmenting human capabilities, automating repetitive tasks, and providing data-driven insights that lead to better decision-making. Writers use AI to brainstorm ideas, designers use it to generate prototypes, and doctors use it to diagnose diseases with greater accuracy.
                            </p>
                            <p className="mb-4">
                                "AI is the new electricity," states tech visionary Andrew Ng. Just as electricity transformed every industry a century ago, AI is now reshaping how we live, work, and play. It is democratizing access to expertise and personalized services that were once the domain of the wealthy.
                            </p>
                            <p>
                                The challenge now is to ensure that these benefits are distributed equitably. As AI becomes more powerful, we must prioritize ethical development and inclusive design to ensure that technology serves all of humanity, not just a select few.
                            </p>
                        </>
                    }
                />
            </Page>

            {/* 7. USER ARTICLE (Google Nest Hub Feature) */}
            <Page>
                <Article
                    title="The Google Nest Hub in Daily Life"
                    author="Guest Contributor"
                    body={
                        <>
                            <p className="mb-4">
                                The Google Nest Hub has become the central nervous system of the modern smart home. With its vibrant display and powerful speaker, it serves as a command center for entertainment, organization, and control.
                            </p>
                            <p className="mb-4">
                                One of its most beloved features is the "Photo Frame" mode, which turns the device into a dynamic digital album, displaying your best memories from Google Photos. It's a simple touch that adds warmth and personalization to technology.
                            </p>
                            <p className="mb-4">
                                Beyond aesthetics, the Nest Hub integrates seamlessly with thousands of smart devices. You can view your front door camera, adjust the lights, and lock the doors—all from one dashboard. Its "Sleep Sensing" technology even helps you track your sleep patterns without the need for wearable devices.
                            </p>
                            <p>
                                For families, it acts as a communal organizer. Shared calendars, reminders, and sticky notes keep everyone on the same page. In a world of individual screens, the Nest Hub brings the household together around a shared digital hearth.
                            </p>
                        </>
                    }
                />
            </Page>

            {/* 8. SECTION DIVIDER: Top 10 Lists */}
            <SectionDivider title="Top 10 Lists" subtitle="Curated Picks for 2025" />

            {/* 9. TOP 10 LISTS */}
            <Page>
                <TopTenList
                    title="Top 10 Smart Home Gadgets of 2025"
                    items={[
                        { rank: 1, title: "Google Nest Hub Max 2", description: "The ultimate smart display." },
                        { rank: 2, title: "Philips Hue Play Gradient", description: "Immersive lighting for TV." },
                        { rank: 3, title: "Ecobee SmartThermostat", description: "Energy saving with voice control." },
                        { rank: 4, title: "August Wi-Fi Smart Lock", description: "Secure and keyless entry." },
                        { rank: 5, title: "Ring Video Doorbell Pro 2", description: "Advanced motion detection." },
                        { rank: 6, title: "Sonos Arc Soundbar", description: "Cinema-quality sound." },
                        { rank: 7, title: "iRobot Roomba j7+", description: "Smart obstacle avoidance." },
                        { rank: 8, title: "Nanoleaf Shapes", description: "Modular creative lighting." },
                        { rank: 9, title: "Arlo Pro 4 Spotlight Camera", description: "Wire-free security." },
                        { rank: 10, title: "Wemo WiFi Smart Plug", description: "Control any outlet." },
                    ]}
                />
            </Page>

            <Page>
                <TopTenList
                    title="Top 10 Apps Students Can’t Live Without"
                    items={[
                        { rank: 1, title: "Notion", description: "All-in-one workspace." },
                        { rank: 2, title: "Quizlet", description: "Flashcards and study tools." },
                        { rank: 3, title: "Google Drive", description: "Cloud storage and collab." },
                        { rank: 4, title: "Forest", description: "Stay focused app." },
                        { rank: 5, title: "Grammarly", description: "Writing assistant." },
                        { rank: 6, title: "Canva", description: "Easy graphic design." },
                        { rank: 7, title: "Slack", description: "Team communication." },
                        { rank: 8, title: "Zoom", description: "Video conferencing." },
                        { rank: 9, title: "WolframAlpha", description: "Computational intelligence." },
                        { rank: 10, title: "Todoist", description: "Task management." },
                    ]}
                />
            </Page>

            <Page>
                <TopTenList
                    title="Top 10 AI Tools Changing Everyday Life"
                    items={[
                        { rank: 1, title: "ChatGPT", description: "Conversational AI assistant." },
                        { rank: 2, title: "Midjourney", description: "AI art generation." },
                        { rank: 3, title: "GitHub Copilot", description: "AI pair programmer." },
                        { rank: 4, title: "Descript", description: "Audio/Video editing." },
                        { rank: 5, title: "Jasper", description: "Marketing copywriter." },
                        { rank: 6, title: "Otter.ai", description: "Meeting transcription." },
                        { rank: 7, title: "Runway", description: "Video synthesis." },
                        { rank: 8, title: "Lensa", description: "Photo editing." },
                        { rank: 9, title: "Synthesia", description: "AI video avatars." },
                        { rank: 10, title: "Soundraw", description: "AI music generation." },
                    ]}
                />
            </Page>

            {/* 10. CHOICE PIECES */}
            <SectionDivider title="Choice Pieces" subtitle="Perspectives on the Future" />

            <Page>
                <Article
                    title="A Day in a Fully Automated Home"
                    body={
                        <>
                            <p className="mb-4">
                                6:00 AM: The bed gently vibrates to wake you up during your lightest sleep cycle. The blinds open slowly.
                            </p>
                            <p className="mb-4">
                                7:00 AM: Breakfast is ready. The smart kitchen has prepared your coffee and toast exactly how you like it.
                            </p>
                            <p className="mb-4">
                                8:00 AM: You leave for work. The house locks itself, arms the security system, and lowers the thermostat to save energy.
                            </p>
                            <p className="mb-4">
                                5:00 PM: You return. The house recognizes your car, opens the garage, and adjusts the lighting to a relaxing evening mode.
                            </p>
                            <p>
                                This seamless orchestration of daily tasks is the promise of the fully automated home—a place that takes care of you, so you can take care of yourself.
                            </p>
                        </>
                    }
                />
            </Page>

            <Page>
                <Article
                    title="How Technology Quietly Shapes Our Routines"
                    body={
                        <>
                            <p className="mb-4">
                                We often think of technology as the devices we hold in our hands. But the most profound impact of tech is how it shapes our behaviors and routines without us even realizing it.
                            </p>
                            <p className="mb-4">
                                From the way we exercise with fitness trackers to how we shop with one-click ordering, technology has streamlined our lives. It has created new habits and eroded old ones.
                            </p>
                            <p>
                                The question is: are we shaping our tools, or are our tools shaping us? Being mindful of these subtle influences is key to maintaining agency in a digital world.
                            </p>
                        </>
                    }
                />
            </Page>

            <Page>
                <Article
                    title="The Future of Everyday Tech"
                    body={
                        <>
                            <p className="mb-4">
                                What does the next decade hold? We can expect technology to become even more integrated, more personalized, and more sustainable.
                            </p>
                            <p className="mb-4">
                                Augmented reality glasses will overlay information on the world around us. Biometric sensors will monitor our health in real-time. And sustainable tech will reduce our environmental footprint.
                            </p>
                            <p>
                                The future is bright, and it is being built today, one innovation at a time.
                            </p>
                        </>
                    }
                />
            </Page>

            {/* 11. BACK COVER */}
            <Page className="justify-center items-center text-center bg-stone-900 text-white border-none">
                <div className="max-w-lg">
                    <h2 className="text-4xl font-serif font-bold mb-8">Tech in Daily Life</h2>
                    <p className="text-stone-400 mb-12 text-lg">Thank you for reading Issue 2025.</p>
                    <div className="w-16 h-1 bg-stone-700 mx-auto mb-12"></div>
                    <p className="text-stone-600 text-sm font-mono uppercase tracking-widest">
                        © 2025 Tech Magazine Media<br />
                        San Francisco • London • Tokyo
                    </p>
                </div>
            </Page>

        </div>
    );
}

function TocItem({ page, title }: { page: string; title: string }) {
    return (
        <div className="flex items-baseline border-b border-stone-200 pb-2">
            <span className="text-stone-400 font-mono text-sm mr-6">{page}</span>
            <span className="text-xl text-stone-800 font-serif hover:text-stone-500 transition-colors cursor-pointer">{title}</span>
        </div>
    );
}
