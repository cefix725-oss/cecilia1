import { ReactNode } from "react";
import CountUpStat from "./CountUpStat";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
}

const StatCard = ({ value, label, icon }: StatCardProps) => {
  return <CountUpStat value={value} label={label} />;
};

export default StatCard;
