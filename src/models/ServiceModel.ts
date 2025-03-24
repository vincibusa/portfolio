import { ReactNode } from "react";

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
  }