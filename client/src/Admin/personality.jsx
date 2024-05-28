import Input from "@/components/ui/input.jsx"
import { Label } from "@/components/ui/label"
import { SelectScrollable1 } from "@/components/ui/scrollable1";
import { SelectScrollable2 } from "@/components/ui/scrollable2";
import { SelectScrollable } from "@/components/ui/selectscrollable";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Personality() {
    return (
        <div className="h-full justify-normal my-2 border bg-secondary text-primary rounded-md">
            <div className="w-9/12 mx-16 pt-8">
                <Input type="name" placeholder="AI's Nickname" />
            </div>
            <div className="flex">
                <div className="w-64 ml-16 pt-4">
                    <Input type="name" placeholder="AI's Job Title/Position" />
                </div>
                <div className="w-64 ml-8 py-4">
                    <Input type="name" placeholder="Organization Name" />
                </div>
            </div>
            <div className="w-96 mx-16 py-2">
                <SelectScrollable1 />
            </div>
            <div className="w-96 mx-16 py-2">
                <SelectScrollable2 />
            </div>
            <div className="w-96 mx-16 py-2">
                <Label htmlFor="text">How much should the AI stick to the source knowledge</Label>
            </div>
            <div className="w-96 ml-16 py-0">
                <RadioGroup defaultValue="comfortable">
                    <div className="flex w-96 ">
                        <div className="mr-2 space-x-2">
                            <RadioGroupItem value="default" id="r1" />
                            <Label htmlFor="r1">Default</Label>
                        </div>
                        <div className=" mx-2 space-x-2">
                            <RadioGroupItem value="comfortable" id="r2" />
                            <Label htmlFor="r2">Comfortable</Label>
                        </div>
                        <div className=" mx-2 space-x-2">
                            <RadioGroupItem value="compact" id="r3" />
                            <Label htmlFor="r3">Compact</Label>
                        </div>
                    </div>
                </RadioGroup>      
            </div>
            <div className="w-96 mx-16 pt-4">
                <Label htmlFor="text">Choose the type of outputs AI should focus on</Label>
            </div>
            <div className="w-9/12 ml-16 pt-2 pb-8">
                <Input type="text" placeholder="Enter output type" />
            </div>
        </div>
    )
}