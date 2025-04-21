
import React from "react";
import TweetCard from "./TweetCard";

const tweets = [
  {
    avatar: "https://pbs.twimg.com/profile_images/1374617745287936001/wMbdRvFg_400x400.jpg",
    name: "CerebrumAI",
    username: "@cerebrum_ai",
    time: "2d",
    content: "Excited to announce our AI-empowered stroke triage is reducing treatment times and improving patient outcomes. Explore our new real-world results and collaborative projects!",
    link: "https://twitter.com/",
  },
  {
    avatar: "https://pbs.twimg.com/profile_images/1374617745287936001/wMbdRvFg_400x400.jpg",
    name: "CerebrumAI",
    username: "@cerebrum_ai",
    time: "3d",
    content: "CerebrumAI’s solutions are now trusted by top global hospital groups. AI + behavioral data is transforming digital health for everyone.",
    link: "https://twitter.com/"
  }
];

const news = [
  {
    image: "https://images.unsplash.com/photo-1511174511562-5f97fba21be8?w=420&q=80",
    title: "AI Helps Doctors Treat Stroke Faster: CerebrumAI Study",
    highlight: "Significant real-world impact: improved diagnosis & outcomes via AI-powered triage.",
    details: "In resource-limited settings, timely treatment of acute stroke is critical. CerebrumAI's latest peer-reviewed study demonstrates that AI support leads to faster and more accurate stroke triage, with improved patient outcomes and reduced disparities.",
    cta: "See Study Details",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1559757175-5700dde6754b?w=350&q=80",
    title: "PenRAD Imaging Network Deploys AI to Detect Lung Cancer Early",
    highlight: "AI solutions help UK’s NHS PenRAD identify lung cancer sooner.",
    details: "CerebrumAI’s chest CT AI has been deployed for early lung cancer detection, enabling more lives to be saved. Read how hospitals are accelerating diagnosis at scale.",
    cta: "Read News",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=410&q=80",
    title: "Silicosis: A Global Occupational Health Crisis",
    highlight: "Over 38 million workers are exposed to silica dust worldwide.",
    details: "According to WHO, ~230,000 new cases of silicosis are diagnosed annually. Our technology is helping organizations with early detection and preventive care.",
    cta: "Read The Full Blog",
    link: "#"
  }
];

const LatestDevelopments: React.FC = () => (
  <section className="relative py-20 px-2 md:px-6 bg-gradient-to-br from-indigo-100/50 via-fuchsia-50 to-blue-50 dark:from-[#181735] dark:via-[#23243A] dark:to-[#23243A]">
    <h3 className="text-center mb-10 text-3xl md:text-4xl font-extrabold text-gradient-primary tracking-tight">Explore Our Latest Developments</h3>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 transition-all">
      {/* Tweets */}
      <div className="flex flex-col gap-5 md:col-span-1 w-full animate-fade-in">
        {tweets.map((tweet, idx) =>
          <TweetCard {...tweet} key={idx} />
        )}
      </div>
      {/* News Cards */}
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {news.map((item, idx) => (
          <div
            key={item.title}
            className="group bg-gradient-to-br from-white via-gray-50 to-fuchsia-50 dark:from-[#1b1b2b] dark:via-[#23243a] dark:to-[#312951] rounded-2xl shadow-xl border border-fuchsia-200/20 backdrop-blur-lg px-6 pt-7 pb-8 flex flex-col justify-between min-h-[316px] overflow-hidden transition-all hover:scale-[1.023] animate-scale-in"
            style={{ animationDelay: `${100 * idx}ms` }}
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs bg-fuchsia-200/70 rounded px-2 py-1 font-semibold text-[#262142]">{item.title}</span>
              </div>
              <span className="block font-semibold text-[#672c79] dark:text-[#f5eaff] text-lg mb-1">{item.highlight}</span>
              <span className="block text-[#6d5071] dark:text-[#d9cbf7] text-base mb-3">{item.details}</span>
            </div>
            <div className="flex gap-2 items-end justify-between mt-auto">
              <img src={item.image} alt="dev news" className="w-[94px] h-[94px] object-cover rounded-lg border-2 border-fuchsia-200/30 shadow-md" />
              <a href={item.link} className="inline-block self-end rounded-md border border-fuchsia-300 text-[#672C79] dark:text-[#f7cded] px-4 py-2 text-sm font-semibold transition bg-fuchsia-50/60 hover:bg-fuchsia-100 dark:bg-[#392c47]/60 dark:hover:bg-[#392c47] shadow">{item.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LatestDevelopments;
