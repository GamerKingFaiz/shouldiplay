interface CriteriaResult {
  id: number;
  name: string;
  dist: number;
}

interface GameSummary {
  Affiliates: any[];
  averageScore: number;
  bannerScreenshot: BannerScreenshot;
  Companies: Company[];
  createdAt: Date;
  description: string;
  firstReleaseDate: Date;
  firstReviewDate: Date;
  Genres: Genre[];
  hasLootBoxes: boolean;
  id: number;
  isFeatured: boolean;
  isMajorTitle: boolean;
  latestReviewDate: Date;
  logoScreenshot: Screenshot;
  mainChannel: MainChannel;
  mastheadScreenshot: Screenshot;
  medianScore: number;
  monetizationFeatures: MonetizationFeatures;
  name: string;
  newsSearchEnabled: boolean;
  numReviews: number;
  numTopCriticReviews: number;
  numUserReviews: number;
  percentile: number;
  percentRecommended: number;
  Platforms: Platform[];
  Rating: Rating;
  reviewSummary: ReviewSummary;
  screenshots: Screenshot[];
  Skus: string[];
  squareScreenshot: Screenshot;
  tier: string;
  topCriticScore: number;
  trailers: Trailer[];
  type: string;
  updatedAt: Date;
}

interface Company {
  name: string;
  type: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Platform {
  id: number;
  name: string;
  shortName: string;
  imageSrc: string;
  releaseDate: Date;
}

interface Rating {
  value: string;
}

interface BannerScreenshot {
  fullRes: string;
}

interface Screenshot {
  fullRes: string;
  thumbnail: string;
}

interface MainChannel {
  channelId: string;
  channelTitle: string;
  description: string;
  title: string;
  image: string;
  externalUrl: string;
}

interface MonetizationFeatures {
  hasLootBoxes: boolean;
}

interface ReviewSummary {
  summary: string;
  slot1: string;
  slot1State: string;
  slot1P: string;
  slot2: string;
  slot2State: string;
  slot2P: string;
  slot3: string;
  slot3State: string;
  slot3P: string;
  completed: boolean;
}

interface Trailer {
  title: string;
  videoId: string;
  channelId: string;
  description: string;
  externalUrl: string;
  channelTitle: string;
  publishedDate: Date;
  youtubeVideoId: string;
}
