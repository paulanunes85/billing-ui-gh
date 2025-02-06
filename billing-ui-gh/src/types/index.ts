// filepath: /billing-ui-gh/billing-ui-gh/src/types/index.ts
export interface BillingData {
    id: string;
    amount: number;
    date: string;
    description: string;
}

export interface DashboardProps {
    billingRecords: BillingData[];
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
}