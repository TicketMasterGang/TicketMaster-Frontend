//MainPage
const MainPage = () => import("@/pages/MainPage.vue");
const BusinessProfile = () => import("@/pages/Profile/Business.vue");
const UserProfile = () => import("@/pages/Profile/User.vue");

//Auth
const Login = () => import("@/pages/Auth/Login.vue");
const Signup = () => import("@/pages/Auth/Signup.vue");

//Tickets
const Ticket = () => import("@/pages/Tickets/Ticket.vue");
const AllBusinessTickets = () => import("@/pages/Tickets/AllBusinessTickets.vue");
const AllUserTickets = () => import("@/pages/Tickets/AllUserTickets.vue");

//Layout & Components
const NotFound = () => import("@/components/NotFoundPage.vue");
const DashboardLayout = () => import("@/Layout/FullPage.vue");

const routes = [
	{ path: "/", redirect: "/login" },
	{ path: "/login", component: Login },
	{ path: "/signup", component: Signup },
	{
		path: "/dashboard",
		redirect: "/dashboard/main",
		component: DashboardLayout,
		children: [
			{
				path: "main",
				name: "Dashboard",
				component: MainPage,
			},
			{
				path: "userProfile",
				name: "Profile",
				component: UserProfile,
			},
			{
				path: "businessProfile",
				name: "Profile",
				component: BusinessProfile,
			},
			{
				path: "ticket",
				name: "Ticket",
				component: Ticket,
			},
			{
				path: "businessTickets",
				name: "All Tickets",
				component: AllBusinessTickets,
			},
			{
				path: "userTickets",
				name: "All Tickets",
				component: AllUserTickets,
			},
		],
	},
	{ path: "*", component: NotFound },
];

export default routes;