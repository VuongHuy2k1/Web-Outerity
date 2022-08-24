import config from '~/Components/config';
//Layout
import { DefaultLayout } from '~/admin/Component/Layout/DefaultLayout';
// Pages
import Shop from '~/pages/Shop';
import News from '~/pages/News';
import About from '~/pages/About/About';
import ReturnPolicy from '~/pages/About/ReturnPolicy';
import PrivacyPolicy from '~/pages/About/PrivacyPolicy';
import TermsService from '~/pages/About/TermsService';
import Sale from '~/pages/Sale';
import Contact from '~/pages/Contact';
import Register from '~/pages/Register';
// import Search from '~/Components/Layout/component/Header/Search';
import Cart from '~/pages/Cart';
import Details from '~/pages/Cart/Detail';
import Payment from '~/pages/Cart/Payment/Payment';
//admin
import { Home } from '~/admin/pages/home';
// Public routes
const publicRoutes = [
    { path: config.routes.shop, component: Shop },
    { path: config.routes.news, component: News },
    { path: config.routes.about, component: About },
    { path: config.routes.returnpolicy, component: ReturnPolicy },
    { path: config.routes.privacypolicy, component: PrivacyPolicy },
    { path: config.routes.termsservice, component: TermsService },
    { path: config.routes.sale, component: Sale },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.register, component: Register },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.details, component: Details },
    { path: config.routes.payment, component: Payment },
    //admin
    { path: config.routes.home, component: Home, layout: DefaultLayout },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };