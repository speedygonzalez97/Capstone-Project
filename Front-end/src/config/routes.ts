import Home from '../pages/Home'
import Planner from '../pages/Planner'
import Info from '../pages/Info'
import Recommendation from '../pages/Recommendation'
import Pictures from '../pages/Pictures'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/Planner",
      component: Planner,
      name: "Planner",
    },
    {
        path: "/Info",
        component: Info,
        name: "Info",
    },
    {
        path: "/Recommendation",
        component: Recommendation,
        name: "Recommendation",
    },
    {
      path: "/Pictures",
      component: Pictures,
      name: "Pictures",
    },
]
   

export default routes