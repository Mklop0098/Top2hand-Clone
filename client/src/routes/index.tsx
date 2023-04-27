import { Home } from "../pages/Home";
import { MenShoes } from "../pages/MenShoes";
import { Payment } from "../pages/Cart";
import { Product } from "../pages/Product";
import { WomenShoes } from "../pages/WomenShoes";


export const publicRoutes = [
    {path: '/', component: Home },
    {path: '/products/:id', component: Product},
    {path: '/collections/giay-nam', component: MenShoes},
    {path: '/collections/giay-nu', component: WomenShoes},
    {path: '/your-cart', component: Payment},


]