export enum NavigationItemLabels {
  "home" = "home",
  "market" = "market",
  "rating" = "rating",
  "competition" = "competition",
  "organization" = "organization",
  "live" = "live",
}

export interface NavigationItemData {
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
    text: string;
    isActive?: boolean;
    label?: NavigationItemLabels
  }