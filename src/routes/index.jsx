import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import MembersPage from "../pages/members";
import DiscographyPage from "../pages/discography";
import VideosPage from "../pages/videos";

const publicRoutes = [
    { path: '/IVE', component: HomePage },
    { path: '/IVE/about', component: AboutPage },
    { path: '/IVE/members', component: MembersPage },
    { path: '/IVE/discography', component: DiscographyPage },
    { path: '/IVE/videos', component: VideosPage }
]

export { publicRoutes };