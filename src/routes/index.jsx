import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import MembersPage from "../pages/members";
import DiscographyPage from "../pages/discography";
import DiscographyDetails from "../pages/discographyDetails";
import VideosPage from "../pages/videos";

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/members', component: MembersPage },
    { path: '/discography', component: DiscographyPage },
    { path: '/discography/:discographySlug', component: DiscographyDetails },
    { path: '/videos', component: VideosPage }
]

export { publicRoutes };