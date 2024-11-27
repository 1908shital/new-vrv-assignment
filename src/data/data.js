import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";


export const navigationLinks = [
  { id: 1, title: 'Home', image: iconsImgs.home, path: '/home' },
  { id: 2, title: 'Users', image: iconsImgs.budget, path: '/users' },
  { id: 3, title: 'All Roles', image: iconsImgs.plane, path: '/roles' },
  { id: 4, title: 'User Management', image: iconsImgs.wallet, path: '/user-management' },
  { id: 5, title: 'Permissions', image: iconsImgs.wealth, path: '/permissions' },
];


export const transactions = [
    {
        id: 11, 
        name: "Sanya Gupta",
        image: personsImgs.person_four,
        date: "23/12/04",
        amount: 2200000 // Amount in INR
    },
    {
        id: 12, 
        name: "Krishna Kumari",
        image: personsImgs.person_three,
        date: "23/07/21",
        amount: 2000000 // Amount in INR
    },
    {
        id: 13, 
        name: "Indira Reddy",
        image: personsImgs.person_two,
        date: "23/08/25",
        amount: 3000000 // Amount in INR
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Subscriptions",
        type: "Automated",
        amount: 22000 // Amount in INR
    },
    {
        id: 20, 
        title: "Loan Payment",
        type: "Automated",
        amount: 16000 // Amount in INR
    },
    {
        id: 21, 
        title: "Foodstuff",
        type: "Automated",
        amount: 20000 // Amount in INR
    },
    {
        id: 22, 
        title: "Subscriptions",
        type: null,
        amount: 10000 // Amount in INR
    },
    {
        id: 23, 
        title: "Subscriptions",
        type: null,
        amount: 40000 // Amount in INR
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/04",
        amount: 2000 // Amount in INR
    },
    {
        id: 25,
        title: "Netflix",
        due_date: "23/12/10",
        amount: 50000 // Amount in INR
    },
    {
        id: 26,
        title: "Airtel DTH",
        due_date: "23/12/22",
        amount: 2000 // Amount in INR
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 25000, // Amount in INR
        title: "Pay Younger Brother’s College Fees",
        date_taken: "23/12/22",
        amount_left: 40000 // Amount in INR
    }
]

export const usersData = [
    {
      name: 'Arjun Yadav',
      email: 'arjun.yadav@example.com',
      dob: '1990-01-15',
      phone: '9876543210',
      role: 'Admin',
      permissions: 'Full Access',
    },
    {
      name: 'Priya Desai',
      email: 'priya.desai@example.com',
      dob: '1992-07-24',
      phone: '8765432109',
      role: 'Editor',
      permissions: 'Edit, View',
    },
    {
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@example.com',
      dob: '1995-03-10',
      phone: '9911223344',
      role: 'Viewer',
      permissions: 'View Only',
    },
];

  