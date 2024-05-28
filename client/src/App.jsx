import { Button } from './components/ui/button'
import Dashboard from './Admin/Dashboard'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Stepper } from './Admin/input_page'


function App() {
// className='flex items-center justify-center h-screen'
  return(
    <div >
      
    {!<Dashboard/>}
    <Stepper/>
    </div>
  )
}

export default App
