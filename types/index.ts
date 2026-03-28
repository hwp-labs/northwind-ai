import type { LucideIcon } from "lucide-react";
import { Control, FieldValues, Path } from "react-hook-form";

export interface MenuItem {
  label: string;
  path: string;
  Icon?: LucideIcon;
  badgeValue?: unknown;
  badgeLabel?: unknown;
}
export interface OptionItem {
  label: string;
  value: string;
  disabled?: boolean;
  item?: unknown;
}
export interface BaseInput {
  name: string;
  label?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
}
export interface ControlledInput<T extends FieldValues> extends BaseInput {
  name: Path<T>;
  control?: Control<T>;
  placeholder?: string;
  loading?: boolean;
  description?: string;
}

export type PageLayout = Readonly<{
  children: React.ReactNode;
}>;

export interface PageParams<T extends string | string[] = string> {
  params: Promise<{ slug: T }>;
  searchParams: Promise<{ [key: string]: T | undefined }>;
}
export interface PageIdParams<T extends string | string[] = string> {
  params: Promise<{ id: T }>;
  searchParams: Promise<{ [key: string]: T | undefined }>;
}

export type ColorVariantType =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "danger";

export enum ColorVariantEnum {
  DEFAULT = "default",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
}
