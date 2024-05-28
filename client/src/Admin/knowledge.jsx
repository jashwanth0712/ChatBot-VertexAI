import Input from "@/components/ui/input.jsx"
import { Label } from "@/components/ui/label"
import { SelectScrollable } from "@/components/ui/selectscrollable";

export default function Knowledge() {
    return (
        <div className="flex flex-col h-96 items-center justify-center my-2 border bg-secondary text-primary rounded-md">
            <div className="pb-2">
                <Label htmlFor="picture">Choose files to be added</Label>
            </div>
            <div className="w-60">
                <Input id="picture" type="file" />
            </div>
        </div>
    )
}