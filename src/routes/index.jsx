import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import MembersPage from "../pages/members";
import DiscographyPage from "../pages/discography";
import VideosPage from "../pages/videos";

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/members', component: MembersPage },
    { path: '/discography', component: DiscographyPage },
    { path: '/videos', component: VideosPage }
]

export { publicRoutes };