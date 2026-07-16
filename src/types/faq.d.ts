export type FAQ = {
    isSuccess?: boolean;
    data?: FAQItem[];
    message?: string;
    count?: number;
};



export type FAQItem = {
    id?: string;
    question?: Name;
    answer?: Name;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
};