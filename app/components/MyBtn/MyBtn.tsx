import { Button, Tooltip } from "@chakra-ui/react";
import { sendGAEvent } from "@next/third-parties/google";

export default function MyBtn({
  children,
  variant,
  onClick,
  isDisabled,
  tooltip,
  size = "xs",
  position = "right",
}: {
  children: React.ReactNode;
  variant: "success" | "error" | "default";
  onClick: () => void;
  isDisabled?: boolean;
  tooltip?: string;
  size?: "xs" | "sm" | "md" | "lg";
  position?: "left" | "right";
}) {
  return (
    <Tooltip label={tooltip} aria-label={tooltip} placement="top">
      <Button
        variant={variant}
        onClick={() => {
          onClick();
          sendGAEvent("event", "buttonClicked", {
            value: children?.toString(),
          });
        }}
        size={size}
        width={"min-content"}
        textTransform={"uppercase"}
        isDisabled={isDisabled}
        fontWeight={"bold"}
        style={{float: position}}
      >
        {children}
      </Button>
    </Tooltip>
  );
}
