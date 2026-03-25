import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { useKegiatan } from '@/app/components/cms/kegiatan/hooks/useKegiatan';
import { useKegiatanDetail } from '@/hooks/useKegiatanDetail';
import { toast } from 'sonner';

const schema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  startDateTime: z.string().min(1, 'Start date is required'),
  endDateTime: z.string().min(1, 'End date is required'),
  organizer: z.string().min(1, 'Organizer is required'),
  category: z.string().min(1, 'Category is required'),
  isFeatured: z.boolean().default(false),
  status: z.enum(['Ongoing', 'Finished', 'Expired']).default('Ongoing'),
  location: z.string().min(1, 'Location is required'),
  description: z.string().min(1, 'Description is required'),
  statusWorkflow: z.enum(['Draft', 'In Review', 'Approved', 'Published', 'Scheduled', 'Rejected']).default('Draft'),
});

type FormData = z.infer<typeof schema>;

export default function KegiatanForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { actions, isCreating, isUpdating } = useKegiatan();
  const { data: existing, isLoading } = useKegiatanDetail(id);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      startDateTime: '',
      endDateTime: '',
      organizer: '',
      category: '',
      isFeatured: false,
      status: 'Ongoing',
      location: '',
      description: '',
      statusWorkflow: 'Draft',
    },
  });

  useEffect(() => {
    if (existing) {
      form.reset({
        title: existing.title,
        startDateTime: existing.startDateTime ? new Date(existing.startDateTime).toISOString().slice(0, 16) : '',
        endDateTime: existing.endDateTime ? new Date(existing.endDateTime).toISOString().slice(0, 16) : '',
        organizer: existing.organizer,
        category: existing.category,
        isFeatured: existing.isFeatured,
        status: existing.status,
        location: existing.location,
        description: existing.description,
        statusWorkflow: existing.statusWorkflow || 'Draft',
      });
    }
  }, [existing, form]);

  const onSubmit = async (data: FormData) => {
    // Convert date strings to Date objects
    const payload = {
      ...data,
      startDateTime: new Date(data.startDateTime),
      endDateTime: new Date(data.endDateTime),
    };
    let success;
    if (id) {
      success = await actions.updateKegiatan(id, payload);
    } else {
      success = await actions.createKegiatan(payload as any);
    }
    if (success) {
      navigate('/cms/kegiatan');
    }
  };

  if (isLoading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate('/cms/kegiatan')}>
          Back
        </Button>
        <h1 className="text-2xl font-bold">{id ? 'Edit Event' : 'Create New Event'}</h1>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input id="title" {...form.register('title')} />
              {form.formState.errors.title && (
                <p className="text-red-500 text-sm">{form.formState.errors.title.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDateTime">Start Date & Time *</Label>
                <Input id="startDateTime" type="datetime-local" {...form.register('startDateTime')} />
                {form.formState.errors.startDateTime && (
                  <p className="text-red-500 text-sm">{form.formState.errors.startDateTime.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDateTime">End Date & Time *</Label>
                <Input id="endDateTime" type="datetime-local" {...form.register('endDateTime')} />
                {form.formState.errors.endDateTime && (
                  <p className="text-red-500 text-sm">{form.formState.errors.endDateTime.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="organizer">Organizer *</Label>
              <Input id="organizer" {...form.register('organizer')} />
              {form.formState.errors.organizer && (
                <p className="text-red-500 text-sm">{form.formState.errors.organizer.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Input id="category" {...form.register('category')} />
              {form.formState.errors.category && (
                <p className="text-red-500 text-sm">{form.formState.errors.category.message}</p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="isFeatured"
                checked={form.watch('isFeatured')}
                onCheckedChange={(checked) => form.setValue('isFeatured', checked === true)}
              />
              <Label htmlFor="isFeatured">Featured Event</Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Event Status *</Label>
              <Select
                value={form.watch('status')}
                onValueChange={(val) => form.setValue('status', val as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ongoing">Ongoing</SelectItem>
                  <SelectItem value="Finished">Finished</SelectItem>
                  <SelectItem value="Expired">Expired</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input id="location" {...form.register('location')} />
              {form.formState.errors.location && (
                <p className="text-red-500 text-sm">{form.formState.errors.location.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea id="description" rows={6} {...form.register('description')} />
              {form.formState.errors.description && (
                <p className="text-red-500 text-sm">{form.formState.errors.description.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="statusWorkflow">Workflow Status</Label>
              <Select
                value={form.watch('statusWorkflow')}
                onValueChange={(val) => form.setValue('statusWorkflow', val as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select workflow status" />
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
            {isCreating || isUpdating ? 'Saving...' : (id ? 'Update' : 'Create')}
          </Button>
          <Button type="button" variant="outline" onClick={() => navigate('/cms/kegiatan')}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}