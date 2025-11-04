// TypeBadge.tsx
import React from "react";
import { Chip } from "@nextui-org/react";
import { useTypeColors } from "@/hooks/useTypeColors";

interface TypeBadgeProps {
  type: string;
  size?: "sm" | "md" | "lg";
}

export const TypeBadge: React.FC<TypeBadgeProps> = ({ type, size = "sm" }) => {
  const { getTypeColor } = useTypeColors();
  const color = getTypeColor(type);

  return (
    <Chip
      className="capitalize animate-fade-in"
      color={color as any}
      variant="flat"
      size={size}
    >
      {type}
    </Chip>
  );
};
