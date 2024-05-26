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


function App() {

  return(
    <div className='flex items-center justify-center h-screen'>
      {/* <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="text-white bg-black" variant="outline">
          Welcome to Chatbot - Click me
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Shadcn Working 👍</AlertDialogTitle>
          <AlertDialogDescription>
            Alert text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog> */}
    <Dashboard/>
    </div>
  )
}

export default App
