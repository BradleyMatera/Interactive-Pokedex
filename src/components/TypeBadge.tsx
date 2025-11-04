// TypeBadge.tsx
import React from "react";
import { Chip } from "@nextui-org/react";
import { useTypeColors } from "@/hooks/useTypeColors";

interface TypeBadgeProps {
  type: string;
  size?: "sm" | "md" | "lg";
}

export const TypeBadge: React.FC<TypeBadgeProps> = ({ type, size = "sm" }) => {
  const normalized = type.toLowerCase();
  const { typeColors } = useTypeColors();
  const safeType = typeColors[normalized] ? normalized : "normal";
  const className = `capitalize animate-fade-in type-chip type-${safeType}`;

  return (
    <Chip className={className} variant="solid" size={size}>
      {type}
    </Chip>
  );
};
