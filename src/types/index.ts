export interface IAppConfig {
  theme: string;
  lang: string;
  analysis: boolean;
  filters: boolean;
  topics: boolean;
  recentadd: boolean;
}

export interface IStatusState {
  isAnalysisPanelOpen: boolean;
  isLiveVisitorDrawerOpen: boolean;
  isRecentListDrawerOpen: boolean;
  isNavbarDrawerOpen: boolean;
  isFilterDrawerOpen: boolean;
  isTopicDrawerOpen: boolean;
  isSearchModalOpen: boolean;
  isSampleSearchItemSelectionModalOpen: boolean;
  isSearchInfoDrawerOpen: boolean;
  isSearchInputDrawerOpen: boolean;
}

export type ResultType = {
  video_id: string;
  youtube_id: string;
  views: number;
  start_time: number;
  end_time: number;
  description: string;
  description_relevance_score: number;
  query: string;
  query_relevance_score: number;
  submitted_at: number;
};
