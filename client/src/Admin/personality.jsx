import Input from "@/components/ui/input.jsx"
import { Label } from "@/components/ui/label"
import { SelectScrollable } from "@/components/ui/selectscrollable";
import { Textarea } from "@/components/ui/textarea"


export default function Personality() {
    return (
    <div className="h-full justify-normal my-2 border bg-secondary text-primary rounded-md">
        <div className="w-9/12 mx-16 pt-4">
            <Input type="name" placeholder="AI's Nickname" />
        </div>
        <div className="flex">
        <div className="w-64 ml-16 pt-4">
            <Input type="name" placeholder="AI's Job Title/Position" />
        </div>
        <div className="w-64 ml-8 pt-4">
            <Input type="name" placeholder="Organization Name" />
        </div>
        </div>
        <div className="w-60 mx-16 my-4">
            <Label htmlFor="picture">Choose Image</Label>
            <Input id="picture" type="file" />
        </div>
        <div className="w-9/12 mx-16 pt-0">
            <Label htmlFor="text">Description</Label>
            <Textarea placeholder="Type your message here." />
        </div>
        <div className="w-60 mx-16 pt-2">
            <Label htmlFor="text">Model</Label>
            <SelectScrollable />
        </div>

    </div>
    )
}