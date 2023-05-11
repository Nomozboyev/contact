import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import { Information } from './component/informationContact'
import { Leyaut } from './component/leyaut'
import { Sidebar } from './component/sidebar'

const routers=createBrowserRouter([
  {
    path:'/',
    element:<Leyaut/>,
    children:[
      {
        path:'/',
        element:<Sidebar/>,
        children:[
          {
            path:'contact/:id',
            element:<Information/>
          }]
      }
    ]

  }
])

function App() {

  return (
    
     <RouterProvider router={routers}/>
    
  )
}

export default App
