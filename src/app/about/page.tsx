import styles from '../index.module.css';

export default function About() {
    return (
        <div>

            <div className={styles["grid-pattern"]}>
                <div className="relative flex flex-col items-center justify-center">

                    <div className="z-0">
                        <div className="absolute opacity-20 -top-5 left-15 bg-teal-500 w-52 h-52 rounded-full"></div>
                        <div className="absolute opacity-20 top-25 -left-5 bg-sky-500 w-32 h-32 rounded-full"></div>

                        <div className="absolute opacity-20 top-30 right-10 bg-pink-500 w-48 h-48 rounded-full"></div>
                        <div className="absolute opacity-20 top-20 -right-5 bg-yellow-500 w-32 h-32 rounded-full"></div>
                    </div>

                    <div className="h-[30vh] flex flex-col items-center justify-center">

                        <h1 className="text-5xl mb-4">
                            So. Why did I make this
                        </h1>
                        <p className="subtitle text-gray-400"><em>ummmmmmmmmmm</em></p>

                    </div>


                    <div className="max-w-4xl rounded-lg border border-gray-200 bg-white shadow-lg text-lg z-1">


                        <div className="whitespace-pre-wrap break-words px-6 py-4">
                            <h3>Hi, I'm <span className="text-pink-600">makrcat.</span></h3>
                            <br></br>
                            The idea for this website sprouted some time back in my <span title="haaaaah I was so depressed in freshman year">freshman year of high school (2023-2024)</span>, but I didn't really start planning things out until the summer of junior year (2025).
                            {`

Each event within science olympiad covers a sweeping amount of information (looking at you, materials science). While the seasoned competitor probably has their handful of website bookmarks, notesheets, and documents, it's quite hard for someone new to figure out where and how to start studying. It was definitely like that for me: I started studying for anatomy by just staring at someone's free cheat sheet online and feeling incredibly anxious about it. xD

So, that's why I made the website. It can hopefully serve as a general guide towards studying for some particularly comprehensive SciOly events.
And also, I want to learn full-stack development. :)

The site's creation is inspired by the USACO.guide (prep for USA Computing Olympiad).


Extra trivia:
- I made the repo shortly after hack club's summer of making game out, so some of my hours were logged there! I would say that I got some cool printer or something, with my 70 hours, but I barely have any votes. (Vote for me pleeaase, if you see me)
- Before making this website, I had very very minimal backend experience and it was my first time doing anything related to React.js, or Next.js. So if you're new and don’t know how to do something, don’t let that discourage you! Everything comes together little by little. You learn as you go.

Site info:
- CSS This site runs on Tailwind, a bit of DaisyUI
- This site uses typescript.
- React.js & Next.js for the server stuff.
- It filters stuff with algolia.
- Data is managed by firestore/firebase
                                `}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
