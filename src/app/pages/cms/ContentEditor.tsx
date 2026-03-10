'use client';

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Save, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { mockApi } from '../../../utils/mockApi';
import type { ContentItem, CMSFormData } from '../../../types';
import { toast } from 'sonner';

/**
 * ContentEditor - Content creation/editing page
 * Features rich form with validation, status management, and media selection
 * Uses React Hook Form pattern (simplified for demo)
 */
export default function ContentEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<CMSFormData>({
    title: '',
    slug: '',
    content: '',
    contentType: 'article',
    status: 'Draft',
    excerpt: '',
    category: '',
    tags: [],
  });

  // Load existing content if editing
  useEffect(() => {
    if (id) {
      const loadContent = async () => {
        try {
          setLoading(true);
          const content = await mockApi.getContentById(id);
          if (content) {
            setFormData({
              title: content.title,
              slug: content.slug,
              content: content.content,
              contentType: content.contentType,
              status: content.status,
              excerpt: content.excerpt,
              category: content.category,
              tags: content.tags,
            });
          }
        } catch (error) {
          console.error('Error loading content:', error);
          toast.error('Failed to load content');
        } finally {
          setLoading(false);
        }
      };

      loadContent();
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setSaving(true);
      
      if (id) {
        await mockApi.updateContent(id, formData);
        toast.success('Content updated successfully');
      } else {
        await mockApi.createContent(formData);
        toast.success('Content created successfully');
      }
      
      navigate('/cms/content');
    } catch (error) {
      console.error('Error saving content:', error);
      toast.error('Failed to save content');
    } finally {
      setSaving(false);
    }
  };

  const updateField = (field: keyof CMSFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate('/cms/content')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {id ? 'Edit Content' : 'Create New Content'}
          </h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Content */}
        <Card>
          <CardHeader>
            <CardTitle>Content Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => updateField('title', e.target.value)}
                placeholder="Enter content title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => updateField('slug', e.target.value)}
                placeholder="url-friendly-slug"
              />
              <p className="text-xs text-gray-500">Leave empty to auto-generate from title</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => updateField('excerpt', e.target.value)}
                placeholder="Short description (optional)"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content *</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => updateField('content', e.target.value)}
                placeholder="Write your content here..."
                rows={12}
                required
                className="font-mono text-sm"
              />
              <p className="text-xs text-gray-500">
                In production, this would be a rich text editor (TinyMCE, CKEditor, etc.)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Metadata */}
        <Card>
          <CardHeader>
            <CardTitle>Metadata & Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contentType">Content Type</Label>
                <Select
                  value={formData.contentType}
                  onValueChange={(value: any) => updateField('contentType', value)}
                >
                  <SelectTrigger id="contentType">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="page">Page</SelectItem>
                    <SelectItem value="article">Article</SelectItem>
                    <SelectItem value="banner">Banner</SelectItem>
                    <SelectItem value="announcement">Announcement</SelectItem>
                    <SelectItem value="faq">FAQ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value: any) => updateField('status', value)}
                >
                  <SelectTrigger id="status">
                    <SelectValue />
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
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => updateField('category', e.target.value)}
                placeholder="e.g., Berita, Kegiatan, Akademik"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input
                id="tags"
                value={formData.tags?.join(', ')}
                onChange={(e) => updateField('tags', e.target.value.split(',').map(t => t.trim()))}
                placeholder="tag1, tag2, tag3"
              />
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button type="submit" disabled={saving}>
            {saving ? (
              <>Saving...</>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                {id ? 'Update' : 'Create'} Content
              </>
            )}
          </Button>
          <Button type="button" variant="outline" onClick={() => navigate('/cms/content')}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
