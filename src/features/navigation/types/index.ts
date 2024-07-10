export enum NavigationItemLabels {
  "home",
  "market",
  "rating",
  "competition",
  "organization",
  "live",
}

export interface NavigationItemData {
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
    text: string;
    isActive?: boolean;
    label?: NavigationItemLabels
  }