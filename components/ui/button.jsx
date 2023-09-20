import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";


const daisyElement = "btn"

const mainStyles = daisyElement

const buttonVariants = cva(
  mainStyles
  ,
  {
    variants: {
      variant: {
        default: "btn-primary",
        error:
          "btn-error",
        outline:
          "btn-outline border-primary text-primary hover:bg-primary-focus hover:text-primary-base hover:border-primary",
        secondary:
          "btn-secondary",
        ghost: "btn-ghost",
        link: "btn-link",
      },
      size: {
        default: "btn-md",
        sm: "btn-sm",
        lg: "btn-lg",
        xs: "btn-xs",
      },
      shape: {
        default: "",
        block: "btn-block",
        circle: "btn-circle",
        square: "btn-square",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  }
)

/**
 * Define the type of the prop object
 * @typedef {Object} ButtonPropTypes
 * @property {('default'|'destructive'|'outline'|'secondary'|'ghost'|'link')} variant
 * @property {('default'|'sm'|'lg'|'icon')} size
 * @property {boolean} asChild
 * @property {React.ReactNode} children
 * @property {string} className
 */


/**
 * @typedef {ButtonPropTypes & React.ComponentPropsWithoutRef<'button'>} MergedButtonProps
 */

/**
 * @type {React.ForwardRefRenderFunction<HTMLButtonElement, MergedButtonProps>}
 */
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants };

