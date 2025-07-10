"use client"

import { useState, useEffect } from "react"
import {
  Gift,
  Users,
  TrendingUp,
  Bell,
  Calendar,
  MessageCircle,
  Heart,
  UserPlus,
  Flame,
  Sword,
  Shield,
  Star,
  Clock,
} from "lucide-react"

const Rightbar = () => {
  const [followedUsers, setFollowedUsers] = useState([])
  const [currentTime, setCurrentTime] = useState(new Date())

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

 const birthdays = [
  {
    name: "Tanjiro Kamado",
    friends: 5,
    avatar: "/src/assets/tanjiroDS.jpg",
  },
]

  const onlineFriends = [
    {
      name: "Nezuko Kamado",
      avatar: "/src/assets/tanjiroDS.jpg",
      isOnline: true,
      status: "Active now",
      rank: "Demon",
    },
    {
      name: "Inosuke Hashibira",
      avatar: "/src/assets/inosukeDS.jpg",
      isOnline: true,
      status: "Beast Breathing",
      rank: "Demon Slayer",
    },
    {
      name: "Giyu Tomioka",
      avatar: "/src/assets/giyuDS.jpg",
      isOnline: true,
      status: "Water Hashira",
      rank: "Hashira",
    },
  ]

  const recentActivity = [
    {
      user: "Mitsuri Kanroji",
      action: "loved your training post",
      time: "2m ago",
      avatar: "/src/assets/DSlogo.jpg",
      type: "like",
    },
    {
      user: "Sanemi Shinazugawa",
      action: "commented on your technique",
      time: "15m ago",
      avatar: "/src/assets/DSlogo.jpg",
      type: "comment",
    },
    {
      user: "Obanai Iguro",
      action: "started following you",
      time: "1h ago",
      avatar: "/src/assets/DSlogo.jpg",
      type: "follow",
    },
    {
      user: "Muichiro Tokito",
      action: "shared your breathing form",
      time: "2h ago",
      avatar: "/src/assets/DSlogo.jpg",
      type: "share",
    },
  ]

  const handleFollow = (userName) => {
    setFollowedUsers((prev) =>
      prev.includes(userName) ? prev.filter((name) => name !== userName) : [...prev, userName],
    )
  }

  const getRankIcon = (rank) => {
    switch (rank) {
      case "Hashira":
        return <Sword className="w-3 h-3 text-yellow-400" />
      case "Demon Slayer":
        return <Shield className="w-3 h-3 text-[#1DCD9F]" />
      case "Demon":
        return <Flame className="w-3 h-3 text-red-400" />
      default:
        return null
    }
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case "like":
        return <Heart className="w-4 h-4 text-red-400" />
      case "comment":
        return <MessageCircle className="w-4 h-4 text-blue-400" />
      case "follow":
        return <UserPlus className="w-4 h-4 text-[#1DCD9F]" />
      case "share":
        return <TrendingUp className="w-4 h-4 text-purple-400" />
      default:
        return <Bell className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <div className="fixed right-0 top-16 h-full w-80 bg-[#000000] p-4 overflow-y-auto custom-scrollbar text-white border-l border-[#222222]"
    style={{ height: 'calc(100vh - 4rem)' }}>
      {/* Current Time & Weather */}
      <div className="bg-gradient-to-r from-[#1DCD9F] to-[#169976] rounded-lg p-4 mb-4 text-black">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Current Time</p>
            <p className="text-lg font-bold">
              {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm">Training Weather</p>
            <p className="text-xs">Perfect for breathing</p>
          </div>
        </div>
      </div>

      {/* Birthday Notifications */}
      <div className="bg-[#111111] border border-[#222222] rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-2 mb-3">
          <Gift className="w-5 h-5 text-[#1DCD9F]" />
          <h3 className="font-semibold">Birthdays Today</h3>
        </div>
        {birthdays.map((birthday, index) => (
          <div key={index} className="flex items-center space-x-3 p-2 hover:bg-[#222222] rounded-lg transition-colors">
            <img
              src={birthday.avatar}
              alt={birthday.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-[#1DCD9F]"
            />
            <div className="flex-1 text-sm">
              <p className="font-medium text-white">{birthday.name}</p>
              <p className="text-gray-400 text-xs">and {birthday.friends} others have birthdays</p>
            </div>
            <Gift className="w-4 h-4 text-[#1DCD9F]" />
          </div>
        ))}
      </div>


      {/* Online Friends */}
      <div className="bg-[#111111] border border-[#222222] rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Corps Members Online</h3>
          <span className="text-xs bg-[#1DCD9F] text-black px-2 py-1 rounded-full">{onlineFriends.length}</span>
        </div>
        <div className="space-y-3">
          {onlineFriends.map((friend, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-2 hover:bg-[#222222] rounded-lg transition-colors cursor-pointer"
            >
              <div className="relative">
                <img
                  src={friend.avatar || "/placeholder.svg"}
                  alt={friend.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#1DCD9F] border-2 border-[#111111] rounded-full"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-white">{friend.name}</p>
                  {getRankIcon(friend.rank)}
                </div>
                <p className="text-xs text-gray-400">{friend.status}</p>
              </div>
              <MessageCircle className="w-4 h-4 text-gray-400 hover:text-[#1DCD9F] transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-[#111111] border border-[#222222] rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-2 mb-4">
          <Bell className="w-5 h-5 text-[#1DCD9F]" />
          <h3 className="font-semibold">Recent Activity</h3>
        </div>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-2 hover:bg-[#222222] rounded-lg transition-colors cursor-pointer"
            >
              <img
                src={activity.avatar || "/placeholder.svg"}
                alt={activity.user}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex-1 text-sm">
                <p className="text-gray-300">
                  <span className="text-white font-medium">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
              {getActivityIcon(activity.type)}
            </div>
          ))}
        </div>
      </div>

      
    </div>
  )
}

export default Rightbar;
