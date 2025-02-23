import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const campaigns = [
  {
    id: 1,
    title: "AI-Powered Learning Platform",
    creator: "John Doe",
    raised: "$25,000",
    goal: "$50,000",
    description: "An innovative AI-driven education platform for students.",
    category: "Technology",
  },
  {
    id: 2,
    title: "Eco-Friendly Smart Homes",
    creator: "Jane Smith",
    raised: "$18,500",
    goal: "$40,000",
    description: "Building affordable, sustainable smart homes.",
    category: "Environment",
  },
  {
    id: 3,
    title: "Healthcare for Remote Villages",
    creator: "Dr. Patel",
    raised: "$10,200",
    goal: "$30,000",
    description: "Providing free healthcare to underprivileged regions.",
    category: "Health",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* Hero Section */}
      <motion.header
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center py-20 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold tracking-wide">
          🚀 Crowdfund<span className="text-yellow-300">X</span>
        </h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Empowering innovators by connecting them with supporters. Join us
          today and bring your dreams to life!
        </p>
        <Link
          to="/create-campaign"
          className="mt-6 inline-block bg-white text-purple-600 px-6 py-3 font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Start a Campaign
        </Link>
      </motion.header>

      {/* Dashboard Section */}
      <section className="my-10 max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "Total Campaigns", value: "124", bg: "bg-blue-500" },
            { title: "Funds Raised", value: "$1.2M", bg: "bg-green-500" },
            { title: "Active Backers", value: "15,642", bg: "bg-yellow-500" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`p-6 ${item.bg} rounded-lg shadow-lg text-center text-white`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-4xl mt-2">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Campaign List */}
      <section className="my-12 max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-6">
          🔥 Trending Campaigns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campaigns.map((campaign) => (
            <motion.div
              key={campaign.id}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold">{campaign.title}</h3>
              <p className="text-sm text-gray-600">By {campaign.creator}</p>
              <p className="mt-2 text-gray-700">{campaign.description}</p>
              <div className="mt-4 text-lg font-semibold">
                <span className="text-green-600">{campaign.raised}</span> raised
                of <span className="text-gray-500">{campaign.goal}</span>
              </div>
              <Link
                to={`/campaign/${campaign.id}`}
                className="mt-4 block px-4 py-2 bg-indigo-500 text-white rounded-lg text-center hover:bg-indigo-600"
              >
                View Campaign
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-8">
        <p className="text-xl font-semibold">About CrowdfundX</p>
        <p className="max-w-3xl mx-auto mt-2 text-gray-400">
          CrowdfundX is a global crowdfunding platform where creators and
          innovators bring their ideas to life with the help of supporters.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            🌍 Website
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            🐦 Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            📘 Facebook
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
