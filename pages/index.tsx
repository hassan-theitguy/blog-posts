import useSWR from 'swr';

interface StaticData {
  href: string;
  title: string | null;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const IndexPage: React.FC = () => {
  const { data, error } = useSWR<StaticData[]>('/api/staticdata', fetcher);

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h1>All my blog posts</h1>
      {data.map((item, index) => (
        <div key={index}>
          <a href={item.href}>{item.title ?? 'No title available'}</a>
        </div>
      ))}
    </div>
  );
};

export default IndexPage;
