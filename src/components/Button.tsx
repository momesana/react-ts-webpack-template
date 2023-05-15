import type { PropsWithChildren, ReactElement } from "react";

interface ButtonProps {
  type: "primary" | "secondary";
}

function Button({
  type,
  children,
}: PropsWithChildren<ButtonProps>): ReactElement {
  return (
    <button
      style={{
        backgroundColor: type === "primary" ? "#1677ff" : "#dedede",
        color: type === "primary" ? "white" : "black",
        minHeight: 32,
        padding: 8,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
