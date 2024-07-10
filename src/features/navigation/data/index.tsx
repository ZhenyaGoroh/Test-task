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
    icon: <HomeIcon className="stroke-grayscale/40" />,
    activeIcon: <HomeIcon className="stroke-grayscale/70" />,
    text: "Лента",
    label: NavigationItemLabels.home,
  },
  {
    icon: <MarketIcon className="stroke-grayscale/40" />,
    activeIcon: <MarketIcon className="stroke-grayscale/70" />,
    text: "Маркетплейс",
    label: NavigationItemLabels.market,
  },
  {
    icon: <RatingIcon className="stroke-grayscale/40" />,
    activeIcon: <RatingIcon className="stroke-grayscale/70" />,
    text: "Рейтинги",
    label: NavigationItemLabels.rating,
  },
  {
    icon: <CompetitionIcon className="stroke-grayscale/40" />,
    activeIcon: <CompetitionIcon className="stroke-grayscale/70" />,
    text: "Cоревнования",
    label: NavigationItemLabels.competition,
  },
  {
    icon: <OrganizationIcon className="stroke-grayscale/40" />,
    activeIcon: <OrganizationIcon className="stroke-grayscale/70" />,
    text: "Организации",
    label: NavigationItemLabels.organization,
  },
  {
    icon: <LiveIcon className="stroke-grayscale/40" />,
    activeIcon: <LiveIcon className="stroke-grayscale/70" />,
    text: "Live",
    label: NavigationItemLabels.live,
  },
];
