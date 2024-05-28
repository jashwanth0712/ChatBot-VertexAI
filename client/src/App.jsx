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
import { Stepper } from './Admin/Input'


function App() {

  return(
    <div >
      // className='flex items-center justify-center h-screen'
    {!<Dashboard/>}
    <Stepper/>
    </div>
  )
}

export default App
