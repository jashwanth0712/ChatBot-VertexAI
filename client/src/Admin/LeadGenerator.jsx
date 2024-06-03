import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { CornerDownLeft, Mic, Paperclip,Users } from "lucide-react"
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import { Label } from "@/components/ui/label"
  import { Textarea } from "@/components/ui/textarea"

  import { Progress } from "@/components/ui/progress"
export default function LeadGenerator(){
    return (
        <div className="md:flex justify-center w-[70vw] flex-col items-center m-2 md:ml-16">
            <div className="m-4">
            <h1 className=""><b>Lead generator</b></h1>
            </div>
            <div className="w-full flex  space-x-4">
            <Card className="flex-1">
                <CardHeader className="pb-2">
                    <CardDescription>This Month</CardDescription>
                    <CardTitle className="text-4xl">35 people</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">
                    +10% from last month
                    </div>
                </CardContent>
                <CardFooter>
                    <Progress value={70} aria-label="12% increase" />
                </CardFooter>
            </Card>    
            <Card className="flex-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mail Followups</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">+5</div>
                <p className="text-xs text-muted-foreground">+0% from last month</p>
            </CardContent>
            </Card>
   
            </div>
            <div className="w-full flex-1 m-8">
            <h1 className="m-2"><b>Create New Lead</b></h1>

            <form
                className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
                >
                <Label htmlFor="message" className="sr-only">
                    Message
                </Label>
                <Textarea
                    id="message"
                    placeholder="Add the Prompt for jarvis on how to handle the leads and mails attach the csv..."
                    className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center p-3 pt-0">
                        <Button variant="ghost" size="icon">
                        <Paperclip className="size-4" />
                        <span className="sr-only">Attach file</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                        <Mic className="size-4" />
                        <span className="sr-only">Use Microphone</span>
                        </Button>
                    <Button type="submit" size="sm" className="ml-auto gap-1.5">
                    Start Campaign
                    <CornerDownLeft className="size-3.5" />
                    </Button>
                </div>
                </form>
            </div>
            <div className="w-full">
            <Card>
      <CardHeader>
        <CardTitle>Follow ups</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>VM</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">veena mishra</p>
            <p className="text-sm text-muted-foreground">
              ve...@chargebee.com
            </p>
          </div>
          <div className="ml-auto font-medium">HR , chargebee</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/02.png" alt="Avatar" />
            <AvatarFallback>DA</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Deepika Agarval</p>
            <p className="text-sm text-muted-foreground">
              De..@tensorgo.com
            </p>
          </div>
          <div className="ml-auto font-medium">HR Chargebee</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/03.png" alt="Avatar" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Chandan</p>
            <p className="text-sm text-muted-foreground">
              ch..@onramp.com
            </p>
          </div>
          <div className="ml-auto font-medium">CTO , Onramp</div>
        </div>
      </CardContent>
    </Card>
            </div>
        </div>
    )
}