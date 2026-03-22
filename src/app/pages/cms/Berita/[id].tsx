import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

import { useBerita } from '@/app/components/cms/berita/hooks/useBerita';
import { useBeritaDetail } from '@/hooks/useBeritaDetail';

import { toast } from 'sonner';

const schema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  content: z.string().min(1, 'Content is required'),
  category: z.string().min(1, 'Category is required'),
  thumbnailUrl: z.string().url('Must be a valid URL').optional(),
  taglines: z.string().optional(),
  status: z.enum(['Draft', 'In Review', 'Approved', 'Published', 'Scheduled']),
});

type FormData = z.infer<typeof schema>;

export default function BeritaForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { actions, isCreating, isUpdating } = useBerita();
  const { data: existing, isLoading } =
  useBeritaDetail(id) as {
    data?: FormData;
    isLoading: boolean;
  };

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      content: '',
      category: '',
      thumbnailUrl: '',
      taglines: '',
      status: 'Draft',
    },
  });

  useEffect(() => {
    if (existing) {
      form.reset({
        title: existing.title,
        content: existing.content,
        category: existing.category,
        thumbnailUrl: existing.thumbnailUrl || '',
        taglines: existing.taglines || '',
        status: existing.status || 'Draft',
      });
    }
  }, [existing, form]);

  const onSubmit = async (data: FormData) => {
    let success;
    if (id) {
      success = await actions.updateBerita(id, data);
    } else {
      success = await actions.createBerita(data);
    }
    if (success) {
      navigate('/cms/berita');
    }
  };

  if (isLoading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate('/cms/berita')}>
          Back
        </Button>
        <h1 className="text-2xl font-bold">{id ? 'Edit Article' : 'Create New Article'}</h1>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Content Details</CardTitle>
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
              <Label htmlFor="content">Content *</Label>
              <Textarea id="content" rows={10} {...form.register('content')} />
              {form.formState.errors.content && (
                <p className="text-red-500 text-sm">{form.formState.errors.content.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnailUrl">Thumbnail URL</Label>
              <Input id="thumbnailUrl" {...form.register('thumbnailUrl')} />
              {form.formState.errors.thumbnailUrl && (
                <p className="text-red-500 text-sm">{form.formState.errors.thumbnailUrl.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Input id="category" {...form.register('category')} />
              {form.formState.errors.category && (
                <p className="text-red-500 text-sm">{form.formState.errors.category.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="taglines">Taglines (comma separated)</Label>
              <Input id="taglines" {...form.register('taglines')} />
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
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="submit" disabled={isCreating || isUpdating}>
            {isCreating || isUpdating ? 'Saving...' : (id ? 'Update' : 'Create')}
          </Button>
          <Button type="button" variant="outline" onClick={() => navigate('/cms/berita')}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}