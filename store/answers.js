import { observable, action, makeObservable } from "mobx";

class AnswerStore {
  answers = [
    {
      user: {
        name: "User 1",
        company: "Company 1",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
    {
      user: {
        name: "User 1",
        company: "Company 1",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
    {
      user: {
        name: "User 3",
        company: "Company 1",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
    {
      user: {
        name: "User 4",
        company: "Company 2",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
    {
      user: {
        name: "User 5",
        company: "Company 3",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
    {
      user: {
        name: "User 6",
        company: "Company 4",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
    {
      user: {
        name: "User 7",
        company: "Company 5",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
    {
      user: {
        name: "User 8",
        company: "Company 6",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
    {
      user: {
        name: "User 9",
        company: "Company 7",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
    {
      user: {
        name: "User 10",
        company: "Company 8",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
    {
      user: {
        name: "Jon Doe",
        company: "Company 1",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
    {
      user: {
        name: "Jon Doe",
        company: "Company 1",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
    {
      user: {
        name: "Jon Doe",
        company: "Company 1",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
    {
      user: {
        name: "Jon Doe",
        company: "Company 1",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
    {
      user: {
        name: "Jon Doe",
        company: "Company 1",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
    {
      user: {
        name: "Jon Doe",
        company: "Company 1",
        position: "Chief executive officer",
      },
      datePosted: "June 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      replies: [
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "5 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "10 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "15 seconds ago",
        },
        {
          name: "Jon doe",
          picture: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
          company: "Company 1",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          time: "16 seconds ago",
        },
      ],
    },
  ];

  constructor() {
    makeObservable(this, {
      answers: observable,
    });
  }
}

const answerStore = new AnswerStore();
export default answerStore;
