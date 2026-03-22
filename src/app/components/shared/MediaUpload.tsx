import { useState } from 'react';
import { useFetchWithAccessToken } from 'src/functions/useFetchWithAccessToken';
import { BackendApiUrl } from 'src/functions/BackendApiUrl';
import { toast } from 'sonner';

export function MediaUpload({ onUploadComplete }: { onUploadComplete: (url: string) => void }) {
  const { fetchPOST } = useFetchWithAccessToken();
  const [uploading, setUploading] = useState(false);

  const handleFile = async (file: File) => {
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const { data } = await fetchPOST<{ url: string }>(BackendApiUrl.mediaUpload, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (data?.url) onUploadComplete(data.url);
    } catch (err) {
      toast.error('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="border-2 border-dashed rounded-lg p-6 text-center">
      <input type="file" onChange={(e) => e.target.files && handleFile(e.target.files[0])} disabled={uploading} />
      {uploading && <p>Uploading...</p>}
    </div>
  );
}