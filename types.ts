
export enum LawCategory {
    Statute = 'Statute',
    CaseLaw = 'Case Law',
    RemedyClause = 'Remedy Clause',
    RebuttalClause = 'Rebuttal Clause',
    UCCProvision = 'UCC Provision',
    Principle = 'Principle'
}

export interface LawItem {
    title: string;
    category: LawCategory;
    citation: string;
    summary: string;
    explanation: string;
}

export type SearchResults = LawItem[];
