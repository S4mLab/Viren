export interface RelatedTopic {
    id: number;
    label: string;
}

export type Response = Record<string, RelatedTopic[]>;

export interface TopicProps {
    mainTheme: string;
    relatedTopics: RelatedTopic[];
}
