export interface RelatedTopic {
    id: number;
    label: string;
    isMainTopic?: boolean;
    x?: number | string;
    y?: number | string;
}

export type Response = Record<string, RelatedTopic[]>;

export interface TopicProps {
    mainTheme: string;
    relatedTopics: RelatedTopic[];
}
