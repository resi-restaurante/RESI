/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { ChangeEvent, useEffect, useState } from 'react';
import { supabase } from '../../supabase';
import Button from '../Button';

export default function RestauntsImg({
  url,
  size,
  onUpload,
}: {
  url: string | null;
  size: number;
  onUpload: any;
}) {
  const [restaurantUrl, setRestaurantUrl] = useState<string>();
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from('imgrestaurant')
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setRestaurantUrl(url);
    } catch (error) {
      console.log('Error downloading image: ', error);
    }
  }

  async function uploadRestaurant(event: ChangeEvent<HTMLInputElement>) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('Selecione uma imagem para feazer o upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('imgrestaurant')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // const { error: updateError } = await supabase.from('restaurants').upsert({
      //   id: user!.id,
      //   images_url: filePath,
      // });

      onUpload(filePath);
    } catch (error) {
      alert(error);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      {restaurantUrl ? (
        <img src={restaurantUrl} style={{ height: size, width: size }} />
      ) : (
        <img src={restaurantUrl} style={{ height: size, width: size }} />
      )}
      <div>
        <Button>
          <label className="button primary block" htmlFor="single">
            {uploading ? 'Uploading ...' : 'Upload'}
          </label>
        </Button>

        <input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadRestaurant}
          disabled={uploading}
        />
      </div>
    </div>
  );
}
