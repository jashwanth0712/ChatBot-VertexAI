"use client"

import * as React from "react"
import { Dialog } from "@radix-ui/react-dialog"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Command as CommandPrimitive } from "cmdk"

import { cn } from "@/lib/utils"
import { DialogContent } from "./dialog.jsx"

const Command = React.forwardRef(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <CommandPrimitive
        ref={ref}
        className={cn(
          "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
          className
        )}
        {...rest}
      />
    );
  }
);
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogContent className="p-0 overflow-hidden">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <div className="flex items-center px-3 border-b" cmdk-input-wrapper="">
        <MagnifyingGlassIcon className="w-4 h-4 mr-2 opacity-50 shrink-0" />
        <CommandPrimitive.Input
          ref={ref}
          className={cn(
            "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...rest}
        />
      </div>
    );
  }
);

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <CommandPrimitive.List
        ref={ref}
        className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
        {...rest}
      />
    );
  }
);

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef(
  (props, ref) => {
    return (
      <CommandPrimitive.Empty
        ref={ref}
        className="py-6 text-sm text-center"
        {...props}
      />
    );
  }
);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <CommandPrimitive.Group
        ref={ref}
        className={cn(
          "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
          className
        )}
        {...rest}
      />
    );
  }
);

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <CommandPrimitive.Separator
        ref={ref}
        className={cn("-mx-1 h-px bg-border", className)}
        {...rest}
      />
    );
  }
);
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <CommandPrimitive.Item
        ref={ref}
        className={cn(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
          className
        )}
        {...rest}
      />
    );
  }
);

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = (props) => {
  const { className, ...rest } = props;
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...rest}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};


