import React, { Fragment } from 'react';
import { Card, Typography, Tag, Avatar, Space } from 'antd';
import { ClockCircleOutlined, GlobalOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import './SnippetNew.scss';
import SentimentBadge from '../SentimentBadge/SentimentBadge';
import { SnippetNewsProps } from '../types';

const SnippetNews: React.FC<SnippetNewsProps> = ({ data }) => {
  const formatHighlights = (text: string) =>
    text.split(/(<kw>.*?<\/kw>)/g).map((part, i) =>
      part.startsWith('<kw>') ? (
        <Tag key={i} color="blue">
          {part.replace(/<\/?kw>/g, '')}
        </Tag>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      )
    );

  return (
    <Card className="snippet-news">
      <Space align="start">
        <Avatar src={data.FAV} shape="square" size={48} />
        <div className="snippet-content">
          <Typography.Link href={data.URL} target="_blank" className="title">
            {data.TI}
          </Typography.Link>

          <Space size="small" className="meta">
            <ClockCircleOutlined />
            <span>{dayjs(data.DP).format('DD MMM YYYY')}</span>
            {data.AU.length > 0 && <span>by {data.AU.join(', ')}</span>}
            <GlobalOutlined />
            <span>{data.CNTR}</span>
            <span>{data.LANG.toUpperCase()}</span>
            <SentimentBadge sentiment={data.SENT} />
            <span>Reach: {data.REACH.toLocaleString()}</span>
          </Space>

          <div className="highlight">{formatHighlights(data.HIGHLIGHTS[0])}</div>

          <Space wrap size={[4, 8]} className="tags">
            {data.KW.map((tag) => (
              <Tag key={tag.value} bordered>
                {tag.value}
                <sup>{tag.count}</sup>
              </Tag>
            ))}
          </Space>

          <div className="traffic">
            <Typography.Text type="secondary">
              Top Traffic:
            </Typography.Text>{' '}
            {data.TRAFFIC.slice(0, 3).map((t, idx) => (
              <Fragment key={t.value}>
                <span>
                  {t.value} {Math.round(t.count * 100)}%
                </span>
                {idx < 2 && <span>, </span>}
              </Fragment>
            ))}
          </div>
        </div>
      </Space>
    </Card>
  );
};

export default SnippetNews;
