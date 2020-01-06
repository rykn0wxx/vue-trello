let routeIndex = 0

export default function routeGenerator (pathObj) {
  const { name, path, icon } = pathObj
  const routes = {
    name,
    path,
    icon,
    meta: pathObj.meta ? pathObj.meta : { public: false },
    component: (resolve) => import(`@/components/${pathObj.view}.vue`).then(resolve)
  }
  routes.meta.pathIndex = routeIndex++
  if (pathObj.redirect) routes.redirect = pathObj.redirect
  if (pathObj.children) routes.children = pathObj.children.map(path => routeGenerator(path))
  return routes
}
