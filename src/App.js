import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import ArticlePanel from './components/ArticlePanel'

function App() {
  const dummyArticleTitles = [
    'South African teens fly from Cape to Cairo in homemade plane',
    'Camera and microphone require HTTPS in Firefox 68',
    'When bills pile up, young people turn to strangers on Venmo',
    'C. Hoare and Co., a British banking dynasty in business for more than 300 years',
    'California Earthquakes Disrupted HF Propagation on West Coast',
    'Data Still Dominates',
    'The challenges of teaching software engineering'
  ]
  const articles = [
    `The four-seater Sling 4 plane was assembled by a group of 20 students from vastly different backgrounds.
  The crew landed in Namibia, Malawi, Ethiopia, Zanzibar, Tanzania and Uganda during the 12,000km (7,455 mile) trip.
  Pilot Megan Werner, 17, founder of U-Dream Global project, said she was thrilled by the accomplishment.
  "I'm so honoured to have made a difference around the continent at the places we've stopped.
  "The purpose of the initiative is to show Africa that anything is possible if you set your mind to it," she added.
  Another Sling 4 plane, flown by professional pilots, accompanied the teen flyers, whose goal was to give motivational talks for other teenagers along the way.
  The teenagers built the aircraft in three weeks from a kit manufactured in South Africa by the Airplane Factory. Construction included assembling thousands of small parts.`,
    `As of Firefox 68—releasing next week—camera and microphone will require an https connection to work. Access from insecure http will cease to work, matching how Chrome works. Camera and microhone are powerful features, and Firefox will now only expose them in secure contexts, a security and privacy improvement.
  Largely an issue for developers to catch up on, this may nonetheless affect end users who follow old http links to servers that either still don’t redirect their users to https automatically, or don’t support it at all. If you’re experiencing this problem, click your URL bar, and if the URL starts with http, try changing it to https, and it should work again, provided the server supports https.
  The rest of this blog post is for web developers, since there are some details that may be of interest to them. Firefox is deprecating camera and microphone access in insecure contexts in two steps:
  Firefox 68 behavior
  In Firefox 68, getUserMedia will throw NotAllowedError, while enumerateDevices will continue to work until Firefox 69. This matches how Chrome has worked for a good while (pre Chrome 74), and should be highly web compatible. It is an intermediate stepping stone to Firefox 69.
  Firefox 69 behavior
  In Firefox 69, both getUserMedia and enumerateDevices will throw TypeError. This matches how Chrome 74+ and the the spec now work.
  It is worth pointing out that this TypeError exception will come from the absence of the navigator.mediaDevices object in insecure contexts—or, if callbacks are used, the absence of the deprecated navigator.mozGetUserMedia function. Any JavaScript that doesn’t test for this before invoking navigator.mediaDevices.getUserMedia() will get an immediate exception thrown instead of merely having its promise rejected. Compared to Firefox 68, this might affect surrounding code, hence the two-step process.
  How SecureContext improves things
  Some good news for web developers is that camera and microphone will continue to work from http://localhost! This is thanks to the modern definition of secure context, which defines local sources as secure. It also fixes other edge cases, like an https iframe in an http page is now considered insecure. It also cleans up camera and microphone access from embedded JS using srcdoc (works) and data: URLs (no longer works).`,
    `With thousands of likes and retweets, donations broke $1,000 two days later — more than enough to cover gas for the drive.
  Venmo, owned by PayPal, and Cash App, owned by Square, have surged in recent years, as cashless financial services moved into the mainstream. Some 40 million people use Venmo, and payments jumped by 73% to $21 billion in the first quarter of 2019 from a year prior. Cash App reported 15 million monthly active users as of December.
  Most person-to-person payments are free, with the companies taking a cut from business transactions and those involving credit cards. Neither firm is profitable, but both boast sweeping popularity that PayPal and Square hope to monetize in the future.
  The services frame themselves as tools that make it easy for their millennial and Gen Z user base to pay back a bar tab or split the cost of lunch. But some straddling tight budgets are also turning to payment apps as crowdfunding tools for bills, emergencies and the costs of daily life.
  Tweets linking to Venmo and Cash App accounts are common in some pockets of Twitter, as users seek to crowdfund a few hundred dollars for rent or food, burdensome expenses such as medical bills, surgery, immigration fees, a family member’s funeral, and even a couple dollars for a cup of coffee or a trip to the nail salon.`,
    `The London firm was started in 1672 by Richard Hoare and has tended to the affairs of diarist Samuel Pepys, poet Lord Byron and novelist Jane Austen. That’s almost a hundred years older than the famous Rothschild dynasty, which was founded in the 1760s. After more than three centuries of continuous operation, the family still runs the show, overseeing about 4.4 billion pounds ($5.6 billion) of deposits and sticking to a traditional way of doing business.
    “You go in and you talk,” said Islay Robinson, chief executive officer of Enness, a mortgage broker with dozens of high-net-worth clients who have borrowed from the bank. “They lend their own money and tend to be able to come up with solutions that other banks can’t.”
    The last of the 10th generation of partners retired last year, leaving the bank in the hands of six partners from the 11th generation who have continued its evolution. In March, they opened the first outpost outside London: a Cambridge office designed to serve existing clients but also attract entrepreneurs in a region known for bioscience and technology ventures.
    Blending old with new has become vital for C. Hoare, rival Coutts and smaller competitors such as Raphaels and Weatherbys as they vie to serve wealthy clients. Independent banks are also striving to reconcile their highly tailored services to an industry where the prevailing trends are consolidation and rising regulation.

“It’s a constant tension because part of what makes us completely different to the clearing banks is that we are smaller and more personable and more human and more relatable to customers,” partner  Alexander Hoare, 57, said during an interview in a meeting room festooned with cartoons. “We don’t want to be herded and we don’t want to grow. We want to be special.”`,
    `British Columbia radio amateur Alex Schwarz, VE7DXW, said that an Independence Day magnitude 6.4 earthquake in California’s Mojave Desert and multiple aftershocks negatively affected HF propagation on the US west coast. Schwarz, who maintains the “RF Seismograph” and has drawn a correlation between earthquake activity and HF band conditions, said the radio disruption began at around 1600 UTC on July 4, and continued into July 5. He said that on July 4, the blackout was total except for 20 meters, where conditions were “severely attenuated,” Schwarz said. The RF Seismograph also detected the magnitude 7.1 earthquake on July 6 in the same vicinity, Schwarz reported. The distance between the monitoring station in Vancouver, British Columbia, and that quake’s epicenter is 1,240 miles.
“Things are back to normal after the strong quake, as far as the ionosphere is concerned, but the unrest has not stopped yet,” Schwarz told ARRL on July 8. “There were over 7,000 mostly small quakes, and these do not seem to have the energy to affect the ionosphere. We all hope that this will settle down soon.” Schwarz said the RF Seismometer detected a magnitude 6.9 earthquake in Indonesia.

Over the holiday weekend, Schwarz had reported “a massive short-wave radio blackout” on the west coast. “It is not caused by the sun (the sun is quiet), but the field lines of the ’quakes themselves,” he said. A magnitude 6.2 earthquake took place off Vancouver Island, British Columbia, on July 4.

On July 6, Schwarz said, the RF Seismograph showed an increase in noise on 80 meters some 13 hours beforehand, as well as some propagation changes on 40 and 30 meters — low before the quake and increasing in its wake. Increases in noise on 15 and 10 meters were detected some 10 hours before the earthquake, diminishing about 3 hours afterward. In addition, noise level and propagation changes on 20 meters some 3 hours before the earthquake.

Schwarz said larger quakes spur longer periods of 80-meter noise which cross the day/night boundary. “The difficulty is the 80 meter noise difference between day and night, which is hard to subtract from the graphs,” he added. With earthquakes of lesser magnitude (4.0 to 5.9), the RF Seismograph displays the rise and fall typically within daytime or nighttime propagation, making it more obvious. “The measurement on the other bands is more consistent, and the quake can have either an amplifying or attenuating effect on propagation,” Schwarz told ARRL.`,
    `Here’s a quote from Linus Torvalds in 2006:

I’m a huge proponent of designing your code around the data, rather than the other way around, and I think it’s one of the reasons git has been fairly successful… I will, in fact, claim that the difference between a bad programmer and a good one is whether he considers his code or his data structures more important. Bad programmers worry about the code. Good programmers worry about data structures and their relationships.

Which sounds a lot like Eric Raymond’s “Rule of Representation” from 2003:

Fold knowledge into data, so program logic can be stupid and robust.

Which was just his summary of ideas like this one from Rob Pike in 1989:

Data dominates. If you’ve chosen the right data structures and organized things well, the algorithms will almost always be self-evident. Data structures, not algorithms, are central to programming.

Which cites Fred Brooks from 1975:

Representation is the Essence of Programming
Beyond craftmanship lies invention, and it is here that lean, spare, fast programs are born. Almost always these are the result of strategic breakthrough rather than tactical cleverness. Sometimes the strategic breakthrough will be a new algorithm, such as the Cooley-Tukey Fast Fourier Transform or the substitution of an n log n sort for an n2 set of comparisons.

Much more often, strategic breakthrough will come from redoing the representation of the data or tables. This is where the heart of your program lies. Show me your flowcharts and conceal your tables, and I shall be continued to be mystified. Show me your tables, and I won’t usually need your flowcharts; they’ll be obvious.

So, smart people have been saying this again and again for nearly half a century: focus on the data first. But sometimes it feels like the most famous piece of smart programming advice that everyone forgets.

Let me give some real examples.

The Highly Scalable System that Couldn’t
This system was designed from the start to handle CPU-intensive loads with incredible scalability. Nothing was synchronous. Everything was done with callbacks, task queues and worker pools.

But there were two problems: The first was that the “CPU-intensive load” turned out not to be that CPU-intensive after all — a single task took a few milliseconds at worst. So most of the architecture was doing more harm than good. The second problem was that although it sounded like a highly scalable distributed system, it wasn’t one — it only ran on one machine. Why? Because all communication between asynchronous components was done using files on the local filesystem, which was now the bottleneck for any scaling. The original design didn’t say much about data at all, except to advocate local files in the name of “simplicity”. Most of the document was about all the extra architecture that was “obviously” needed to handle the “CPU-intensiveness” of the load.

The Service-Oriented Architecture that was Still Data-Oriented
This system followed a microservices design, made up of single-purpose apps with REST-style APIs. One component was a database that stored documents (basically responses to standard forms, and other electronic paperwork). Naturally it exposed an API for basic storage and retrieval, but pretty quickly there was a need for more complex search functionality. The designers felt that adding this search functionality to the existing document API would have gone against the principles of microservices design. They could talk about “search” as being a different kind of service from “get/put”, so their architecture shouldn’t couple them together. Besides, the tool they were planning to use for search indexing was separate from the database itself, so creating a new service made sense for implementation, too.

In the end, a search API was created containing a search index that was essentially a duplicate of the data in the main database. This data was being updated dynamically, so any component that mutated document data through the main database API had to also update the search API. It’s impossible to do this with REST APIs without race conditions, so the two sets of data kept going out of sync every now and then, anyway.

Despite what the architecture diagram promised, the two APIs were tightly coupled through their data dependencies. Later on it was recognised that the search index should be an implementation detail of a unified document service, and this made the system much more maintainable. “Do one thing” works at the data level, not the verb level.

The Fantastically Modular and Configurable Ball of Mud
This system was a kind of automated deployment pipeline. The original designers wanted to make a tool that was flexible enough to solve deployment problems across the company. It was written as a set of pluggable components, with a configuration file system that not only configured the components, but acted as a DSL for programming how the components fitted into the pipeline.

Fast forward a few years and it’s turned into “that program”. There was a long list of known bugs that no one was ever fixing. No one wanted to touch the code out of fear of breaking things. No one used any of the flexibility of the DSL. Everyone who used the program copy-pasted the same known-working configuration that everyone else used.

What had gone wrong? Although the original design document used words like “modular”, “decoupled”, “extensible” and “configurable” a lot, it never said anything about data. So, data dependencies between components ended up being handled in an ad-hoc way using a globally shared blob of JSON. Over time, components made more and more undocumented assumptions about what was in or not in the JSON blob. Sure, the DSL allowed rearranging components into any order, but most configurations didn’t work.

Lessons
I chose these three examples because they’re easy to explain, not to pick on others. I once tried to build a website, and failed trying to instead build some cringe-worthy XML database that didn’t even solve the data problems I had. Then there’s the project that turned into a broken mockery of half the functionality of make, again because I didn’t think about what I really needed. I wrote a post before based on a time I wrote a castle-in-the-sky OOP class hierarchy that should have been encoded in data instead.

Update:

Apparently many people still thought I wrote this to make fun of others. People who’ve actually worked with me will know I’m much more interested in the things I’m fixing than in blaming the people who did most of the work building them, but, okay, here’s what I think of the engineers involved.

Honestly, the first example obviously happened because the designer was more interested in bringing a science project to work than in solving the problem at hand. Most of us have done that (mea culpa), but it’s really annoying to our colleagues who’ll probably have to help maintain them when we’re bored of them. If this sounds like you, please don’t get offended; please just stop. (I’d still rather work on the single-node distributed system than anything built around my “XML database”.)

There’s nothing personal in the second example. Sometimes it feels like everyone is talking about how wonderful it is to split up services, but no one is talking about exactly when not to. People are learning the hard way all the time.

The third example was actually from some of the smartest people I’ve ever had the chance to work with.

(End update.)

“Does this talk about the problems created by data?” turns out to be a pretty useful litmus test for good systems design. It’s also pretty handy for detecting false expert advice. The hard, messy systems design problems are data problems, so false experts love to ignore them. They’ll show you a wonderfully beautiful architecture, but without talking about what kind of data it’s appropriate for, and (crucially) what kind of data it isn’t.

For example, a false expert might tell you that you should use a pub/sub system because pub/sub systems are loosely coupled, and loosely coupled components are more maintainable. That sounds nice and results in pretty diagrams, but it’s backwards thinking. Pub/sub doesn’t make your components loosely coupled; pub/sub is loosely coupled, which may or may not match your data needs.

On the flip side, a well-designed data-oriented architecture goes a long way. Functional programming, service meshes, RPCs, design patterns, event loops, whatever, all have their merits, but personally I’ve seen tools like boring old databases be responsible for a lot more successfully shipped software.`,

    `I’ve just finished teaching a four-day course introducing software engineering for the first time. My plan is to refine the course (I’m teaching it again in October), and it will eventually become the basis for doctoral training programmes in research software engineering at Oxford, and part of a taught Masters. My department already has an M.Sc. in Software Engineering for commercial engineers (in fact I have that degree), and we want to do the same for software engineers in research context.

Of course, I can also teach your team about software engineering!

Some challenges that came up:

I’m too comfortable with the command-line to get people past the initial unfamiliar discomfort. From that perspective, command-line tools are all unusably hard. I’ve learnt from various sources to try foo --help, man foo, and other incantations. Others haven’t.

git, in particular, is decidedly unfriendly. What I want to do is commit my changes. What I have to do is stage my changes, then commit my staged changes. As a result, teaching git use takes a significant chunk of the available time, and still leaves confusion.

you need to either tell people how to set their core.editor, or how to quit vim.

similarly, there’s a world of difference between python foo.py and python3 foo.py, and students aren’t going to interpret the sorts of errors you et if you choose the wrong one.

Introduce a tangent, and I run the risk of losing people to that tangent. I briefly mentioned UML while discussing diagrams of objects, as a particular syntax for those diagrams. In the subsequent lab, some people put significant time into making sure their diagrams were valid UML.

Finding the trade-off between presentation, tutorial, and self-directed exercise is difficult. I’m used to presentations and will happily talk on many topics, but even I get bored of listening to me after the ~50% of the time I’ve spent speaking on this course. It must be worse for the students. And there’s no substitute for practical experience, but that must be supported by guidance.

There are so many topics that I didn’t get to cover!

only having an hour for OOP is a sin
which means I didn’t even mention patterns or principles
similarly, other design techniques like functional programming got left off
principles like Agile Software Development, Software Craftsmanship, or Devops don’t get a mention
continuous integration and continuous delivery got left off. Even if they didn’t, the amount of work involved in going from “I have a Python script” to “I run my tests whenever I change my script, and update my PYpi package whenever they pass” is too damn high.
forget databases, web servers, browsers, mobile apps, desktop apps, IoT, or anything that isn’t a command line script or a jupyter notebook
and machine learning tools
and concurrency, processes and process improvement, risk management, security, team dynamics, user experience, accessibility…
It’s only supposed to be a taster but I have to trade off introducing everything with showing the value present in anything. What this shows, as I found when I wrote APPropriate Behaviour, is that there’s a load that goes into being a programmer that is not programming.`
  ]

  const getArticles = () =>
    dummyArticleTitles.map((articleTitle, index) => {
      return (
        <ArticlePanel
          key={index}
          articleTitle={articleTitle}
          articleData={articles[index]}
        />
      )
    })

  return (
    <div className='App'>
      <Header />
      {getArticles()}
      <img src={logo} className='App-logo' alt='logo' />
    </div>
  )
}

export default App
