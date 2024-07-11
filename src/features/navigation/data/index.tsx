import { NavigationItemData, NavigationItemLabels } from "@/features/navigation/types";
import {
  CompetitionIcon,
  HomeIcon,
  LiveIcon,
  MarketIcon,
  OrganizationIcon,
  RatingIcon,
} from "@/shared";

export const navigationData: NavigationItemData[] = [
  {
    icon: <HomeIcon className="stroke-grayscale/40 transition" />,
    activeIcon: <HomeIcon className="stroke-grayscale/70 transition" />,
    text: "Лента",
    label: NavigationItemLabels.home,
  },
  {
    icon: <MarketIcon className="stroke-grayscale/40 transition" />,
    activeIcon: <MarketIcon className="stroke-grayscale/70 transition" />,
    text: "Маркетплейс",
    label: NavigationItemLabels.market,
  },
  {
    icon: <RatingIcon className="stroke-grayscale/40 transition" />,
    activeIcon: <RatingIcon className="stroke-grayscale/70 transition" />,
    text: "Рейтинги",
    label: NavigationItemLabels.rating,
  },
  {
    icon: <CompetitionIcon className="stroke-grayscale/40 transition" />,
    activeIcon: <CompetitionIcon className="stroke-grayscale/70 transition" />,
    text: "Cоревнования",
    label: NavigationItemLabels.competition,
  },
  {
    icon: <OrganizationIcon className="stroke-grayscale/40 transition" />,
    activeIcon: <OrganizationIcon className="stroke-grayscale/70 transition" />,
    text: "Организации",
    label: NavigationItemLabels.organization,
  },
  {
    icon: <LiveIcon className="stroke-grayscale/40 transition" />,
    activeIcon: <LiveIcon className="stroke-grayscale/70 transition" />,
    text: "Live",
    label: NavigationItemLabels.live,
  },
];
