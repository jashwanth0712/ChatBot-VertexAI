import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectScrollable1() {
  return (
    <Select>
      <SelectTrigger className="w-[544px]">
        <SelectValue placeholder="Decide how the AI should react when it cannot answer a query" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="gpt3">GPT-3</SelectItem>
          <SelectItem value="gpt3t">GPT-3 Turbo</SelectItem>
          <SelectItem value="gpt3.5">GPT-3.5</SelectItem>
          <SelectItem value="gpt3.5t">GPT-3.5 Turbo</SelectItem>
          <SelectItem value="gpt4o">GPT-4o</SelectItem>
          <SelectItem value="gpt4">GPT-4</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
