import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { useMedia } from '@/app/components/cms/media/hooks/useMedia';
import { useMediaDetail } from '@/hooks/useMediaDetail';

// Include "Rejected" to match ContentStatus
const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  formatMedia: z.enum(['Video', 'Artikel']),
  topikKategori: z.string().min(1, 'Topic is required'),
  contentUrl: z.string().url('Must be a valid URL'),
  thumbnailUrl: z.string().url('Must be a valid URL').optional(),
  status: z.enum(['Draft', 'In Review', 'Approved', 'Published', 'Scheduled', 'Rejected']),
});

type FormData = z.infer<typeof schema>;

export default function MediaForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { actions, isCreating, isUpdating } = useMedia();
  const { data: existing, isLoading } = useMediaDetail(id);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      formatMedia: 'Artikel',
      topikKategori: '',
      contentUrl: '',
      thumbnailUrl: '',
      status: 'Draft',
    },
  });

  useEffect(() => {
    if (existing) {
      form.reset({
        title: existing.title,
        formatMedia: existing.formatMedia,
        topikKategori: existing.topikKategori,
        contentUrl: existing.contentUrl,
        thumbnailUrl: existing.thumbnailUrl ?? '',
        status: existing.status ?? 'Draft',
      });
    }
  }, [existing, form]);

  const onSubmit = async (data: FormData) => {
    let success;
    if (id) {
      success = await actions.updateMedia(id, data);
    } else {
      success = await actions.createMedia(data);
    }
    if (success) {
      navigate('/cms/media');
    }
  };

  if (isLoading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate('/cms/media')}>
          Back
        </Button>
        <h1 className="text-2xl font-bold">{id ? 'Edit Media' : 'Upload New Media'}</h1>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Media Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input id="title" {...form.register('title')} />
              {form.formState.errors.title && (
                <p className="text-red-500 text-sm">{form.formState.errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="formatMedia">Format *</Label>
              <Select
                value={form.watch('formatMedia')}
                onValueChange={(val) => form.setValue('formatMedia', val as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Artikel">Article</SelectItem>
                  <SelectItem value="Video">Video</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.formatMedia && (
                <p className="text-red-500 text-sm">{form.formState.errors.formatMedia.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="topikKategori">Topic / Category *</Label>
              <Input id="topikKategori" {...form.register('topikKategori')} />
              {form.formState.errors.topikKategori && (
                <p className="text-red-500 text-sm">{form.formState.errors.topikKategori.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contentUrl">Content URL *</Label>
              <Input id="contentUrl" {...form.register('contentUrl')} placeholder="https://..." />
              {form.formState.errors.contentUrl && (
                <p className="text-red-500 text-sm">{form.formState.errors.contentUrl.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnailUrl">Thumbnail URL</Label>
              <Input id="thumbnailUrl" {...form.register('thumbnailUrl')} placeholder="https://..." />
              {form.formState.errors.thumbnailUrl && (
                <p className="text-red-500 text-sm">{form.formState.errors.thumbnailUrl.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={form.watch('status')}
                onValueChange={(val) => form.setValue('status', val as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Draft">Draft</SelectItem>
                  <SelectItem value="In Review">In Review</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Published">Published</SelectItem>
                  <SelectItem value="Scheduled">Scheduled</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="submit" disabled={isCreating || isUpdating}>
            {isCreating || isUpdating ? 'Saving...' : (id ? 'Update' : 'Upload')}
          </Button>
          <Button type="button" variant="outline" onClick={() => navigate('/cms/media')}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}