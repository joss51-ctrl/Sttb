import { useBerita } from '@/app/components/cms/berita/hooks/useBerita';
import { useKegiatan } from '@/app/components/cms/kegiatan/hooks/useKegiatan';
import { useMedia } from '@/app/components/cms/media/hooks/useMedia';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

export default function Dashboard() {
  const { data: berita } = useBerita();
  const { data: kegiatan } = useKegiatan();
  const { data: media } = useMedia();

  const metrics = [
    { title: 'Total Articles', value: berita?.length || 0, icon: '📄' },
    { title: 'Events', value: kegiatan?.length || 0, icon: '📅' },
    { title: 'Media Items', value: media?.length || 0, icon: '🎬' },
    // { title: 'Users', value: users?.length || 0, icon: '👥' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <span className="text-2xl">{metric.icon}</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent items and status charts can be added here */}
    </div>
  );
}