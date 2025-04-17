import { Badge } from "antd";

const SentimentBadge = ({ sentiment }: { sentiment: string }) => {
    const statusMap = {
      positive: 'success',
      negative: 'error',
      neutral: 'default',
    } as const;
    return <Badge status={statusMap[sentiment as keyof typeof statusMap]} text={sentiment} />;
};

export default SentimentBadge;